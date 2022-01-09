import React from 'react';
import { useState } from "react";
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';


function App() {
  const [userInfo, setUserInfo] = useState([]);
  
  const AddUserHandler = (enteredName,enteredAge) => {
    console.log(enteredName,enteredAge);
    setUserInfo( (prevUserList) => {
      return [...prevUserList, { name: enteredName, age: enteredAge}];
    } );

  };

  return (
    <div>
      <AddUser onAddUser = {AddUserHandler}/>
      <UsersList users = {userInfo}/>
    </div>
  );
}

export default App;
