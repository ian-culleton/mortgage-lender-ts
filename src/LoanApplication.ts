import { transpileModule } from "typescript";
import { LoanStatus } from "./LoanStatus";

export default class LoanApplication {
  loanAmount: number = 0;
  dti: number = 0;
  isQualified: boolean = false;
  creditScore: number = 0;
  savings: number = 0;
  loanStatus: LoanStatus;

  constructor(
    loanAmount: number,
    dti: number,
    creditScore: number,
    savings: number
  ) {
    this.loanAmount = loanAmount;
    this.dti = dti;
    this.creditScore = creditScore;
    this.savings = savings;
  }

  isApproved():boolean {
    if(this.loanStatus === LoanStatus.Approved) return true;
    else return false;
  }
}