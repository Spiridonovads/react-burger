import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import appBurgerConstructorStyle from './burger-constructor.module.css';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOrderNumber } from '../../services/actions/order-number';
import { getCookie } from '../../utile/cookie';
import { useNavigate } from "react-router-dom";

const BurgerConstructorOrder = () => {

  const [modalState, setModalState] = useState();

  const {order} = useSelector(state => state.constructor);
  const orderId = order.map(el => el._id)

  let total = 0
  
  const dispatch = useDispatch();
  
  useMemo(() => {
    order.forEach(el => {
      total += el.price
    });
  })
  const auth = getCookie('accessToken')
  const navigate = useNavigate();

  const openModal = () => {
    if(auth) {
      dispatch(getOrderNumber(orderId))
      setModalState(true)
    } else {
      navigate('/login', { replace: true })
    }
    }

  const closeModal = () => {
    setModalState(false);
  }

    return (
        <div className={`mr-4 ${appBurgerConstructorStyle.price}`}>
          <div className={appBurgerConstructorStyle.price__title}>
            <p>{total}</p>
            <CurrencyIcon/>
          </div>
          <Button htmlType="button" type="primary" size="medium" onClick={openModal}>
            Оформить заказ
          </Button>
        {modalState && 
          <Modal onCloseButtonClick={closeModal}>{
              <OrderDetails/>
            }
          </Modal>}
        </div>
    );
}; 

export default BurgerConstructorOrder;

