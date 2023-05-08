import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import appBurgerConstructorStyle from './burger-constructor.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';
import PropTypes from 'prop-types';
import {useState} from 'react'
import OrderDetails from '../order-details/order-details';



const BurgerConstructorOrder = ({total, data}) => {

  const [state, setState] = useState()

  const openModal = () => {
    setState(true);
  }
  
  const closeModal = () => {
    setState(false);
  }
  

    return (
      <>
        <div className={`mr-4 ${appBurgerConstructorStyle.price}`}>
          <div className={appBurgerConstructorStyle.price__title}>
            <p>{total}</p>
            <CurrencyIcon/>
          </div>
          <Button htmlType="button" type="primary" size="medium" onClick={openModal}>
            Оформить заказ
          </Button>
         <ModalOverlay show={state} onCloseButtonClick={closeModal}>{<OrderDetails data={data}/>}</ModalOverlay>
        </div>
    </>
    );
}; 



BurgerConstructorOrder.propTypes = {
  total: PropTypes.number.isRequired,
}



export default BurgerConstructorOrder;

