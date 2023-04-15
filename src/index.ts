import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync } from "fs";
import { BudgetStatement, Resolvers } from "./generated/graphql";
import { GraphQLError, GraphQLScalarType, Kind } from "graphql";
import { reducer, utils } from "@acaldas/document-model-libs/budget-statement";
import { AddAccountSchema, DeleteAccountSchema } from "./generated/zod";

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

export interface BudgetStatementContext {
    dataSources: {
        BudgetStatement: BudgetStatement;
    };
}

const typeDefs = readFileSync(
    "/Users/acaldas/dev/makerdao/document-model-graphql/src/schema.graphql",
    { encoding: "utf-8" }
);

let BudgetStatement = utils.createBudgetStatement();

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers: Resolvers<BudgetStatementContext> = {
    BudgetStatementOperation: {
        __resolveType(obj) {
            if (obj.type === "ADD_ACCOUNT") {
                return "AddAccountOperation";
            }
            if (obj.type === "DELETE_ACCOUNT") {
                return "DeleteAccountOperation";
            }
            return null;
        },
    },
    // Operation: {
    //     __resolveType() {
    //         return "BaseOperation";
    //     },
    // },
    Query: {
        budgetStatement: (_, __, context) =>
            context.dataSources.BudgetStatement,
    },
    Mutation: {
        addAccount: (_, { input }, context) => {
            if (!AddAccountSchema().safeParse(input).success) {
                throw new GraphQLError("Invalid argument value", {
                    extensions: {
                        code: "BAD_USER_INPUT",
                    },
                });
            }
            BudgetStatement = reducer(
                context.dataSources.BudgetStatement as any,
                input as any
            );
            context.dataSources.BudgetStatement = BudgetStatement as any;
            return context.dataSources.BudgetStatement;
        },
        deleteAccount: (_, { input }, context) => {
            if (!DeleteAccountSchema().safeParse(input).success) {
                throw new GraphQLError("Invalid argument value", {
                    extensions: {
                        code: "BAD_USER_INPUT",
                    },
                });
            }
            BudgetStatement = reducer(
                context.dataSources.BudgetStatement as any,
                input as any
            );
            context.dataSources.BudgetStatement = BudgetStatement as any;
            return context.dataSources.BudgetStatement;
        },
    },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer<BudgetStatementContext>({
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
            BudgetStatement: BudgetStatement as any,
        },
    }),
});

console.log(`🚀  Server ready at: ${url}`);
