import appModalOverlayStyle from './modal-overlay.module.css'
import ReactDOM from 'react-dom';
import Modal from '../modal/modal';
import PropTypes from 'prop-types';
import {useEffect} from 'react'



const modalRoot = document.getElementById("modals");



const ModalOverlay = ({ show, onCloseButtonClick, children}) => {
 
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

  if (!show) {
    return null;
  }

    return ReactDOM.createPortal(
      (
        <>
        <article onClick={onCloseButtonClick} className={appModalOverlayStyle.article}>
          <Modal onCloseButtonClick={onCloseButtonClick}>{children}</Modal>
        </article>
        </>
            ), 
            modalRoot
        );
} 



ModalOverlay.propTypes = {
  show: PropTypes.bool,
  onCloseButtonClick: PropTypes.func,
  children: PropTypes.object
}



export default ModalOverlay;

