import axios, { AxiosInstance } from "axios";

const apiKey: string = "A7134030-F0A4-4A1A-9566-FAA665E933E3";
export const cbService: AxiosInstance = axios.create({
    baseURL: "https://devapicakesandbakes.retailry.com/",
    headers: { 'api-security-key': apiKey },
});
