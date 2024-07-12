"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ThemeProvider } from "styled-components";
import theme from "@/theme";
import {
  BtnClearAll,
  Button,
  CalculatorIcon,
  ComplexInputField,
  CurrencyIcon,
  DarkSection,
  DisplayResults,
  EmptyResultsArea,
  Fieldset,
  FinalResult,
  FinalResultText,
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
  RadioWarningMessage,
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
                <RadioWarningMessage>
                  Please select a repayment type.
                </RadioWarningMessage>
              )}

              <Button type="submit" onClick={calculateRepayment}>
                <CalculatorIcon
                  src="/icon-calculator.svg"
                  alt="Calculator Icon"
                  width={20}
                  height={20}
                />
                Calculate Repayments
              </Button>
            </form>
          </FormSection>
        </LightSection>
        <DarkSection>
          {results ? (
            <div>
              <SubTitle>Your results</SubTitle>
              <Text>
                Your results are shown below based on the information you
                provided. To adjust the results, edit the form and click
                “calculate repayments” again.
              </Text>
              <DisplayResults id="display_of_results">
                <FinalResultText>Your monthly repayments</FinalResultText>
                <FinalResult id="final_result_1">
                  {isRepayment
                    ? formatResults(results).monthlyMortgagePayment
                    : formatResults(results).monthlyInterestPayment}
                </FinalResult>
                <div className="division_line"></div>
                <FinalResultText>
                  Total you will repay over the term
                </FinalResultText>

                <FinalResultTotal id="final_result_2">
                  {isRepayment
                    ? formatResults(results).totalAmountToRepay
                    : formatResults(results).costOfLoan}
                </FinalResultTotal>
              </DisplayResults>
            </div>
          ) : (
            <EmptyResultsArea id="empty_results_area">
              <Image
                src="/illustration-empty.svg"
                alt=""
                width={192}
                height={192}
                priority={false}
              />
              <SubTitle>Results shown here</SubTitle>
              <Text style={{ textAlign: "center" }}>
                Complete the form and click “calculate repayments” to see what
                your monthly repayments would be.
              </Text>
            </EmptyResultsArea>
          )}
        </DarkSection>
      </Main>
    </ThemeProvider>
  );
};

export default Home;
