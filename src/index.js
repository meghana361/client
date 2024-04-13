import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { mode } from "@chakra-ui/theme-tools";
import "./index.css";
import { ColorModeScript } from "@chakra-ui/react";

import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/theme-utils";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
const styles = {
  global: (props) => ({
    body: {
      color: mode("white", "white")(props),
      bg: mode("white", "white ")(props),
    },
  }),
};
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
const colors = {
  gray: {
    light: "#616161",
    
  },
};
const theme = extendTheme({  styles, colors });
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>

    <BrowserRouter>
      <ChakraProvider theme={theme}>
       
        <App />
      </ChakraProvider>
    </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
