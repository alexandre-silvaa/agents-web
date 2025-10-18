import type { AxiosError } from "axios";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function extractErrorMessage(error: unknown): string {
  const axiosErr = error as AxiosError<any> | undefined;
  const data = axiosErr?.response?.data as any;

  const candidates: unknown[] = [
    data?.message,
    data?.error,
    Array.isArray(data?.errors)
      ? data.errors
          .map((e: any) => {
            if (typeof e === "string") return e;
            if (e && typeof e === "object") return e.message ?? e.msg;
            return undefined;
          })
          .filter(Boolean)
          .join("\n")
      : undefined,
  ];

  const fromCandidates = candidates.find(
    (c) => typeof c === "string" && c.trim().length > 0
  ) as string | undefined;

  if (fromCandidates) return fromCandidates;

  if (
    error &&
    typeof error === "object" &&
    "message" in error &&
    typeof (error as any).message === "string"
  ) {
    return (error as any).message as string;
  }

  try {
    return JSON.stringify(error);
  } catch {
    return "Ocorreu um erro inesperado.";
  }
}
