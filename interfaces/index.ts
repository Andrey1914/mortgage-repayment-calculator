export interface Results {
  monthlyMortgagePayment: number;
  totalAmountToRepay: number;
  monthlyInterestPayment: number;
  costOfLoan: number;
}

export interface FormattedResults {
  monthlyMortgagePayment: string;
  totalAmountToRepay: string;
  monthlyInterestPayment: string;
  costOfLoan: string;
}
