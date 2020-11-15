import React from 'react';
import {ResultItem} from "../../models/result/ResultItem";
import {
    CloseButton,
    DescRow,
    ItemInfoContainer,
    ItemInfoRow,
    ItemInfoTitle,
    Pornstar,
    Webcam
} from "./item-info.styled";
import {TagCollection} from "../tag-collection/tag-collection.component";
import {ItemImageSlider} from "../item-image-slider/item-image-slider.component";
import {ItemCollectionContext} from "../../contexts/item-collection.context";


interface ItemInfoProps {
    item: ResultItem,
    isMobile: boolean,
}

const stringCut = (s: string, length: number) => {
    return s.length > length ? ( `${s.slice(0,30).trim()}…` ) : s;
};

/**
 * все данные о айтеме
 * @param item айтем
 * @param isMobile из userAgent
 * @constructor
 */
export function ItemInfo({item, isMobile}: ItemInfoProps) {
    return (
        <ItemInfoContainer isMobile={isMobile}>
            {isMobile &&
                <>
                    <ItemCollectionContext.Consumer>
                        {({currentActiveItemId, isSliderPlay, setIsSliderPlay, setIsItemInfoShow}) => (
                            <>
                            <CloseButton onClick={() => setIsItemInfoShow(item.id, false)}>🞪</CloseButton>
                            <ItemImageSlider key={item.id} id={item.id} active={isSliderPlay && currentActiveItemId === item.id} pictures={item.picture} setIsSliderPlay={setIsSliderPlay} />
                            </>
                        )}
                    </ItemCollectionContext.Consumer>
                </>
            }
            <DescRow>
                <ItemInfoTitle>Description:</ItemInfoTitle>
                {stringCut(item.description, 800)}
            </DescRow>
            <ItemInfoRow>
                <ItemInfoTitle>Tags: </ItemInfoTitle>
                <TagCollection tags={item.tag} />
            </ItemInfoRow>
            {
                item.pornstar.length ?
                <ItemInfoRow>
                    <ItemInfoTitle>Pornstars: </ItemInfoTitle>
                    {item.pornstar.map(pornstar => <Pornstar key={pornstar}>{pornstar}</Pornstar>)}
                </ItemInfoRow>
                : null
            }
            {
                item.webcam.length ?
                <ItemInfoRow>
                    <ItemInfoTitle>Webcam Models: </ItemInfoTitle>
                    {item.webcam.map(cam => <Webcam key={cam}>{cam}</Webcam>)}
                </ItemInfoRow>
                : null
            }
        </ItemInfoContainer>
    );
}
