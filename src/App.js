import React, { useState } from 'react';
import Testing from './components/User/Testing';
import AddUser from './components/User/User';
import UsersList from './components/User/UsersList';


function App() {

  let [list , setUsersList] = useState([])

  const addingUser = (value) => {
    setUsersList(() => {
      return [value , ...list]
    });
  }


  return (
    <>
      <AddUser getList={addingUser}/>
      <UsersList data={list}/>
    </>
  );
}

export default App;
