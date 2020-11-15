import React from 'react';
import {PageResultInfoColumn, PageResultInfoContainer} from "./page-result-info.styled";
import {ResultInfo} from "../../models/result/ResultInfo";
import {DeviceDetectorContext} from "../../contexts/device-detector.context";

/**
 * Заголовок страницы, в котором отображается:
 * - текстовый заголовок страницы в формате
 *      "Best <tag> porn videos", где  <tag> -тег для которого отображаются результаты поиска
 * - количество видео в результатах поиска в формате:
 *      "Total: <count>", где  <count> - общее количество видео в результатах поиска. Отображается только наустройствах с типом desktop.
 * @param ResultInfo
 * @constructor
 */
export function PageResultInfo({info}: {info: ResultInfo}) {
    return (
        <DeviceDetectorContext.Consumer>
            {
                ({isMobile}) => (
                    <PageResultInfoContainer>
                        <PageResultInfoColumn>{`Best ${info.search_term.toUpperCase()} porn videos`}</PageResultInfoColumn>
                        { !isMobile ? <PageResultInfoColumn>{`Total videos: ${info.total}`}</PageResultInfoColumn> : null }
                    </PageResultInfoContainer>
                )
            }
        </DeviceDetectorContext.Consumer>

    );
}
