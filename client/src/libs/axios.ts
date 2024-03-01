import axios from "axios";

import {
  MainPayload,
  MainResult,
  StatsPayload,
  StatsResult,
} from "@/interface";

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api/v1`,
});

export class AxiosService {
  public static async getMainAnalyzer(payload: MainPayload) {
    return (await axiosClient.post<MainResult>("/main", payload)).data;
  }

  public static async getStatsAnalyzer(payload: StatsPayload) {
    return (await axiosClient.post<StatsResult>("/stats", payload)).data;
  }

  public static async wakeServer() {
    return (await axiosClient.get("/wake")).data;
  }
}
