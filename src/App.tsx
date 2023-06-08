import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserPage } from "./components/BrowsePage";

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserPage />
  </ChakraProvider>
);
