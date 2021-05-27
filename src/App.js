import AddUser from "./components/users/AddUser";
import UserList from "./components/users/UserList";
import {useState} from 'react'

function App() {
  const [users, setUsers] = useState([])

  const addNewUserHandler = (user) => {
    setUsers(preState => [user, ...preState])
  }

  return (
    <div>
      <AddUser onAddNewUser={addNewUserHandler}/>
      <UserList users={users}/>
    </div>
  );
}

export default App;
