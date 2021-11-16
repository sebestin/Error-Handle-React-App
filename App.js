import logo from './logo.svg';
import './App.css';
import AddUser from './component/Users/AddUser';
import UserList from './component/Users/UserList';
import { useState } from 'react/cjs/react.development';
function App() {
  const [userList,setUserList]=useState([])
  const userDatahandler=(datta)=>
  {
      setUserList((prevUserlist)=>
        {
            return [...prevUserlist,datta]
        })
        console.log(userList);
  }
  return (
    <div>
      <AddUser onAdduser={userDatahandler}></AddUser>
      <UserList users={userList}></UserList>
    </div>
  );
}

export default App;
