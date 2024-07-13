"use client";

import React, { useState } from "react";
import { Results, FormattedResults } from "@/interfaces";
import { ThemeProvider } from "styled-components";
import theme from "@/theme";
import {
  Main,
  Header,
  Title,
  FormSection as FormSectionStyled,
  LightSection,
  DarkSection,
} from "@/app/styles";
import { ClearAllButton, FormSection, ResultsSection } from "@/app/components";

const Home: React.FC = () => {
  const [mortgageAmount, setMortgageAmount] = useState<string>("");
  const [mortgageTerm, setMortgageTerm] = useState<string>("");
  const [interestRate, setInterestRate] = useState<string>("");
  const [isRepayment, setIsRepayment] = useState<boolean>(false);
  const [isInterestOnly, setIsInterestOnly] = useState<boolean>(false);
  const [warnings, setWarnings] = useState<{ [key: string]: boolean }>({});
  const [results, setResults] = useState<Results | null>(null);

  const clearAllFields = () => {
    setMortgageAmount("");
    setMortgageTerm("");
    setInterestRate("");
    setIsRepayment(false);
    setIsInterestOnly(false);
    setWarnings({});
    setResults(null);
  };

  const triggerWarningsInCaseOfEmptyFields = (): boolean => {
    let newWarnings: { [key: string]: boolean } = {};
    if (!mortgageAmount) newWarnings.mortgageAmount = true;
    if (!mortgageTerm) newWarnings.mortgageTerm = true;
    if (!interestRate) newWarnings.interestRate = true;
    if (!isRepayment && !isInterestOnly) newWarnings.repaymentType = true;
    setWarnings(newWarnings);
    return Object.keys(newWarnings).length === 0;
  };

  const calculateRepayment = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (triggerWarningsInCaseOfEmptyFields()) {
      const loanAmount = parseFloat(mortgageAmount);
      const numberOfPayments = parseFloat(mortgageTerm) * 12;
      const monthlyInterestRate = parseFloat(interestRate) / 100 / 12;
      let finalResults: Results = {
        monthlyMortgagePayment: 0,
        totalAmountToRepay: 0,
        monthlyInterestPayment: 0,
        costOfLoan: 0,
      };

      let monthlyMortgagePayment =
        (loanAmount * monthlyInterestRate) /
        (1 - 1 / Math.pow(1 + monthlyInterestRate, numberOfPayments));
      let totalAmountToRepay = monthlyMortgagePayment * numberOfPayments;
      let monthlyInterestPayment =
        monthlyMortgagePayment - loanAmount / numberOfPayments;
      let costOfLoan = totalAmountToRepay - loanAmount;

      finalResults.monthlyMortgagePayment = monthlyMortgagePayment;
      finalResults.totalAmountToRepay = totalAmountToRepay;
      finalResults.monthlyInterestPayment = monthlyInterestPayment;
      finalResults.costOfLoan = costOfLoan;
      setResults(finalResults);
    }
  };

  const formatResults = (results: Results): FormattedResults => {
    let formattedResults: FormattedResults = {
      monthlyMortgagePayment: "",
      totalAmountToRepay: "",
      monthlyInterestPayment: "",
      costOfLoan: "",
    };

    formattedResults.monthlyMortgagePayment = `£${results.monthlyMortgagePayment
      .toFixed(2)
      .toLocaleString()}`;
    formattedResults.totalAmountToRepay = `£${results.totalAmountToRepay
      .toFixed(2)
      .toLocaleString()}`;
    formattedResults.monthlyInterestPayment = `£${results.monthlyInterestPayment
      .toFixed(2)
      .toLocaleString()}`;
    formattedResults.costOfLoan = `£${results.costOfLoan
      .toFixed(2)
      .toLocaleString()}`;

    return formattedResults;
  };

  return (
    <ThemeProvider theme={theme}>
      <Main>
        <LightSection>
          <Header>
            <Title>Mortgage Calculator</Title>
            <ClearAllButton clearAllFields={clearAllFields} />
          </Header>
          <FormSectionStyled>
            <FormSection
              mortgageAmount={mortgageAmount}
              mortgageTerm={mortgageTerm}
              interestRate={interestRate}
              isRepayment={isRepayment}
              isInterestOnly={isInterestOnly}
              warnings={warnings}
              setMortgageAmount={setMortgageAmount}
              setMortgageTerm={setMortgageTerm}
              setInterestRate={setInterestRate}
              setIsRepayment={setIsRepayment}
              setIsInterestOnly={setIsInterestOnly}
              calculateRepayment={calculateRepayment}
            />
          </FormSectionStyled>
        </LightSection>
        <DarkSection>
          <ResultsSection
            results={results}
            isRepayment={isRepayment}
            formatResults={formatResults}
          />
        </DarkSection>
      </Main>
    </ThemeProvider>
  );
};

export default Home;
