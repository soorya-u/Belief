import { BrowserRouter } from "react-router-dom";

function ReactRouterProvider({ children }: { children: React.ReactNode }) {
  return <BrowserRouter>{children}</BrowserRouter>;
}

export default ReactRouterProvider;
