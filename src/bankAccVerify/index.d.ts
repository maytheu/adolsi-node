import { Base } from "../base";
import { Response } from "../types";
import { AdvanceVerification, BasicVerification, FetchBank } from "./types";
export declare class BankAccVerify extends Base {
    fetchBanks(): Promise<Response<FetchBank[]>>;
    basicAccVerify(bankId: number, accountNumber: string, callBackUrl?: string): Promise<Response<BasicVerification>>;
    advanceAccVerify(bankId: number, accountNumber: string, callBackUrl?: string): Promise<Response<AdvanceVerification>>;
}
