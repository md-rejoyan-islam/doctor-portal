import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "react-day-picker/dist/style.css";
import "./index.css";
import { Provider } from "react-redux";
import store from "./app/store.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
