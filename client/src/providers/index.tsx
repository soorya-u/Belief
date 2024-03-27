import ReactRouterProvider from "./ReactRouterProvider";
import TanStackQueryProvider from "./TanStackQueryProvider";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactRouterProvider>
      <TanStackQueryProvider>{children}</TanStackQueryProvider>
    </ReactRouterProvider>
  );
}

export default Providers;
