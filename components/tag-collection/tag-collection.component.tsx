import React from 'react';
import {Tag} from "../../models/Tag";
import {TagCollectionContainer} from "./tag-collection.styled";
import {TagComponent} from "../tag/tag.component";

/**
 * Коллекция тегов
 * @param tags
 * @constructor
 */
export function TagCollection({tags}: {tags: Tag[]}) {
    return (
        <TagCollectionContainer>
            { tags.map(tag => <TagComponent key={tag} tag={tag} />) }
        </TagCollectionContainer>
    );
}