import React, { createContext } from 'react'
import '../styles/App.css';
import { UserProfile } from './UserProfile';

export const UserContext = createContext();

const App = () => {
  const userData = { name: "Newton", age: 3 };

  return (
    <div id="main">
      <UserContext.Provider value={userData}>
        <UserProfile />
      </UserContext.Provider>
    </div>
  )
}

export default App;
