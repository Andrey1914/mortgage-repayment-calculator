"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import { ThemeProvider } from "styled-components";
import theme from "@/theme";
import { BtnClearAll, Header, LightSection, Title } from "@/app/PageStyled";

interface Results {
  monthlyMortgagePayment: number;
  totalAmountToRepay: number;
  monthlyInterestPayment: number;
  costOfLoan: number;
}

interface FormattedResults {
  monthlyMortgagePayment: string;
  totalAmountToRepay: string;
  monthlyInterestPayment: string;
  costOfLoan: string;
}

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

  const calculateRepayment = () => {
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

  const displayResultsInApp = () => {
    if (results) {
      const formattedResults = formatResults(results);
      return (
        <div id="display_of_results">
          <p id="final_result_1">
            {isRepayment
              ? formattedResults.monthlyMortgagePayment
              : formattedResults.monthlyInterestPayment}
          </p>
          <p id="final_result_2">
            {isRepayment
              ? formattedResults.totalAmountToRepay
              : formattedResults.costOfLoan}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <ThemeProvider theme={theme}>
      <main className={styles.main}>
        <LightSection>
          <Header>
            <Title>Mortgage Calculator</Title>
            <BtnClearAll id="clear_all_fields_button" onClick={clearAllFields}>
              Clear All
            </BtnClearAll>
          </Header>
          <div className={styles.inputGroup}>
            <label>Mortgage Amount:</label>
            <input
              id="input_mortgage_amount"
              type="number"
              value={mortgageAmount}
              onChange={(e) => setMortgageAmount(e.target.value)}
            />
            {warnings.mortgageAmount && (
              <span className={styles.warning}>This field is required.</span>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label>Mortgage Term (years):</label>
            <input
              id="input_mortgage_term"
              type="number"
              value={mortgageTerm}
              onChange={(e) => setMortgageTerm(e.target.value)}
            />
            {warnings.mortgageTerm && (
              <span className={styles.warning}>This field is required.</span>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label>Interest Rate (%):</label>
            <input
              id="input_interest_rate"
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
            />
            {warnings.interestRate && (
              <span className={styles.warning}>This field is required.</span>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label>
              <input
                id="input_radio_repayment"
                type="radio"
                checked={isRepayment}
                onChange={() => {
                  setIsRepayment(true);
                  setIsInterestOnly(false);
                }}
              />
              Repayment
            </label>
            <label>
              <input
                id="input_radio_interest_only"
                type="radio"
                checked={isInterestOnly}
                onChange={() => {
                  setIsRepayment(false);
                  setIsInterestOnly(true);
                }}
              />
              Interest Only
            </label>
            {warnings.repaymentType && (
              <span className={styles.warning}>
                Please select a repayment type.
              </span>
            )}
          </div>

          <button id="submit_button" onClick={calculateRepayment}>
            Calculate Repayment
          </button>
        </LightSection>

        <div id="empty_results_area">{displayResultsInApp()}</div>
      </main>
    </ThemeProvider>
  );
};

export default Home;
