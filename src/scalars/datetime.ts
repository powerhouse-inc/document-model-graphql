import { GraphQLScalarType, GraphQLScalarTypeConfig, Kind } from "graphql";
import { z } from "zod";

const validateDateTime = (dateTimeString: string): boolean => {
    return !!z.string().datetime().safeParse(dateTimeString);
};

const config: GraphQLScalarTypeConfig<string, string> = {
    name: "DateTime",
    serialize(value) {
        if (typeof value === "string") {
            if (validateDateTime(value)) {
                return value;
            }
            throw new TypeError(
                `DateTime cannot represent an invalid date-time-string ${value}.`
            );
        } else {
            throw new TypeError(
                "DateTime cannot be serialized from a non string, " +
                    "non numeric or non Date type " +
                    JSON.stringify(value)
            );
        }
    },
    parseValue(value) {
        if (!(typeof value === "string")) {
            throw new TypeError(
                `DateTime cannot represent non string type ${JSON.stringify(
                    value
                )}`
            );
        }

        if (validateDateTime(value)) {
            return value;
        }
        throw new TypeError(
            `DateTime cannot represent an invalid date-time-string ${value}.`
        );
    },
    parseLiteral(ast) {
        if (ast.kind !== Kind.STRING) {
            throw new TypeError(`DateTime cannot represent non string type`);
        }
        const { value } = ast;
        if (validateDateTime(value)) {
            return value;
        }
        throw new TypeError(
            `DateTime cannot represent an invalid date-time-string ${String(
                value
            )}.`
        );
    },
};

export default new GraphQLScalarType(config);
