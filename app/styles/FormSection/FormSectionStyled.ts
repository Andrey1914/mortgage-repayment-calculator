import Image from "next/image";
import styled from "styled-components";
import { Label, WarningMessage } from "@/app/styles";

export const Legend = styled(Label)``;

export const RadioGroup = styled.fieldset`
  display: block;
  margin-bottom: ${(props) => props.theme.spaces[4]};
  border: none;
  margin: 0;
  padding: 0;
`;

export const RadioWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${(props) => props.theme.spaces[3]};
  height: ${(props) => props.theme.spaces[5]};
  border: 1px solid ${(props) => props.theme.colors.slate500};
  border-radius: ${(props) => props.theme.spaces[1]};
  &:hover {
    border: 1px solid #d8db2f;
  }
`;

export const RadioBtn = styled.input`
  width: ${(props) => props.theme.spaces[3]};
  height: ${(props) => props.theme.spaces[3]};
  margin: 0 ${(props) => props.theme.spaces[3]};
`;

export const RadioWarningMessage = styled(WarningMessage)`
  top: 1em;
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.8em 1em;
  margin: ${(props) => props.theme.spaces[3]} 0;
  font-weight: ${(props) => props.theme.fonts.weight[2]};
  font-size: medium;
  gap: 0.5em;
  background-color: ${(props) => props.theme.colors.lime};
  color: ${(props) => props.theme.colors.slate900};
  letter-spacing: 1px;
  word-spacing: ${(props) => props.theme.spaces[1]};
  border-radius: ${(props) => props.theme.spaces[4]};
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${(props) => props.theme.colors.limeHovered};
  }
  &:active {
    background-color: ${(props) => props.theme.colors.limeClicked};
  }
  @media screen and (min-width: 768px) {
    font-weight: ${(props) => props.theme.fonts.weight[2]};
    gap: 0.8em;
    margin: ${(props) => props.theme.spaces[4]} 0;
    padding: 1em 2.5em;
    font-size: x-large;
    word-spacing: ${(props) => props.theme.spaces[2]};
    width: fit-content;
  }
`;

export const CalculatorIcon = styled(Image)`
  @media screen and (min-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;
