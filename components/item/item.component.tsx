import React from 'react';
import {
    ActiveItemInfoColumn,
    ItemContainer,
    ItemDescription,
    ItemInfoColumn,
    ItemInfoRow,
    MoreInfoButton
} from "./item.styled";
import {ResultItem} from "../../models/result/ResultItem";
import {TagCollection} from '../tag-collection/tag-collection.component';
import {ItemImageSlider} from "../item-image-slider/item-image-slider.component";
import {ItemCollectionContext} from "../../contexts/item-collection.context";


interface ItemProps {
    item: ResultItem,
    isMobile: boolean,
    focus: boolean,
}

/**
 * отображает данные для айтема в фокусе
 * @param item
 */
const renderDataInFocus = (item: ResultItem) => {
    return (
        <>
            <ItemInfoRow>
                <ActiveItemInfoColumn>Duration: {item.duration}</ActiveItemInfoColumn>
            </ItemInfoRow>
            <ItemInfoRow>
                <ActiveItemInfoColumn>Added: {item.added}</ActiveItemInfoColumn>
            </ItemInfoRow>
            <ItemInfoRow>
                <ActiveItemInfoColumn>Source: {item.source}</ActiveItemInfoColumn>
            </ItemInfoRow>
        </>
    )
};

/**
 * отображает данные для айтема не в фокусе
 * @param item
 * @param setIsItemInfoShow
 */
const renderDataNoFocus = (item: ResultItem, setIsItemInfoShow) => {
    return (
        <>
            <ItemInfoRow>
                <ItemInfoColumn>Added: {item.added}</ItemInfoColumn>
                <ItemInfoColumn>Duration: {item.duration}</ItemInfoColumn>
            </ItemInfoRow>
            <ItemInfoRow>
                <ItemDescription>{item.description}</ItemDescription>
            </ItemInfoRow>
            <ItemInfoRow>
                <TagCollection tags={item.tag} />
            </ItemInfoRow>
            <ItemInfoRow>
                <MoreInfoButton onClick={() => setIsItemInfoShow(item.id, true)}>More info</MoreInfoButton>
            </ItemInfoRow>
        </>
    )
};

/**
 * Карточка содержит слайдер картинок, который позволяет просматривать картинки и информациюо видео.
 * Внешний вид карточки отличается для устройств с типом  desktop и  mobile.
 * @param focus открыта панель информации на этой айтеме
 * @param item данные с сервера
 * @param isMobile тип устройства из userAgent
 * @constructor
 */
export function Item({item, isMobile, focus}: ItemProps) {
    //@ts-ignore
    return (
        <ItemCollectionContext.Consumer>
            {({currentActiveItemId, isSliderPlay, setIsItemInfoShow, setIsSliderPlay}) => (
                <ItemContainer focus={focus}>
                    <ItemImageSlider id={item.id} active={isSliderPlay && currentActiveItemId === item.id} pictures={item.picture} setIsSliderPlay={setIsSliderPlay} />
                        {focus && renderDataInFocus(item)}
                        {!focus && renderDataNoFocus(item, setIsItemInfoShow)}
                </ItemContainer>
            )}
        </ItemCollectionContext.Consumer>
    );
}

