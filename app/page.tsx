"use client";

import React, { useState } from "react";
import Image from "next/image";
// import styles from "./page.module.css";
import { ThemeProvider } from "styled-components";
import theme from "@/theme";
import {
  BtnClearAll,
  Button,
  ComplexInputField,
  CurrencyIcon,
  DarkSection,
  DisplayResults,
  Fieldset,
  FinalResult,
  FinalResultTotal,
  FormSection,
  Header,
  Input,
  InputsGroup,
  InterestRate,
  Label,
  Legend,
  LightSection,
  Main,
  MortgageTerm,
  RadioBtn,
  RadioGroup,
  RadioWrap,
  SubTitle,
  Text,
  Title,
  WarningMessage,
} from "@/app/PageStyled";

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

  const displayResultsInApp = () => {
    if (results) {
      const formattedResults = formatResults(results);
      return (
        <DisplayResults id="display_of_results">
          <FinalResult id="final_result_1">
            {isRepayment
              ? formattedResults.monthlyMortgagePayment
              : formattedResults.monthlyInterestPayment}
          </FinalResult>
          <FinalResultTotal id="final_result_2">
            {isRepayment
              ? formattedResults.totalAmountToRepay
              : formattedResults.costOfLoan}
          </FinalResultTotal>
        </DisplayResults>
      );
    }
    return null;
  };

  return (
    <ThemeProvider theme={theme}>
      <Main>
        <LightSection>
          <Header>
            <Title>Mortgage Calculator</Title>
            <BtnClearAll onClick={clearAllFields}>Clear All</BtnClearAll>
          </Header>
          <FormSection>
            <form>
              <Fieldset>
                <Label>Mortgage Amount</Label>
                <ComplexInputField className="complex_input_field">
                  <CurrencyIcon className="input_clarification_block">
                    £
                  </CurrencyIcon>
                  <Input
                    id="input_mortgage_amount"
                    type="number"
                    value={mortgageAmount}
                    onChange={(e) => setMortgageAmount(e.target.value)}
                  />
                </ComplexInputField>
                {warnings.mortgageAmount && (
                  <WarningMessage>This field is required.</WarningMessage>
                )}
              </Fieldset>
              <InputsGroup>
                <div>
                  <Label>Mortgage Term</Label>
                  <ComplexInputField className="complex_input_field">
                    <Input
                      id="input_mortgage_term"
                      type="number"
                      value={mortgageTerm}
                      onChange={(e) => setMortgageTerm(e.target.value)}
                    />
                    <MortgageTerm className="input_clarification_block">
                      years:
                    </MortgageTerm>
                  </ComplexInputField>
                  {warnings.mortgageTerm && (
                    <WarningMessage>This field is required.</WarningMessage>
                  )}
                </div>
                <div>
                  <Label>Interest Rate</Label>
                  <ComplexInputField className="complex_input_field">
                    <Input
                      id="input_interest_rate"
                      type="number"
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value)}
                    />
                    <InterestRate className="input_clarification_block">
                      %
                    </InterestRate>
                  </ComplexInputField>
                  {warnings.interestRate && (
                    <WarningMessage>This field is required.</WarningMessage>
                  )}
                </div>
              </InputsGroup>

              <RadioGroup>
                <Legend>Mortgage Type</Legend>
                <RadioWrap className="radio_button_big_area">
                  <RadioBtn
                    id="input_radio_repayment"
                    type="radio"
                    name="Mortgage Type"
                    checked={isRepayment}
                    onChange={() => {
                      setIsRepayment(true);
                      setIsInterestOnly(false);
                    }}
                  />
                  <Label> Repayment</Label>
                </RadioWrap>

                <RadioWrap className="radio_button_big_area">
                  <RadioBtn
                    id="input_radio_interest_only"
                    type="radio"
                    name="Mortgage Type"
                    checked={isInterestOnly}
                    onChange={() => {
                      setIsRepayment(false);
                      setIsInterestOnly(true);
                    }}
                  />
                  <Label>Interest Only</Label>
                </RadioWrap>
              </RadioGroup>
              {warnings.repaymentType && (
                <WarningMessage>Please select a repayment type.</WarningMessage>
              )}

              <Button type="submit" onClick={calculateRepayment}>
                <Image
                  src="/icon-calculator.svg"
                  alt="Calculator Icon"
                  width={20}
                  height={20}
                />
                <span style={{ margin: "0 0 0 0.6em" }}>
                  Calculate Repayments
                </span>
              </Button>
            </form>
          </FormSection>
        </LightSection>
        <DarkSection>
          <div>
            <Image
              src="/illustration-empty.svg"
              alt=""
              width={192}
              height={192}
              priority={false} // {false} | {true}
            />
            <SubTitle>Results shown here</SubTitle>
            <Text>
              Complete the form and click “calculate repayments” to see what
              your monthly repayments would be.
            </Text>
          </div>
          <div>
            <SubTitle>Your results</SubTitle>
            {displayResultsInApp()}
            <Text>
              Your results are shown below based on the information you
              provided. To adjust the results, edit the form and click
              “calculate repayments” again.
            </Text>
          </div>
        </DarkSection>
      </Main>
    </ThemeProvider>
  );
};

export default Home;
