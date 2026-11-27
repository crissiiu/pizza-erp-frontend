import axios from "axios";
import { env } from "@/config/env.config";

export const httpClient = axios.create({
  baseURL: env.apiBaseUrl,
  timeout: env.apiTimeout,
  headers: { "Content-Type": "application/json" },
});
