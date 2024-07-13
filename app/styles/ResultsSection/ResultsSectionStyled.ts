import styled from "styled-components";

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
