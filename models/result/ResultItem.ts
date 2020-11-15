import {ResultPicture} from "./ResultPicture";
import {Tag} from "../Tag";
import {Pornstar} from "../Pornstar";

export class ResultItem {
    readonly id: number;
    source: string;
    description: string;
    added: string | Date;
    duration: string;
    picture: ResultPicture[];
    tag: Tag[];
    pornstar: Pornstar[];
    webcam: string[];
    seoDate: string;
    seoDuration: string;

    constructor(resultItemJson: ResultItem) {
        this.id = resultItemJson.id;
        this.source = resultItemJson.source;
        this.description = resultItemJson.description;

        this.duration = resultItemJson.duration;
        this.picture = resultItemJson.picture;
        this.tag = resultItemJson.tag;
        this.pornstar = resultItemJson.pornstar;
        this.webcam = resultItemJson.webcam;

        // "2020-07-23 22:54:15" -> "2020.07.07 22:54"
        const [data, time] = (resultItemJson.added as string).split(" ");
        this.added = `${data.split("-").join(".")} ${time.slice(0,-3)}`;
        this.seoDate = `${data}T${time}`;
        this.duration = resultItemJson.duration.slice(3);
        // PT1M54S
        const [min, sec] = this.duration.split(":");
        this.seoDuration = `PT${min}M${sec}S`;
    }
}
