"use client";

import styled, { css } from "styled-components";

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
    margin: 2em 0;
    border-radius: 24px;
  }
  @media screen and (min-width: 1200px) {
    display: flex;
  }
`;

export const LightSection = styled.div`
  margin: 32px 24px;

  @media screen and (min-width: 1200px) {
    width: 60%;
  }
`;

export const DarkSection = styled.div`
  background-color: ${(props) => props.theme.colors.slate900};
  padding: 32px 24px;
  text-align: justify;

  @media screen and (min-width: 768px) {
    border-radius: 0 0 24px 24px;
  }

  @media screen and (min-width: 1200px) {
    padding: 40px;
    width: 40%;
    border-radius: 0 24px 24px 100px;
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
  padding: 0.5em 0;
`;

export const SubTitle = styled.h2`
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
  padding: 1.5em;
  border-radius: 10px;
  border-top: solid 5px ${(props) => props.theme.colors.lime};
`;

export const FinalResult = styled.p`
  color: ${(props) => props.theme.colors.lime};
  font-size: xxx-large;
  font-weight: 700;
`;

export const FinalResultTotal = styled(FinalResult)`
  color: #ffffff;
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
  width: auto;
  margin: 0px 16px;
`;

export const Button = styled.button`
  margin: 2em 0;
  width: 100%;
  background-color: #d8db2f;
  color: #133041;
  font-weight: 500;
  font-size: x-large;
  letter-spacing: 1px;
  word-spacing: 0.5rem;
  padding: 1em;
  border-radius: 2em;
  border: none;
  display: flex;
  flex-direction: row;
  gap: 0.8em;
  justify-content: center;
  &:hover {
    background-color: #d8db2f85;
  }
  &:active {
    background-color: #c9cc24e4;
  }
  @media screen and (min-width: 768px) {
    width: fit-content;
  }
`;

export const WarningMessage = styled.span`
  position: relative;
  top: -1.8em;
  color: #d73328;
  display: block;
`;
