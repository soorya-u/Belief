import ReactRouterProvider from "./react-router";
import TanStackQueryProvider from "./tanstack-query";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactRouterProvider>
      <TanStackQueryProvider>{children}</TanStackQueryProvider>
    </ReactRouterProvider>
  );
}
