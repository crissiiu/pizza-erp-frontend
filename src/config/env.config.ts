import { z } from "zod";

const envSchema = z.object({
  VITE_APP_NAME: z.string().trim().min(1, "VITE_APP_NAME không được để trống"),
  VITE_API_BASE_URL: z.url("VITE_API_BASE_URL phải là một URL hợp lệ"),
  VITE_API_TIMEOUT: z.coerce
    .number()
    .int("VITE_API_TIMEOUT phải là số nguyên")
    .positive("VITE_API_TIMEOUT phải lớn hơn 0"),
});

const parsedEnv = envSchema.safeParse({
  VITE_APP_NAME: import.meta.env.VITE_APP_NAME,
  VITE_API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
  VITE_API_TIMEOUT: import.meta.env.VITE_API_TIMEOUT,
});

if (!parsedEnv.success) {
  const issues = parsedEnv.error.issues
    .map(({ path, message }) => `${path.join(".")}: ${message}`)
    .join("; ");

  throw new Error(`Cấu hình biến môi trường không hợp lệ: ${issues}`);
}

export const env = {
  appName: parsedEnv.data.VITE_APP_NAME,
  apiBaseUrl: parsedEnv.data.VITE_API_BASE_URL,
  apiTimeout: parsedEnv.data.VITE_API_TIMEOUT,
} as const;
