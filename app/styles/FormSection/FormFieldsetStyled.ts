import styled from "styled-components";

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: none;
  margin: 0;
  padding: 0;
`;

export const Label = styled.label`
  color: ${(props) => props.theme.colors.slate700};
  font-size: larger;
  font-weight: ${(props) => props.theme.fonts.weight[2]};

  line-height: 150%;
`;

export const ComplexInputField = styled.div``;

export const CurrencyIcon = styled.p``;

export const Input = styled.input``;

export const WarningMessage = styled.span`
  position: relative;
  top: -1em;
  color: ${(props) => props.theme.colors.red};
  display: block;
`;
