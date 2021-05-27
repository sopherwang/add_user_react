import Card from "../common/Card";
import './AddUser.css'
import Button from "../common/Button";
import {useState, useRef} from 'react'
import ErrorModal from "../common/ErrorModal";

const AddUser = (props) => {
  const nameInputRef = useRef()
  const ageInputRef = useRef()

  const [error, setError] = useState()

  const submitHandler = (event) => {
    event.preventDefault()

    const userName = nameInputRef.current.value
    const age = ageInputRef.current.value

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

    props.onAddNewUser({
      id: Math.random(),
      name: userName,
      age: age,
    })

    nameInputRef.current.value = ''
    ageInputRef.current.value = ''
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
          <input id='username' type='text' ref={nameInputRef}/>
          <label htmlFor='age'>Age (Years)</label>
          <input id='age' type='number' step='1' ref={ageInputRef}/>
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </>
  )
}

export default AddUser