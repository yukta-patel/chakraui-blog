import React from "react";
import { ChakraProvider } from "@chakra-ui/core";
import { AppProps } from "next/app";
function App({ Component, pageProps }, AppProps) {
  return (
    <ChakraProvider resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default App;
