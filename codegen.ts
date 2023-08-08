import { type CodegenConfig } from "@graphql-codegen/cli";

const tsConfig = {
    strict: true,
    strictScalars: true,
    scalars: {
        Unknown: "unknown",
        DateTime: "string",
        Attachment: "string",
        Address: "`${string}:0x${string}`",
    },
    enumsAsTypes: true,
    allowEnumStringTypes: true,
    avoidOptionals: {
        field: true,
    },
    useIndexSignature: true,
    noSchemaStitching: true,
    skipTypename: false,
    // maybeValue: "T | null | undefined",
    inputMaybeValue: "T | null | undefined",
};

function schemaConfig(name: string): CodegenConfig["generates"] {
    return {
        [`src/generated/${name}/types.ts`]: {
            schema: [
                {
                    [`src/schemas/${name}.graphql`]: {
                        skipGraphQLImport: false,
                    },
                },
            ],
            plugins: ["typescript"],
            config: tsConfig,
        },
        [`src/generated/${name}/resolvers.ts`]: {
            schema: [
                {
                    [`src/schemas/${name}.graphql`]: {
                        skipGraphQLImport: false,
                    },
                },
            ],
            plugins: [
                {
                    add: {
                        content: "import * as SchemaTypes from './types';",
                    },
                },
                "typescript-resolvers",
            ],
            config: { ...tsConfig, namespacedImportName: "SchemaTypes" },
        },
        [`src/generated/${name}/zod.ts`]: {
            schema: `src/schemas/${name}.graphql`,
            plugins: ["typescript-validation-schema"],
            config: {
                importFrom: `./`,
                schema: "zod",
                ...tsConfig,
                scalarSchemas: {
                    Unknown: "z.unknown()",
                    DateTime: "z.string().datetime()",
                    Attachment: "z.string()",
                    Address:
                        "z.custom<`${string}:0x${string}`>((val) => /^[a-zA-Z0-9]+:0x[a-fA-F0-9]{40}$/.test(val as string))",
                },
                directives: {
                    equals: {
                        value: ["regex", "/^$1$/"],
                    },
                },
                withObjectType: true,
            },
        },
    };
}

const config: CodegenConfig = {
    overwrite: true,
    generates: {
        ...schemaConfig("document"),
        ...schemaConfig("budget-statement"),
        ...schemaConfig("document-model"),
        ...schemaConfig("scope-framework"),
    },
};

export default config;
