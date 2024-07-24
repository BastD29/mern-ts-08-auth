import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App2";
import "./style/index.scss";
import { AuthProvider } from "./context/AuthContext/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
