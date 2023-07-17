import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import appBurgerConstructorStyle from './burger-constructor.module.css';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { useState, FC, useMemo } from 'react';
import { useSelector, useDispatch } from '../../services/types/types';
import { getOrderNumber } from '../../services/actions/order-number';
import { getCookie } from '../../utile/cookie';
import { useNavigate } from "react-router-dom";
import { WS_SEND_MESSAGE } from '../../services/actions/socket-data';

type Price = { total: number};

const BurgerConstructorOrder: FC<Price> = ({total}) => {

  const [modalState, setModalState] = useState<boolean>(false);

  const { order } = useSelector(state => state.constructor);

  const orderId = useMemo<object[]>(() => {
    return order.map((el: any) => el._id)
  }, [order]);
  
  const dispatch = useDispatch()
  
  const auth = getCookie('accessToken')
  const navigate = useNavigate();

  const openModal = () => {
    if(auth) {
      dispatch(getOrderNumber(orderId))
      dispatch({ type: WS_SEND_MESSAGE, payload: order })
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
            <CurrencyIcon type="primary" />
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

