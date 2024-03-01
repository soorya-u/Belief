import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ReactRouterProvider from "./providers/ReactRouterProvider.tsx";
import TanStackProvider from "./providers/TanStackProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReactRouterProvider>
      <TanStackProvider>
        <App />
      </TanStackProvider>
    </ReactRouterProvider>
  </React.StrictMode>
);
