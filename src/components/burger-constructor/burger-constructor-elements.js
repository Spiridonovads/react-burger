import appBurgerConstructorStyle from './burger-constructor.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerConstructorOrder from './burger-constructor-order';
import { useMemo, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BurgerConstructorScrollElement from './burger-constructor-scroll-element';
import { Reorder } from 'framer-motion';
import { CONSTRUCTOR_ORDER_SORT } from '../../services/actions/constructor-data';

const BurgerConstructorElements = () => {

  const { order } = useSelector(state => state.constructor);
  
  const dispatch = useDispatch();

  const burgerBunsFilter = useMemo(() => {
    return order.filter(el => el.type === 'bun')
  }, [order]);
  
  const burgerFillingFilter = useMemo(() => {
    return order.filter(el => el.type != 'bun')
  }, [order]);

  const [items, setItems] = useState(burgerFillingFilter)

  useEffect(() => {
    setItems(burgerFillingFilter);
  },[burgerFillingFilter]);

  useEffect(() => {
    dispatch({type: CONSTRUCTOR_ORDER_SORT, value: [...burgerBunsFilter,...items]})
  },[items]);
  
  return (
    <>
    {order &&
    <>
      {burgerBunsFilter.map(el => {
        return (
          <div key={el._id} className='pl-8'>
          <ConstructorElement
            type="top"
            text={`${el.name} (верх)`}
            price={el.price}
            thumbnail={el.image}
            isLocked={true}
          />
          </div>
        )
      })}
      <Reorder.Group axis='y' values={items} onReorder={setItems}>
      <div className={appBurgerConstructorStyle.scroll} > 
        {items.map(el => {
            return (
              <BurgerConstructorScrollElement 
                key={el.uniqueId}
                data={el}
                />
            )
          })}
       </div>
       </Reorder.Group>
      {burgerBunsFilter.map(el => {
      return (
        <div key={el._id} className='pl-8'>
        <ConstructorElement
          type="bottom"
          text={`${el.name} (низ)`}
          price={el.price}
          thumbnail={el.image}
          isLocked={true}
        />
        </div>
      )
      })}
      <BurgerConstructorOrder/>
    </>
}
    </>
  );
};

export default BurgerConstructorElements;