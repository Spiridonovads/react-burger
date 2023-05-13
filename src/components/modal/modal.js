import appModalStyle from './modal.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';



const Modal = ({onCloseButtonClick, children}) => {

  console.log(children)
 
    return (
      <>
        <div className={`pt-10 pl-10 ${appModalStyle.modal}`}>
          <a href='#!' onClick={onCloseButtonClick} className={appModalStyle.close}>
            <CloseIcon/>
          </a>
          {children}
        </div>
      </>
  )
} 



Modal.propTypes = {
  onCloseButtonClick: PropTypes.func.isRequired,
  children: PropTypes.object,
}



export default Modal;


