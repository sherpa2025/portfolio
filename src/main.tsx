import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "./redux/store/store.ts";
import "./index.css";

const fonts = {
  body: "'Raleway', sans-serif",
  heading: "'Raleway', sans-serif",
};

const theme = extendTheme({ fonts });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
