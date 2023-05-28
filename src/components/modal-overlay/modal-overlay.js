import appModalOverlayStyle from './modal-overlay.module.css'
import PropTypes from 'prop-types';

const ModalOverlay = ({onCloseButtonClick}) => {
    return (
        <div onClick={onCloseButtonClick} className={appModalOverlayStyle.wrapper}/>
      )
} 

ModalOverlay.propTypes = {
  onCloseButtonClick: PropTypes.func,
}



export default ModalOverlay;

