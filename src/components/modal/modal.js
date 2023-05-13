import appModalStyle from './modal.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';
import ModalOverlay from '../modal-overlay/modal-overlay';
import ReactDOM from 'react-dom';
import {useEffect} from 'react'



const modalRoot = document.getElementById("modals");



const Modal = ({show, onCloseButtonClick, children}) => {

  const ESC_KEY_CODE = 27

  useEffect(() => {
    const keyDown = (event) => {
      if(event.keyCode === ESC_KEY_CODE) {
        onCloseButtonClick()
      }
    }
      document.addEventListener("keydown", keyDown)
    return () => {
      document.removeEventListener("keydown", keyDown)
    }
},[])



  return ReactDOM.createPortal(
    (
      <>
        <ModalOverlay onCloseButtonClick={onCloseButtonClick}/>
        <div className={`pt-10 pl-10 ${appModalStyle.modal}`}>
          <a href='#!' onClick={onCloseButtonClick} className={appModalStyle.close}>
            <CloseIcon/>
          </a>
          {children}
        </div>
      </>
          ), 
          modalRoot
      );
} 



Modal.propTypes = {
  onCloseButtonClick: PropTypes.func.isRequired,
  children: PropTypes.object,
}



export default Modal;


