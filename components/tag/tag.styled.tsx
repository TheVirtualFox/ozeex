import styled from "styled-components";

export const TagBase = styled.span`
    font-size: 1.6rem;
    height: 3rem;
    padding: 0 .5rem;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    margin-right: 1rem;
    border-radius: .5rem;
    cursor: pointer;
`;

export const TagContainer = styled(TagBase)`
    background-color: ${({ theme }) => theme.colors.grayLight2};
`;