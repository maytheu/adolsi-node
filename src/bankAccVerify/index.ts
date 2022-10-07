import { Base } from "../base";

export class BankAccVerify extends Base {
  fetchBanks(): Promise<any> {}
  basicAccVerify(
    bankId: number,
    accountNumber: string,
    callBackUrl?: string
  ): Promise<any> {}
  advanceAccVerify(
    bankId: number,
    accountNumber: string,
    callBackUrl?: string
  ): Promise<any> {}
}
