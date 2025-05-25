// components/FormMessage.tsx
export type Message = {
  success?: string;
  error?: string;
  message?: string;
};

export function FormMessage({
  success,
  error,
  message,
}: {
  success?: string;
  error?: string;
  message?: string;
}) {
  return (
    <div className="flex flex-col gap-2 w-full max-w-md text-sm">
      {success && (
        <div className="text-foreground border-l-2 border-foreground px-4">
          {success}
        </div>
      )}
      {error && (
        <div className="text-destructive-foreground border-l-2 border-destructive-foreground px-4">
          {error}
        </div>
      )}
      {message && (
        <div className="text-foreground border-l-2 px-4">{message}</div>
      )}
    </div>
  );
}
