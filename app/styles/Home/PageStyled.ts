"use client";

import styled from "styled-components";

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
