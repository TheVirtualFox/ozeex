import {ResultItem} from "../models/result/ResultItem";

/**
 * Для каждого видео следующие поля обязательны для индексации поисковыми ботами:
 * описание видео
 * дата добавленияпродолжительностьисточниксписок теговсписок порнозвездсписок вебкам моделей.
 * @param resultItems
 */
export function createSeoScript(resultItems: ResultItem[]) {
    return {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": resultItems.map((item, index) => ({
            "@type": "VideoObject",
            "position": index,
            "name": item.description,
            "url": item.id,
            "description": item.description,
            "thumbnailUrl": item.picture.map(picture => picture.path),
            "uploadDate": item.seoDate,
            "duration": item.seoDuration,
            "contentUrl": item.picture[0],
            "embedUrl": item.picture[0],
            "interactionStatistic": {
                "@type": "InteractionCounter",
                "interactionType": { "@type": "http://schema.org/WatchAction" },
                "userInteractionCount": 5647018
            }
        }))
    }
}

