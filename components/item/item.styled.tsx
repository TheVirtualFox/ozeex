import styled from "styled-components";

export const ItemContainer = styled.div<{focus: boolean}>`
    background-color: ${({ theme }) => theme.colors.grayLight};
    border: 1px solid;
    min-width: 240px;
    max-width: 320px;
    margin: .5rem;
    width: 100%;
    padding: .9rem;
    border: 2px solid ${({ focus, theme }) => focus ? theme.colors.focusColor : theme.colors.grayLight };
    flex-shrink: 0;
    z-index: ${({ focus }) => focus ? '3': '1' };
    border-bottom-color: ${({ focus, theme }) => focus ? theme.colors.grayLight : '' };
    flex: 1;
`;

export const MoreInfoButton = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.grayDark};
    color: ${({ theme }) => theme.colors.primary};
    border: none;
    border-radius: .5rem;
    font-size: 1.6rem;
    line-height: 2.4;
    cursor: pointer;
    transition: .3s;
    outline: none;
    &:hover {
      background-color: ${({ theme }) => theme.colors.grayLight2};
    }
`;

export const ItemDescription = styled.p`
    font-size: 1.6rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

export const ItemInfoColumn = styled.div`
    display: flex;
    justify-content: space-between;
    white-space: nowrap;
`;

export const ActiveItemInfoColumn = styled(ItemInfoColumn)`
    font-size: 1.6rem;
`;

export const RowBase = styled.div`
    margin-bottom: 1rem;
`;

export const ItemInfoRow = styled(RowBase)`
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
`;