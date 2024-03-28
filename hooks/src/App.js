// step 1
import React, { createContext, useState } from 'react';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

// step 2  Create context
export const UserContext = createContext();

function App() {

  // Initialize state for dataObj
  const [dataObj, setDataObj] = useState({
    id: 1,
    name: 'Ajith'
  });

  return (
    // step 3  Provide dataObj value to components using UserContext
    <UserContext.Provider value={dataObj}>
      <Header />
      <Body />
      <Footer />
    </UserContext.Provider>
  );
}

export default App;