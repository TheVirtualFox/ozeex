import styled, {ThemedStyledFunction} from "styled-components";
import {TagBase} from "../tag/tag.styled";
import {RowBase} from "../item/item.styled";

export interface ItemInfoContainerProps {
    isMobile: boolean;
}

export const ItemInfoContainer = styled.div<ItemInfoContainerProps>`
    height: 200px;
    width: 100%;
    padding .9rem;
    border: 2px solid ${({ theme }) => theme.colors.focusColor};
    background: #424242;
    position: ${({ isMobile }) => isMobile ? 'fixed' : 'static'};
    height: ${({ isMobile }) => isMobile ? '100vh' : 'auto'};
    margin-top: ${({ isMobile }) => isMobile ? '0' : 'calc(-1rem + 2px)'};
    padding-top: ${({ isMobile }) => isMobile ? '3rem' : '.9rem'};
    z-index: ${({ isMobile }) => isMobile ? '9' : '2'};
    top: 0;
`;

export const ItemInfoTitle = styled.span`
  font-weight: 600;
  margin-right: 1rem;
`;

export const Pornstar = styled(TagBase)`
    background-color: #0959cf;
`;

export const Webcam = styled(TagBase)`
    background-color: #32a567;
`;

export const ItemInfoRow = styled(RowBase)`
    font-size: 1.6rem;
    display: flex;
    align-items: center;
`;

export const DescRow = styled(RowBase)`
    display: block;
    font-size: 1.6rem;
`;

export const CloseButton = styled.span`
  font-weight: 600;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 3rem;
  height: 3rem;
  width: 3rem;
  line-height: 1;
`;
