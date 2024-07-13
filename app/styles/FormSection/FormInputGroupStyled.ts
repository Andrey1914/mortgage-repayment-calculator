import styled from "styled-components";
import { Fieldset, CurrencyIcon } from "@/app/styles";

export const InputsGroup = styled(Fieldset)`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: ${(props) => props.theme.spaces[4]};
  }
`;

export const MortgageTerm = styled(CurrencyIcon)``;

export const InterestRate = styled(CurrencyIcon)``;
