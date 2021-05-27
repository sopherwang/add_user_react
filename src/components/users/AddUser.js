import Card from "../common/Card";
import './AddUser.css'
import Button from "../common/Button";
import {useState} from 'react'
import ErrorModal from "../common/ErrorModal";
import Wrapper from "../common/Wrapper";

const AddUser = (props) => {
  const [userName, setUserName] = useState('')
  const [age, setAge] = useState('')
  const [error, setError] = useState()

  const submitHandler = (event) => {
    event.preventDefault()

    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age',
      })
      return;
    }

    if (+age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age',
      })
      return;
    }

    setAge('')
    setUserName('')

    props.onAddNewUser({
      id: Math.random(),
      name: userName,
      age: age,
    })
  }

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value)
  }

  const ageChangeHandler = (event) => {
    setAge(event.target.value)
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onError={errorHandler}/>}
      <Card className='input'>
        <form onSubmit={submitHandler}>
          <label htmlFor='username'>Username</label>
          <input id='username' value={userName} type='text' onChange={userNameChangeHandler}/>
          <label htmlFor='age'>Age (Years)</label>
          <input id='age' value={age} type='number' step='1' onChange={ageChangeHandler}/>
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </>
  )
}

export default AddUser