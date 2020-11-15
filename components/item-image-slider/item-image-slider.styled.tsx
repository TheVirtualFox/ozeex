import styled from "styled-components";

export const ItemPicture = styled.img`
    max-width: 100%;
    height: auto;
    object-fit: contain;
    min-width: 100%;
    width: 100%;
`;

export const SliderPictureView = styled.div`
    width: 100%;
    margin-bottom: 1rem;
    overflow: hidden;
    cursor: pointer;
`;

export const InnerPictureContainer = styled.div`
    display: flex;
    transition: .3s;
`;