import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import appBurgerConstructorStyle from './burger-constructor.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';
import PropTypes from 'prop-types';
import {useState} from 'react'



const BurgerConstructorOrder = ({total}) => {

  const [state, setState] = useState()

  const toggleModal = () => {
    setState(!state)
  }

    return (
      <>
        <div className={`mr-4 ${appBurgerConstructorStyle.price}`}>
          <div className={appBurgerConstructorStyle.price__title}>
            <p>{total}</p>
            <CurrencyIcon/>
          </div>
          <Button htmlType="button" type="primary" size="medium" onClick={toggleModal}>
            Оформить заказ
          </Button>
          <ModalOverlay show={state} onCloseButtonClick={toggleModal} modalType='order'/>
        </div>
    </>
    );
}; 



BurgerConstructorOrder.propTypes = {
  total: PropTypes.number.isRequired,
}



export default BurgerConstructorOrder;

