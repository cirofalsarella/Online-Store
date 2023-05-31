import React, { createContext, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';


import {Header} from "./Components"

const headerContext = createContext();

function App() {
  const [headerDisplay, setHeaderDisplay] = useState(true)

  return (
    <ChakraProvider >
      {headerDisplay && <Header />}

      <headerContext.Provider value={setHeaderDisplay}>
        <Outlet />
      </headerContext.Provider>

    </ChakraProvider>
  );
}

export {
  headerContext
}
export default App;
