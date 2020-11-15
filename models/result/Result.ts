import {ResultItem} from "./ResultItem";
import {ResultInfo} from "./ResultInfo";

/**
 * структура для хранения данных от сервера /result
 */
export class Result {
    info: ResultInfo;
    item: ResultItem[];

    constructor(resultJson: Result) {
        this.info = resultJson.info;
        this.item = resultJson.item.map(itemJson => new ResultItem(itemJson));
    }
}
