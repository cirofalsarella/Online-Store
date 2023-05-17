import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import {Header} from "./Components"

function App() {
  return (
    <ChakraProvider >
      <Header />
      <Outlet />
    </ChakraProvider>
  );
}

export default App;
