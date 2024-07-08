"use client";

import styled from "styled-components";

export const Body = styled.body`
  min-height: 100svh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LightSection = styled.div`
  margin: 32px 24px;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spaces[0]};
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.slate900};
  font-weight: ${(props) => props.theme.fonts.weight[0]};
  font-size: ${(props) => props.theme.fonts.size[1]};
  line-height: 125%;
  font-style: normal;
  padding: 0.5em 0;
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
