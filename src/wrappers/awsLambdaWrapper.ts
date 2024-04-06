import { LambdaClient, Lambda } from "@aws-sdk/client-lambda";
import * as LambdaLibrary from "@aws-sdk/client-lambda";

interface LambdaFunctions {
    [key: string]: string
}

export class lambdaWrapper {
    private _client = new Map<string, Lambda>();

    get LambdaLibrary() {
        return LambdaLibrary;
    }

    async connect(config: LambdaClient, functions: LambdaFunctions) {
        try {
            for (const [functionName, functionArn] of Object.entries(functions)) {
                const lambda = new Lambda(config);
                this._client.set(functionName, lambda);
            }
        } catch (error) {
            throw new Error(`Error connecting to one or more functions. ${error}`);
        }
    }

    getClient(functionName: string) {
        if (!this._client.has(functionName)) throw new Error(`Cannot access lambda client for ${functionName} before connecting`);
        return this._client.get(functionName);
    }

    async destroy(functions: LambdaFunctions) {
        try {
            for (const [functionName, functionArn] of Object.entries(functions)) {
                if (this._client.has(functionName)) {
                    const client = this._client.get(functionName);
                    if (client) {
                        client.destroy();
                        this._client.delete(functionName);
                    }
                }
            }
        } catch (error) {
            throw error;
        }
    }
}