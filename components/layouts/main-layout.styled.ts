import styled from "styled-components";

export const Root = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
`;

export const MainContainer = styled.div`
  background-color: #669;
  max-width: ${({ theme }) => theme.breakpoints.mainContainerMaxWidth};
  margin: 0 auto;
`;