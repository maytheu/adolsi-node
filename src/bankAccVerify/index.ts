import { Base } from "../base";
import { Response } from "../types";
import { AdvanceVerification, BasicVerification, FetchBank } from "./types";

export class BankAccVerify extends Base {
  fetchBanks(): Promise<Response<FetchBank[]>> {
    return this.makeRequest("/banks");
  }

  basicAccVerify(
    bankId: number,
    accountNumber: string,
    callBackUrl?: string
  ): Promise<Response<BasicVerification>> {
    return this.makeRequest("/bank_b_v", {
      body: { accountNumber, bankId, callBackUrl },
      httpMethod: "post",
    });
  }

  advanceAccVerify(
    bankId: number,
    accountNumber: string,
    callBackUrl?: string
  ): Promise<Response<AdvanceVerification>> {
    return this.makeRequest("/bank_a_v", {
      body: { accountNumber, bankId, callBackUrl },
      httpMethod: "post",
    });
  }
}
