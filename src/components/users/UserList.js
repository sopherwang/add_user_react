import Card from "../common/Card";
import './UserList.css'

const UserList = (props) => {
  return (
    <Card className='users'>
      <ul>
        {props.users.map((user) => {
          return <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        })}
      </ul>
    </Card>
  )
}

export default UserList