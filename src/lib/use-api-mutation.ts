import { useToast } from "@/contexts/toast/toast";
import { extractErrorMessage } from "@/lib/utils";
import {
  useMutation,
  type UseMutationOptions,
  type UseMutationResult,
} from "@tanstack/react-query";

export type Result<T, E = unknown> =
  | { ok: true; data: T }
  | { ok: false; error: E };

type UseApiMutationOptions<TData, TError, TVariables, TContext> =
  UseMutationOptions<TData, TError, TVariables, TContext> & {
    successMessage?: string | ((data: TData) => string);
    errorMessage?: string | ((error: TError) => string);
  };

export function useApiMutation<
  TData = unknown,
  TError = unknown,
  TVariables = void,
  TContext = unknown
>(
  options: UseApiMutationOptions<TData, TError, TVariables, TContext>
): UseMutationResult<TData, TError, TVariables, TContext> & {
  safeMutateAsync: (variables: TVariables) => Promise<Result<TData, TError>>;
} {
  const { success, error: errorToast } = useToast();

  const mutation = useMutation({
    ...options,
    onError: (error, variables, context) => {
      const message =
        typeof options.errorMessage === "function"
          ? options.errorMessage(error as TError)
          : options.errorMessage ?? extractErrorMessage(error);
      if (message) errorToast(message);
      options.onError?.(error, variables, context);
    },
    onSuccess: (data, variables, context) => {
      const message =
        typeof options.successMessage === "function"
          ? options.successMessage(data as TData)
          : options.successMessage ?? "Operação realizada com sucesso.";
      if (message) success(message);
      options.onSuccess?.(data, variables, context);
    },
  });

  const safeMutateAsync = async (
    variables: TVariables
  ): Promise<Result<TData, TError>> => {
    try {
      const data = await mutation.mutateAsync(variables);
      return { ok: true, data };
    } catch (err) {
      return { ok: false, error: err as TError };
    }
  };

  return Object.assign(mutation, { safeMutateAsync });
}
