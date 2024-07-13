"use client";

import React from "react";
import { FormInputGroupProps } from "@/interfaces";

import {
  ComplexInputField,
  Input,
  WarningMessage,
  Label,
  InputsGroup,
  MortgageTerm,
  InterestRate,
} from "@/app/styles";

const FormInputGroup: React.FC<FormInputGroupProps> = ({
  mortgageTerm,
  interestRate,
  warnings,
  setMortgageTerm,
  setInterestRate,
}) => (
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
        <InterestRate className="input_clarification_block">%</InterestRate>
      </ComplexInputField>
      {warnings.interestRate && (
        <WarningMessage>This field is required.</WarningMessage>
      )}
    </div>
  </InputsGroup>
);

export default FormInputGroup;
