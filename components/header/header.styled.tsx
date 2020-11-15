import styled from "styled-components";

export const Logo = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.headings.heading1Size};
  padding: 0 .5rem;
  font-weight: 300;
`;

export const HeaderContainer = styled.header`
    background-color: ${({ theme }) => theme.colors.grayLight};
     @media (max-width: 980px) {
      text-align: center;
    } 
`;
