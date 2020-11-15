import {Result} from "../models/result/Result";

/**
 * получение данных от сервера
 */
export async function load() {
    const response = await fetch(`${process.env.API_URL}/result`);
    const clientRes = await response.json();
    return new Result(clientRes);
}
