import appModalStyle from './modal.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';
import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';


const Modal = ({onCloseButtonClick, modalType, data}) => {
  if(modalType === 'order'){
    return (
      <>
        <div className={appModalStyle.modal}>
          <a href='#!' onClick={onCloseButtonClick} className={appModalStyle.close}>
            <CloseIcon/>
          </a>
          <OrderDetails/>
        </div>
      </>
  )
  }
  
  if(modalType === 'ingredient'){
    return (
      <>
        <div className={`pt-10 pl-10 ${appModalStyle.modal}`}>
          <a href='#!' onClick={onCloseButtonClick} className={appModalStyle.close}>
            <CloseIcon/>
          </a>
          <IngredientDetails data={data}/>
        </div>
      </>
  )
  }
  
    
} 



Modal.propTypes = {
  onCloseButtonClick: PropTypes.func.isRequired
}



export default Modal;


/*
<div className={`${appModalStyle.details}`}>
              Детали ингредиента
            </div>
            <p className={`mb-8 ${appModal.id}`}>
              035678
            </p>
            <p className={`mb-15 ${appModal.id__text}`}>
              идентификатор заказа
            </p>
            <div className={`mb-15 ${appModal.img}`}/>
              <div className={appModal.text}>
                <p className='mb-2'>
                  Ваш заказ начали готовить
                </p>
                <p>
                <span>
                  Дождитесь готовности на орбитальной станции
                </span>
                </p>
            </div>
*/