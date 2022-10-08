import { Response } from "./types";
declare type Config = {
    apiKey: string;
    staging?: boolean;
};
declare type RequestOptions = {
    httpMethod: "get" | "post";
    body?: object;
};
export declare abstract class Base {
    private apiKey;
    private staging;
    private baseUrl;
    constructor(config: Config);
    protected makeRequest<T>(endpoint: string, options?: RequestOptions): Promise<Response<T>>;
}
export {};
