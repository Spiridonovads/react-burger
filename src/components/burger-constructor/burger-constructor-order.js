import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import appBurgerConstructorStyle from './burger-constructor.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';
import OrderDetails from '../order-details/order-details';
import { getOrderNumberData } from '../../api';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';



const BurgerConstructorOrder = ({total}) => {

  const [orderState, setOrderState] = useState({
    data: {},
    error: false,
    loading: false,
  })

  const [modalState, setModalState] = useState()

  const openModal = () => {
    setModalState(true);
    }

  const closeModal = () => {
    setModalState(false);
  }

  useEffect(() => {
    setOrderState({...orderState, loading: true})
    getOrderNumberData()
    .then((data) => setOrderState({...orderState, data: data, loading: false}))
    .catch(() => setOrderState({...orderState, error: true}))
  }, [])
  
  const {data} = orderState
  
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
         <ModalOverlay show={modalState} onCloseButtonClick={closeModal}>{
          <OrderDetails orderNumber={data}/>
          }</ModalOverlay>
        </div>
    </>
    );
}; 



BurgerConstructorOrder.propTypes = {
  total: PropTypes.number.isRequired,
}



export default BurgerConstructorOrder;

