import React, {useEffect, useState} from 'react';
import {Image, placeHolder} from './lazy-image.styled';

/**
 * Ланивая загрузка
 * картинок не работает в браузере ie
 * @param src
 * @param alt
 * @constructor
 */
export function LazyImage({ src, alt }) {
    const [imageSrc, setImageSrc] = useState(placeHolder);
    const [imageRef, setImageRef] = useState();

    const onLoad = event => {
        event.target.classList.add("loaded");
    };

    const onError = event => {
        event.target.classList.add("has-error");
    };

    useEffect(() => {
            let observer;
            let canceled = false;

            if (imageRef && imageSrc !== src) {
                if (IntersectionObserver) {
                    observer = new IntersectionObserver(entries => {
                            entries.forEach(entry => {
                                if (
                                    !canceled &&
                                    (entry.intersectionRatio > 0 || entry.isIntersecting)
                                ) {
                                    setImageSrc(src);
                                    observer.unobserve(imageRef);
                                }
                            });
                        },
                        {
                            threshold: 0.01,
                            rootMargin: "75%"
                        }
                    );
                    observer.observe(imageRef);
                } else {
                    setImageSrc(src);
                }
            }
            return () => {
                canceled = true;
                if (observer && observer.unobserve) {
                    observer.unobserve(imageRef);
                }
            };
        },
        [src, imageSrc, imageRef]
    );

    return (
        <Image
            ref={setImageRef}
            src={imageSrc}
            alt={alt}
            onLoad={onLoad}
            onError={onError}
        />
    );
}
