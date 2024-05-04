import { useNavigate } from 'react-router-dom';
import classes from './Modal.module.css'
function Modal(props){
const navigate=useNavigate()
function submitHandler(){
    navigate('/')
}
    return (
        <>
        <div className={classes.backdrop} onClick={submitHandler}/>
<dialog open className={classes.modal}>
{props.children}
</dialog>
</>
    )
}

export default Modal;