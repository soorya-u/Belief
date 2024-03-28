import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, Suspense, lazy } from "react";

const queryClient = new QueryClient();

export default function TanStackQueryProvider({
  children,
}: {
  children: ReactNode;
}) {
  const TanStackQueryDevtools =
    process.env.NODE_ENV === "production"
      ? () => null
      : lazy(() =>
          import("@tanstack/react-query-devtools").then(
            ({ ReactQueryDevtools }) => ({
              default: ReactQueryDevtools,
            })
          )
        );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Suspense>
        <TanStackQueryDevtools />
      </Suspense>
    </QueryClientProvider>
  );
}
