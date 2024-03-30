import React from "react";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import { NextUIProvider } from "@nextui-org/react";
import { createRoot } from "react-dom/client"; // Import createRoot from "react-dom/client"
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Redux/store.js";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <Provider store={store}>
          <main className="dark text-foreground bg-background ">
          <App />
          </main>
        </Provider>
        
      </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>
);
