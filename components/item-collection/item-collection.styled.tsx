import styled from "styled-components";

export const ItemCollectionContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.grayLight};
    display: flex;
    flex-wrap: wrap;
    max-width: 1340px;
    margin: 0 auto;
    justify-content: center;
`;
