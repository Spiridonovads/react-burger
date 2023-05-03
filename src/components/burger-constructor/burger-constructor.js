import React from 'react';
import appBurgerConstructorStyle from './burger-constructor.module.css';
import BurgerConstructorOrder from './burger-constructor-order';
import data from '../../utile/data.json';
import BurgerConstructorSelectedElements from './burger-constructor-selected-elements';



const BurgerConstructor = () => {  
  return (
    <section className={`pt-25 pl-4 ${appBurgerConstructorStyle.constructor__section}`}>
      <BurgerConstructorSelectedElements data={data}/>
      <BurgerConstructorOrder data={data}/>
    </section>
  );
}



export default BurgerConstructor;


