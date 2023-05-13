import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import appBurgerConstructorStyle from './burger-constructor.module.css';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { getOrderNumberData } from '../../api';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { checkResponse } from '../../utile/res-ok';



const BurgerConstructorOrder = ({total, orderProducts}) => {

  const [orderState, setOrderState] = useState({
    data: {},
    error: false,
    loading: false,
  })

  console.log(orderProducts)
  const [modalState, setModalState] = useState()

  const openModal = () => {
    setOrderState({...orderState, loading: true})
    getOrderNumberData(orderProducts)
    .then((res) => checkResponse(res))
    .then((data) => setOrderState({...orderState, data: data.order, loading: false}))
    .catch(() => setOrderState({...orderState, error: true}))
    setModalState(true);
    }

  const closeModal = () => {
    setModalState(false);
  }
  const {data, loading, error} = orderState
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
              <OrderDetails data={data} error={loading} loading={error}/>
            }
          </Modal>}
        </div>
    );
}; 



BurgerConstructorOrder.propTypes = {
  total: PropTypes.number.isRequired,
}



export default BurgerConstructorOrder;

