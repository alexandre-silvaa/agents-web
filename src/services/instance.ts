import axios from "axios";

import { axiosInterceptors } from "./interceptor";
import { CONSTANTS } from "@/constants/constants";

const tenSecondsInMs = 10_000;

export const api = axiosInterceptors(
  axios.create({
    baseURL: CONSTANTS.API_URL,
    timeout: tenSecondsInMs,
    headers: {
      "Content-Type": "application/json",
    },
  })
);
