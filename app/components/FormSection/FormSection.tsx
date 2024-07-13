"use client";

import React from "react";
import FormFieldset from "./FormFieldset";
import FormInputGroup from "./FormInputGroup";
import { FormSectionProps } from "@/interfaces";
import {
  Label,
  Legend,
  RadioGroup,
  RadioWrap,
  RadioBtn,
  RadioWarningMessage,
  Button,
  CalculatorIcon,
} from "@/app/styles";

const FormSection: React.FC<FormSectionProps> = ({
  mortgageAmount,
  mortgageTerm,
  interestRate,
  isRepayment,
  isInterestOnly,
  warnings,
  setMortgageAmount,
  setMortgageTerm,
  setInterestRate,
  setIsRepayment,
  setIsInterestOnly,
  calculateRepayment,
}) => (
  <form>
    <FormFieldset
      mortgageAmount={mortgageAmount}
      warnings={warnings}
      setMortgageAmount={setMortgageAmount}
    />
    <FormInputGroup
      mortgageTerm={mortgageTerm}
      interestRate={interestRate}
      warnings={warnings}
      setMortgageTerm={setMortgageTerm}
      setInterestRate={setInterestRate}
    />
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
      <RadioWarningMessage>Please select a repayment type.</RadioWarningMessage>
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
);

export default FormSection;
