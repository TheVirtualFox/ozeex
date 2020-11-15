import React, {useCallback, useEffect, useRef, useState} from 'react';
import {InnerPictureContainer, ItemPicture, SliderPictureView} from './item-image-slider.styled'
import {ResultPicture} from "../../models/result/ResultPicture";
import {useContainerDimensions} from "../../hooks/use-resize.hook";
import {LazyImage} from "../lazy-image/lazy-image.component";
import {DeviceDetectorContext} from "../../contexts/device-detector.context";

interface ItemImageSliderProps {
    id: number,
    pictures: ResultPicture[],
    active: boolean,
    setIsSliderPlay: any
}

/**
 * слайдер с картинками спартует по клику
 * @param id
 * @param pictures массив картинок ResultPicture
 * @param active слыйдер меняет картинки и этот айтем текущжий слайдер запустили
 * @param setIsSliderPlay
 * @constructor
 */
export function ItemImageSlider({id, pictures, active, setIsSliderPlay}: ItemImageSliderProps) {

    const [currentPictureIndex, setCurrentPictureIndex] = useState(0);
    const refInnerPictureContainer = useRef();
    const { width: widthInnerPictureContainer } = useContainerDimensions(refInnerPictureContainer);

    // грузим сначала только одну картинку
    const [isImagesLoaded, setIsImagesLoaded] = useState(false);

    const clickHandler = useCallback(() => {
        setIsSliderPlay(id, true);
    }, [active]);

    const [timerId, setTimerId] = useState(null);
    useEffect(() => {
        if(active) {
            const id = setInterval(() => {
                setCurrentPictureIndex((prevCurrentPictureIndex) => (prevCurrentPictureIndex + 1) % pictures.length);
            }, 1000);
            setTimerId(id);
        } else {
            if (timerId) clearInterval(timerId);
        }

        if (active && !isImagesLoaded) {
            setIsImagesLoaded(true);
        }
    }, [active]);


    return (
        <>
            <DeviceDetectorContext.Consumer>
                {
                    ({isIe}) => (
                        <SliderPictureView onClick={clickHandler}>
                            <InnerPictureContainer ref={refInnerPictureContainer} style={{transform: `translateX(${-currentPictureIndex * widthInnerPictureContainer}px)`}}>
                                {pictures.filter((item, index) => active || index === 0 || isImagesLoaded ).map(picture => {
                                    if (isIe) {
                                        return <ItemPicture key={picture.id + picture.path} src={`https://picsum.photos/320/180?cache=${picture.path}`} alt="" />
                                    } else {
                                        return <LazyImage key={picture.id + picture.path} src={`https://picsum.photos/320/180?cache=${picture.path}`} alt="" />
                                    }
                                })}
                            </InnerPictureContainer>
                        </SliderPictureView>
                    )
                }
            </DeviceDetectorContext.Consumer>

        </>
        );
}
/* picture.path */
