"use client";

import styled from "styled-components";
import Image from "next/image";

export const Body = styled.body`
  min-height: 100svh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.main`
  @media screen and (min-width: 768px) {
    width: 85%;
    background-color: #ffffff;
    margin: ${(props) => props.theme.spaces[4]} 0;
    border-radius: 1.5em;
  }
  @media screen and (min-width: 1200px) {
    display: flex;
  }
`;

export const LightSection = styled.div`
  padding: ${(props) => props.theme.spaces[3]};
  @media screen and (min-width: 1200px) {
    width: 60%;
    padding: 2.5em;
  }
`;

export const DarkSection = styled.div`
  background-color: ${(props) => props.theme.colors.slate900};
  text-align: justify;
  display: flex;
  padding: ${(props) => props.theme.spaces[3]};
  @media screen and (min-width: 768px) {
    padding: ${(props) => props.theme.spaces[4]} 1.5em;

    border-radius: 0 0 1.5em 1.5em;
  }

  @media screen and (min-width: 1200px) {
    padding: 2.5em;
    width: 40%;
    border-radius: 0 1.5em 1.5em 6.25em;
  }
`;

export const FormSection = styled.section`
  margin-top: ${(props) => props.theme.spaces[3]};
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spaces[2]};

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.slate900};
  font-weight: ${(props) => props.theme.fonts.weight[2]};
  font-size: ${(props) => props.theme.fonts.size[1]};
  line-height: 125%;
  font-style: normal;
  padding: ${(props) => props.theme.spaces[2]} 0;
`;

export const SubTitle = styled.h2`
  padding: ${(props) => props.theme.spaces[3]} 0;
  color: #ffffff;
`;

export const Text = styled.p`
  color: ${(props) => props.theme.colors.slate300};
  font-size: large;

  @media screen and (min-width: 1200px) {
    line-height: 150%;
  }
`;

export const DisplayResults = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  padding: ${(props) => props.theme.spaces[4]};
  margin-top: ${(props) => props.theme.spaces[4]};
  border-radius: 0.625em;
  border-top: solid 5px ${(props) => props.theme.colors.lime};
`;

export const EmptyResultsArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FinalResult = styled.p`
  color: ${(props) => props.theme.colors.lime};
  font-family: var(--ff-sans);
  font-size: xxx-large;
  font-weight: ${(props) => props.theme.fonts.weight[2]};
`;

export const FinalResultTotal = styled(FinalResult)`
  font-size: x-large;
  color: #ffffff;
`;

export const FinalResultText = styled.span`
  color: ${(props) => props.theme.colors.slate300};
  margin-bottom: ${(props) => props.theme.spaces[3]};
  display: block;
  font-size: large;
`;

export const BtnClearAll = styled.button`
  display: block;
  width: fit-content;
  border: none;
  background: none;
  margin: 0;
  padding: 0;
  text-decoration-line: underline;
  color: ${(props) => props.theme.colors.slate700};
  font-size: larger;
  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.slate900};
  }
`;

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: none;
  margin: 0;
  padding: 0;
`;

export const InputsGroup = styled(Fieldset)`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: ${(props) => props.theme.spaces[4]};
  }
`;

export const Label = styled.label`
  color: ${(props) => props.theme.colors.slate700};
  font-size: larger;
  font-weight: ${(props) => props.theme.fonts.weight[2]};

  line-height: 150%;
`;

export const Legend = styled(Label)``;

export const ComplexInputField = styled.div``;

export const CurrencyIcon = styled.p``;

export const MortgageTerm = styled(CurrencyIcon)``;

export const InterestRate = styled(CurrencyIcon)``;

export const Input = styled.input``;

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

export const WarningMessage = styled.span`
  position: relative;
  top: -1em;
  color: ${(props) => props.theme.colors.red};
  display: block;
`;

export const RadioWarningMessage = styled(WarningMessage)`
  top: 1em;
`;
