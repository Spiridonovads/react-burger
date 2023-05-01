import React from 'react';
import appBurgerConstructorStyle from './app-burger-constructor.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';



const dataPropTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
});



function ConstructorCenterElements (props) {
  return (
      <div className={appBurgerConstructorStyle.elementIcon}>
        <DragIcon type="primary"/>
        <ConstructorElement
          isLocked={false}
          text={props.data.name}
          price={props.data.price}
          thumbnail={props.data.image}
        />
    </div>
  )
}

ConstructorCenterElements.propTypes = {
  props: dataPropTypes
}



const Product = () => {
  let data = require('../../utile/data.json')
  return (
    <>
      <div className='pl-8'>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={data[0].name}
          price={(data[0].price)/2}
          thumbnail={data[0].image}
        />
      </div>

      <div className={appBurgerConstructorStyle.scroll}> 
        <ConstructorCenterElements data={data[0]}/>
        <ConstructorCenterElements data={data[0]}/>
        <ConstructorCenterElements data={data[0]}/>
        <ConstructorCenterElements data={data[0]}/>
        <ConstructorCenterElements data={data[0]}/>
        <ConstructorCenterElements data={data[0]}/>
        <ConstructorCenterElements data={data[0]}/>
        <ConstructorCenterElements data={data[0]}/>
      </div>
      
      <div className='pl-8'>
        <div className='mb-6'>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={data[0].name}
            price={(data[0].price)/2}
            thumbnail={data[0].image}
          />
        </div>
      </div>
    </>
  );
};



const CartTotal = () => {
  return (
    <div className={`mr-4 ${appBurgerConstructorStyle.price}`}>
      <div className={appBurgerConstructorStyle.price__title}>
        <p>667</p>
        <CurrencyIcon/>
      </div>
      <Button htmlType="button" type="primary" size="medium">
        Оформить заказ
      </Button>
  </div>
  );
}; 



class BurgerConstructor extends React.Component {
  render() { 
    return (
      <section className={`pt-25 pl-4 ${appBurgerConstructorStyle.constructor__section}`}>
        <Product/>
        <CartTotal/>
      </section>
    );
  }
}



export default BurgerConstructor;


