import React, { useContext } from 'react';
import { UserContext } from '../App'; // Import UserContext from App

export default function Header() {

  // Access dataObj from context
  const user = useContext(UserContext);
  console.log(user, 'user');

  // Display user data in header
  return (
    <>
      <div className='container-full'>header {user.name}</div>
    </>

  );
}
