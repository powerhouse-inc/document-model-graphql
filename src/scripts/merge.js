import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { print } from "graphql";
import fs from "fs";

const loadedFiles = loadFilesSync(`src/schemas/**/*.graphql`);
const typeDefs = mergeTypeDefs(loadedFiles);
const printedTypeDefs = print(typeDefs);
fs.writeFileSync("src/generated/merged.graphql", printedTypeDefs);
