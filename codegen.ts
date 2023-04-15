import type { CodegenConfig } from "@graphql-codegen/cli";
import { z } from "zod";

const config: CodegenConfig = {
    overwrite: true,
    schema: "src/schema.graphql",
    generates: {
        "src/generated/graphql.ts": {
            plugins: ["typescript", "typescript-resolvers"],
            config: {
                strictScalars: true,
                scalars: {
                    Date: "Date",
                },
            },
        },
        "src/generated/zod.ts": {
            plugins: ["typescript-validation-schema"],
            config: {
                importFrom: "./graphql",
                schema: "zod",
                strictScalars: true,
                scalars: {
                    Date: "Date",
                },
                scalarSchemas: {
                    Date: "z.date()",
                },
                withObjectType: true,
            },
        },
        "./graphql.schema.json": {
            plugins: ["introspection"],
        },
    },
};

export default config;
