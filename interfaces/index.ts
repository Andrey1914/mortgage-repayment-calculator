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

export interface FormFieldsetProps {
  mortgageAmount: string;
  warnings: { [key: string]: boolean };
  setMortgageAmount: (value: string) => void;
}

export interface FormInputGroupProps {
  mortgageTerm: string;
  interestRate: string;
  warnings: { [key: string]: boolean };
  setMortgageTerm: (value: string) => void;
  setInterestRate: (value: string) => void;
}

export interface ResultsSectionProps {
  results: Results | null;
  isRepayment: boolean;
  formatResults: (results: Results) => FormattedResults;
}

export interface FormSectionProps {
  mortgageAmount: string;
  mortgageTerm: string;
  interestRate: string;
  isRepayment: boolean;
  isInterestOnly: boolean;
  warnings: { [key: string]: boolean };
  setMortgageAmount: (value: string) => void;
  setMortgageTerm: (value: string) => void;
  setInterestRate: (value: string) => void;
  setIsRepayment: (value: boolean) => void;
  setIsInterestOnly: (value: boolean) => void;
  calculateRepayment: (event: React.FormEvent<HTMLButtonElement>) => void;
}

export interface ClearAllButtonProps {
  clearAllFields: () => void;
}
