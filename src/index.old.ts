import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync } from "fs";
import { Book, Resolvers } from "./generated/graphql";
import { GraphQLScalarType, Kind } from "graphql";

const dateScalar = new GraphQLScalarType({
    name: "Date",
    description: "Date custom scalar type",
    serialize(value) {
        if (value instanceof Date) {
            return value.getTime(); // Convert outgoing Date to integer for JSON
        }
        throw Error("GraphQL Date Scalar serializer expected a `Date` object");
    },
    parseValue(value) {
        if (typeof value === "number") {
            return new Date(value); // Convert incoming integer to Date
        }
        throw new Error("GraphQL Date Scalar parser expected a `number`");
    },
    parseLiteral(ast) {
        if (ast.kind === Kind.INT) {
            // Convert hard-coded AST string to integer and then to Date
            return new Date(parseInt(ast.value, 10));
        }
        // Invalid hard-coded value (not an integer)
        return null;
    },
});

export interface BookContext {
    dataSources: {
        books: Book[];
    };
}

const typeDefs = readFileSync(
    "/Users/acaldas/dev/makerdao/document-model-graphql/src/schema.graphql",
    { encoding: "utf-8" }
);

const books: Book[] = [
    {
        title: "The Awakening",
        author: { name: "Kate Chopin" },
        date: new Date(),
    },
    {
        title: "City of Glass",
        author: { name: "Paul Auster" },
        date: new Date(),
    },
];

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers: Resolvers<BookContext> = {
    Date: dateScalar,
    SearchResult: {
        __resolveType(obj, contextValue, info) {
            // Only Author has a name field
            // @ts-ignore
            if (obj.name) {
                return "Author";
            }
            // Only Book has a title field
            // @ts-ignore
            if (obj.title) {
                return "Book";
            }
            return null; // GraphQLError is thrown
        },
    },
    Query: {
        books: (_, { title, author }, context) =>
            context.dataSources.books
                .filter((book) => (title ? book.title.includes(title) : true))
                .filter((book) =>
                    author ? book.author.name.includes(author) : true
                ),
        search: (_, { contains }, context) => [
            ...context.dataSources.books.filter((book) =>
                book.title.includes(contains)
            ),
            ...context.dataSources.books
                .filter((book) => book.title.includes(contains))
                .map((book) => ({ name: book.author.name })),
        ],
        // .filter((book) =>
        //     author ? book.author.name.includes(author) : true
        // ),)
    },
    Mutation: {
        addBook: (_, { title, author }, context) => {
            const newBook = { title, author: { name: author } };
            context.dataSources.books.push(newBook);
            return newBook;
        },
    },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer<BookContext>({
    typeDefs,
    resolvers,
    logger: console,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async () => ({
        dataSources: {
            books,
        },
    }),
});

console.log(`🚀  Server ready at: ${url}`);
