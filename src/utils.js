import axios from "axios";

// @ts-ignore
export const fetcher = (url) => axios.get(url).then((res) => res.data);
