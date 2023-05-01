import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ChatProvider from "./components/sections/Context/ChatProvider";
import { ChakraProvider } from "@chakra-ui/react";

// CA
import "../node_modules/animate.css/animate.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import "../node_modules/magnific-popup/dist/magnific-popup.css";
import "../node_modules/react-select2-wrapper/css/select2.css";
import "../node_modules/leaflet/dist/leaflet.css";
import "./assets/fonts/flaticon/flaticon.css";
import "./assets/fonts/font-awesome/css/all.min.css";
import "./assets/css/style.css";
import { BrowserRouter } from "react-router-dom";

const userInfo = JSON.parse(localStorage.getItem("userInfo"));

const root = ReactDOM.createRoot(document.getElementById("acres"));
root.render(
  <BrowserRouter>
    {userInfo ? (
      <ChatProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </ChatProvider>
    ) : (
      <App />
    )}
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
