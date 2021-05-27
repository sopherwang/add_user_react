import Card from "./Card";
import Button from "./Button";
import './ErrorModal.css'
import ReactDom from 'react-dom'

const Backdrop = props => {
  return <div className='backdrop' onClick={props.onError}/>
}

const ModalOverlay = props => {
  return <Card className='modal'>
    <header className='header'>
      <h2>{props.title}</h2>
    </header>
    <div className='content'>
      <p>{props.message}</p>
    </div>
    <footer className='actions'>
      <Button onClick={props.onError}>OK</Button>
    </footer>
  </Card>
}

const ErrorModal = (props) => {

  return (
    <>
      {ReactDom.createPortal(<Backdrop onError={props.onError}/>,
        document.getElementById('backdrop-root'))}
      {ReactDom.createPortal(<ModalOverlay title={props.title} message={props.message} onError={props.onError}/>,
        document.getElementById('overlay-root'))}
    </>
  )
}

export default ErrorModal