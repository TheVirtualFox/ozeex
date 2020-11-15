import React from 'react';
import {TagContainer} from "./tag.styled";
import {Tag} from "../../models/Tag";

/**
 * для отображения тегов
 * @param tag
 * @constructor
 */
export function TagComponent({tag}: {tag: Tag}) {
    return (
        <TagContainer>
            {tag}
        </TagContainer>
    );
}
