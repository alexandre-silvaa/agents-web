import type { JSX, ReactNode } from "react";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";

type ToastType = "success" | "error" | "info";

type ToastItem = {
  id: string;
  type: ToastType;
  message: string;
};

type ToastContextValue = {
  success: (message: string) => void;
  error: (message: string) => void;
  info: (message: string) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const timers = useRef<Record<string, number>>({});

  const remove = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
    const timer = timers.current[id];
    if (timer) {
      clearTimeout(timer);
      delete timers.current[id];
    }
  }, []);

  const push = useCallback(
    (type: ToastType, message: string) => {
      const id = crypto.randomUUID();
      const item: ToastItem = { id, type, message };
      setToasts((prev) => [...prev, item]);
      timers.current[id] = window.setTimeout(() => remove(id), 3500);
    },
    [remove]
  );

  const value = useMemo<ToastContextValue>(
    () => ({
      success: (m: string) => push("success", m),
      error: (m: string) => push("error", m),
      info: (m: string) => push("info", m),
    }),
    [push]
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed right-4 top-4 z-50 flex w-[90vw] max-w-sm flex-col gap-2">
        {toasts.map((t) => (
          <div
            key={t.id}
            role="status"
            className={[
              "rounded-md border p-3 shadow-md backdrop-blur",
              "text-sm",
              t.type === "success" &&
                "border-green-500/30 bg-green-500/10 text-green-900 dark:text-green-100",
              t.type === "error" &&
                "border-red-500/30 bg-red-500/10 text-red-900 dark:text-red-100",
              t.type === "info" &&
                "border-slate-500/30 bg-slate-500/10 text-slate-900 dark:text-slate-100",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <div className="flex items-start justify-between gap-3">
              <span>{t.message}</span>
              <button
                aria-label="Fechar"
                className="rounded p-1 text-xs text-slate-500 hover:bg-white/30 hover:text-slate-700 dark:hover:bg-black/20"
                onClick={() => remove(t.id)}
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within a ToastProvider");
  return ctx;
}
