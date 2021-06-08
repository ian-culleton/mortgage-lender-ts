import LoanApplication from "./LoanApplication";
import { LoanStatus } from "./LoanStatus";

export default class MortgageLender {
  availableFunds: number = 0;
  pendingFunds: number = 0;

  addFunds(amt: number):void {
    this.availableFunds += amt;
  }

  approve(pendingApp: LoanApplication): void {
    if( pendingApp.loanAmount <= this.availableFunds) {
      pendingApp.loanStatus = LoanStatus.Approved;
    } else {
      pendingApp.loanStatus = LoanStatus.Denied;
    }
  }

  reviewApplication(pendingApp: LoanApplication): void {

  }

  sendOffer(loanApp: LoanApplication):void {}

  releaseOffer(loanApp: LoanApplication): void {}
}