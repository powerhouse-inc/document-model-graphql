import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { loadFiles } from "@graphql-tools/load-files";
import {
    constraintDirective,
    constraintDirectiveTypeDefs,
} from "graphql-constraint-directive";
import { BudgetStatement } from "./generated/budget-statement";
import { GraphQLError } from "graphql";
import {
    reducer,
    utils,
    BudgetStatementDocument,
} from "@acaldas/document-model-libs/budget-statement";
import datetime from "./scalars/datetime";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { Resolvers } from "./generated/budget-statement/resolvers";

export interface BudgetStatementContext {
    dataSources: {
        BudgetStatement: BudgetStatementDocument;
    };
}

let BudgetStatement = utils.createBudgetStatement();

const actionMutation = (_parent, args, context: BudgetStatementContext) => {
    try {
        BudgetStatement = reducer(
            context.dataSources.BudgetStatement,
            args.input
        );
        context.dataSources.BudgetStatement = BudgetStatement;
        return context.dataSources.BudgetStatement;
    } catch (error) {
        throw new GraphQLError("Invalid action input", {
            extensions: {
                code: "BAD_USER_INPUT",
                error,
            },
        });
    }
};

const resolvers: Resolvers<BudgetStatementContext> = {
    DateTime: datetime,
    IOperation: {
        __resolveType(obj) {
            const operation = `${obj.type
                .toLowerCase()
                .split("_")
                .map(
                    (value) => `${value[0].toUpperCase()}${value.substring(1)}`
                )
                .join("")}Operation`;
            return operation as "Operation";
        },
    },
    IDocument: {
        __resolveType(obj) {
            if (obj.documentType === "powerhouse/budget-statement") {
                return "BudgetStatement";
            }
            return "BudgetStatement";
        },
    },
    Query: {
        document: (_, __, context) => context.dataSources.BudgetStatement,
        budgetStatement: (_, __, context) =>
            context.dataSources.BudgetStatement,
    },
    Mutation: {
        setName: actionMutation,
        undo: actionMutation,
        redo: actionMutation,
        prune: actionMutation,
        loadState: actionMutation,
        addAccount: actionMutation,
        deleteAccount: actionMutation,
    },
};

const typeDefs = await loadFiles("src/schemas/*.graphql");
let schema = makeExecutableSchema<BudgetStatementContext>({
    typeDefs: [constraintDirectiveTypeDefs, typeDefs],
    resolvers,
});
schema = constraintDirective()(schema);

const server = new ApolloServer<BudgetStatementContext>({
    schema,
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async () => ({
        dataSources: {
            BudgetStatement: BudgetStatement,
        },
    }),
});

console.log(`🚀  Server ready at: ${url}`);
