import React, {useRef} from 'react';
import {ItemCollectionContainer} from "./item-collection.styled";
import {ResultItem} from "../../models/result/ResultItem";
import {Item} from "../item/item.component";
import {ItemCollectionContext, ItemCollectionProvider} from "../../contexts/item-collection.context";
import {ItemInfo} from "../item-info/item-info.component";
import {DeviceDetectorContext} from "../../contexts/device-detector.context";
import {useContainerDimensions} from "../../hooks/use-resize.hook";


/**
 * отображает список айтемов и дополнительную информацию о фйтеме
 * @param isMobile
 * @param widthItemCollectionContainer
 * @param items
 * @param currentActiveItemId
 * @param isItemInfoShow
 */
const renderItems = (isMobile, widthItemCollectionContainer, items, currentActiveItemId, isItemInfoShow) => {
    //@ts-ignore
    const focus = (item) => isItemInfoShow && currentActiveItemId === item.id;
    const itemInRow = Math.floor(widthItemCollectionContainer / 250); // 250 - минимаальная ширина айтема
    const activeItemIndex = items.map(item => item.id).indexOf(currentActiveItemId);
    const rows = Math.floor(activeItemIndex / itemInRow) + 1; // строка в которой айтем в фокусе
    const itemCount = rows * itemInRow; // строк перед блоком дополнительной информации
    const itemsToShow: any = items.slice(0,itemCount)
        .map(item => <Item key={item.id} focus={focus(item)} item={item} isMobile={isMobile} />);
    if (isItemInfoShow) {
        const item = items[activeItemIndex];
        itemsToShow.push(<ItemInfo key={`ItemInfo ${item.id}`} item={item} isMobile={isMobile} />)
    }
    itemsToShow.push(...(items.slice(itemCount).map(item => <Item key={item.id} item={item} isMobile={isMobile} focus={focus(item)} />)));
    return itemsToShow;
};

/**
 * отображает массив айтемов
 * @param items
 * @constructor
 */
export function ItemCollection({items}: {items: ResultItem[]}) {

    const refItemCollectionContainer = useRef();
    const { width: widthItemCollectionContainer } = useContainerDimensions(refItemCollectionContainer);

    return (
        <ItemCollectionProvider>
                <DeviceDetectorContext.Consumer>
                    {
                        ({isMobile}) => (
                            <>
                                <ItemCollectionContext.Consumer>
                                    {
                                        ({currentActiveItemId, isItemInfoShow}) => (
                                            <ItemCollectionContainer ref={refItemCollectionContainer}>
                                                {
                                                    renderItems(isMobile, widthItemCollectionContainer, items, currentActiveItemId, isItemInfoShow)
                                                }
                                            </ItemCollectionContainer>
                                        )
                                    }
                                </ItemCollectionContext.Consumer>
                            </>
                        )
                    }
                </DeviceDetectorContext.Consumer>
        </ItemCollectionProvider>
    );
}


