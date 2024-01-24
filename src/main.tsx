import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/city:city?" Component={App} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
