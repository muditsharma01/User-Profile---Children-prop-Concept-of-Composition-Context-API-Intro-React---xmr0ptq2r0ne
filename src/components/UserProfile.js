import React, { useContext } from 'react'
import { UserContext } from "./App"

const UserProfile = () => {
  const userData = useContext(UserContext);

  return (
    <div>
      <h1 id="name">Name: {userData.name}</h1>
      <h1 id="age">Age: {userData.age}</h1>
    </div>
  )
}

export { UserProfile };
