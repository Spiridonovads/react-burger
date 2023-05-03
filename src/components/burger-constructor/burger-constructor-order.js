import React from 'react';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import appBurgerConstructorStyle from './burger-constructor.module.css';



const BurgerConstructorOrder = () => {
  return (
    <div className={`mr-4 ${appBurgerConstructorStyle.price}`}>
      <div className={appBurgerConstructorStyle.price__title}>
        <p>66</p>
        <CurrencyIcon/>
      </div>
      <Button htmlType="button" type="primary" size="medium">
        Оформить заказ
      </Button>
  </div>
  );
}; 



export default BurgerConstructorOrder;

