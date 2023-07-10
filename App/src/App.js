import React, { createContext, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import {Header} from "./Components"

const headerContext = createContext();
const loginContext = createContext();



function App() {

  const [headerDisplay, setHeaderDisplay] = useState(true)
  const [loginStatus, setLoginStatus] = useState(0)
    // 0 => no login
    // 1 => client
    // 2 => admin

  
  return (
    <ChakraProvider >
      <loginContext.Provider value={[loginStatus, setLoginStatus]}>
      {headerDisplay && <Header />}

        <headerContext.Provider value={setHeaderDisplay}>
          <Outlet />
        </headerContext.Provider>
      
      </loginContext.Provider>

    </ChakraProvider>
  );
}

export {
  headerContext,
  loginContext
}
export default App;
