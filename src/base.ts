import fetch from "node-fetch";
import axios, { AxiosRequestConfig } from "axios";
import { Response } from "./types";

type Config = {
  apiKey: string;
  staging?: boolean; //default is true for stagin  environment
};
type RequestOptions = {
  httpMethod: "get" | "post";
  body?: object;
};

export abstract class Base {
  private apiKey: string;
  private staging: boolean;
  private baseUrl: string;

  constructor(config: Config) {
    this.apiKey = config.apiKey;
    this.staging = config.staging ?? true;
    this.baseUrl = config.staging
      ? "https://api.adolsi.com/api/v1"
      : "https://staging-api.adolsi.com/api/v1";
  }

  protected async makeRequest<T>(
    endpoint: string,
    options?: RequestOptions
  ): Promise<Response<T>> {
    const url = `${this.baseUrl}${endpoint}`;
    let requestBody = options?.body;
    const method = options?.httpMethod ?? "get";

    const requestHeaders = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer: ${this.apiKey}`,
    };

    const config = {
      url,
      method,
      headers: requestHeaders,
      data: requestBody,
    };

    const req = await axios(config);

    if (req.status !== 200) {
      throw new Error(req.data.message);
    }
    return req.data;
  }
}
