import axios, { AxiosInstance } from "axios";

const apiKey: string = "D9E37AF8-2184-4464-AC1B-7DFA2A3DFF56";
export const kpService: AxiosInstance = axios.create({
    baseURL: "https://devapikipspublications.retailry.com/",
    headers: { 'api-security-key': apiKey },
});
