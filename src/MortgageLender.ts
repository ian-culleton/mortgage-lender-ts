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
    if(
      pendingApp.dti < 36 &&
      pendingApp.creditScore > 620 &&
      pendingApp.savings >= 0.25 * pendingApp.loanAmount
    ) {
      pendingApp.isQualified = true;
    } else {
      pendingApp.isQualified = false;
    }
  }

  sendOffer(loanApp: LoanApplication):void {
    loanApp.loanStatus = LoanStatus.Pending;
    this.pendingFunds += loanApp.loanAmount;
    this.availableFunds -= loanApp.loanAmount;
  }

  releaseOffer(loanApp: LoanApplication): void {
    if(loanApp.loanStatus === LoanStatus.Accepted) {
      this.pendingFunds -= loanApp.loanAmount;
    } else if(loanApp.loanStatus === LoanStatus.Rejected) {
      this.pendingFunds -= loanApp.loanAmount;
      this.availableFunds += loanApp.loanAmount;
    }
  }
}