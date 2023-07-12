import React, { createContext, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import {Header} from "./Components"

const headerContext = createContext();
const loginContext = createContext();


function loadStatus() {
    const status = localStorage.getItem('userStatus')
    if (status === null) return 0
    return parseInt(status)
}


function App() {

  const [headerDisplay, setHeaderDisplay] = useState(true)
  const [loginStatus, setLoginStatus] = useState(loadStatus())
    // 0 => no login
    // 1 => client
    // 2 => admin

  function updateLoginStatus(status) {
    setLoginStatus(status)
    localStorage.setItem('userStatus', status)
  }

  return (
    <ChakraProvider >
      <loginContext.Provider value={[loginStatus, updateLoginStatus]}>
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
