import type { CodegenConfig } from "@graphql-codegen/cli";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.development" });

const config: CodegenConfig = {
    overwrite: true,
    schema: process.env.GRAPHQL_API_URL,
    documents: ["src/**/*.graphql"],
    ignoreNoDocuments: true,
    generates: {
        "./src/generated/graphql.ts": {
            // preset: "client",
            plugins: [
                "typescript",
                "typescript-operations",
                "typescript-react-apollo",
            ],
            config: {
                withHooks: true,
            },
        },
        "./schema.graphql": {
            plugins: ["schema-ast"],
            config: {
                includeDirectives: true,
            },
        },
    },
};

export default config;
