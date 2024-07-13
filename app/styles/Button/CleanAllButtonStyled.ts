import styled from "styled-components";

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
