"use client";

import React from "react";
import { FormFieldsetProps } from "@/interfaces";

import {
  Fieldset,
  Label,
  ComplexInputField,
  CurrencyIcon,
  Input,
  WarningMessage,
} from "@/app/styles";

const FormFieldset: React.FC<FormFieldsetProps> = ({
  mortgageAmount,
  warnings,
  setMortgageAmount,
}) => (
  <Fieldset>
    <Label>Mortgage Amount</Label>
    <ComplexInputField className="complex_input_field">
      <CurrencyIcon className="input_clarification_block">£</CurrencyIcon>
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
);

export default FormFieldset;
