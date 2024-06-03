import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { mode } from "@chakra-ui/theme-tools";
import {BrowseRouter} from "react-router-dom";

const styles = {
  global: (props) => ({
    body:{
      bg:mode("gray.100", "#000")(props),
      color:mode("gray.800", "whiteAlpha.900")(props),
    },
  }),
}


const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({ config, styles })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <br
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
