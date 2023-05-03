import React from 'react';
import appBurgerConstructorStyle from './burger-constructor.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';




const BurgerConstructorSelectedElements = (props) => {
  const arr = []
  return (
    <>
      <div className='pl-8'>
        <ConstructorElement
          type="top"
          text={props.data[0].name}
          price={props.data[0].price}
          thumbnail={props.data[0].image}
        />
      </div>

      <div className={appBurgerConstructorStyle.scroll}> 
        {props.data.map(el => {
          if(el.type != 'bun'){
            return (
              <div className={appBurgerConstructorStyle.elementIcon} key={el.id}>
                <a href='#!'><DragIcon type="primary"/></a>
                <ConstructorElement
                  text={el.name}
                  price={el.price}
                  thumbnail={el.image}
                />
            </div>
          )
          }
         
        })}
      </div>
      
      <div className='pl-8'>
        <div className='mb-6'>
          <ConstructorElement
            type="bottom"
            text={props.data[0].name}
            price={props.data[0].price}
            thumbnail={props.data[0].image}
          />
        </div>
      </div>

    </>
  );
};



BurgerConstructorSelectedElements.propTypes = {
  data: PropTypes.array.isRequired,
}



export default BurgerConstructorSelectedElements;