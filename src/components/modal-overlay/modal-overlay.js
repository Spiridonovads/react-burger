import appModalOverlayStyle from './modal-overlay.module.css'
import ReactDOM from 'react-dom';
import Modal from '../modal/modal';
import PropTypes from 'prop-types';
import {useEffect} from 'react'



const modalRoot = document.getElementById("modals");

/*modalRoot.addEventListener("keydown", (e) => {
  if (e.code == "Escape") {
    console.log("Closing window...");
  }
});*/



const ModalOverlay = ({ show, onCloseButtonClick, modalType, data}) => {

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.code == "Escape") {
        onCloseButtonClick()
      }
    })
    return (
    document.removeEventListener("keydown", (e) => {
      if (e.code == "Escape") {
        onCloseButtonClick()
      }
    })
    )
},[])

  if (!show) {
    return null;
  }

 
    return ReactDOM.createPortal(
      (
        <>
        <article onClick={onCloseButtonClick} className={appModalOverlayStyle.article}>
          <Modal modalType={modalType} onCloseButtonClick={onCloseButtonClick} data={data}/>
        </article>
        </>
            ), 
            modalRoot
        );
} 



ModalOverlay.propTypes = {
  show: PropTypes.bool.isRequired,
  onCloseButtonClick: PropTypes.func.isRequired,
  modalType: PropTypes.string.isRequired
}



export default ModalOverlay;

/*
 <div className={`pt-10 pb-15 pl-10 pr-10 ${appModal.modal}`}>
            <a href='#!' onClick={this.handleCloseModal} className={appModal.close}>
            <CloseIcon/>
            </a>
            <div className={`mb-8 ${appModal.details}`}>
              Детали ингредиента
            </div>
              <img src={this.props.data.image} className={appModal.img}/>
              <p className={`mb-8 mt-4 ${appModal.name}`}>{this.props.data.name}</p>
              <div className={appModal.info}>
                <div className={`mr-5 ${appModal.text}`}>
                  Калории,ккал
                  <span>{this.props.data.calories}</span>
                </div>
                <div className={`mr-5 ${appModal.text}`}>
                  Белки, г
                  <span>{this.props.data.proteins}</span>
                </div>
                <div className={`mr-5 ${appModal.text}`}>
                  Жиры, г
                  <span>{this.props.data.fat}</span>
                </div>
                <div className={appModal.text}>
                  Углеводы, г
                  <span>{this.props.data.carbohydrates}</span>
                </div>
              </div>
            </div>
                 
          
*/