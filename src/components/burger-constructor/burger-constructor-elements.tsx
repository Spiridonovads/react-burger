import appBurgerConstructorStyle from './burger-constructor.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerConstructorOrder from './burger-constructor-order';
import { useMemo, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BurgerConstructorScrollElement from './burger-constructor-scroll-element';
import { Reorder } from 'framer-motion';
import { CONSTRUCTOR_ORDER_SORT } from '../../services/actions/constructor-data';

const BurgerConstructorElements = () => {

  const { order } = useSelector((state: any) => state.constructor);

  const dispatch: any = useDispatch()

  const burgerBunsFilter = useMemo<[]>(() => {
    return order.filter((el: {type: string}) => el.type === 'bun')
  }, [order]);
  
  const burgerFillingFilter = useMemo<[]>(() => {
    return order.filter((el: {type: string}) => el.type != 'bun')
  }, [order]); 

  const total = useMemo<number>(() => {
    return order.reduce((sum:number, current: {price: number}) => sum + current.price, 0)
  }, [burgerBunsFilter, burgerFillingFilter]);

  const [items, setItems] = useState<any>(burgerFillingFilter)

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
      {burgerBunsFilter.map((el: {_id: number ; name: string; price: number; image: string}) => {
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
        {items.map((el: any ) => {
            return (
              <BurgerConstructorScrollElement 
                key={el.uniqueId}
                data={el}
                />
            )
          })}
       </div>
       </Reorder.Group>
      {burgerBunsFilter.map((el: {_id: number ; name: string; price: number; image: string}) => {
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
      <BurgerConstructorOrder total={total}/>
    </>
}
    </>
  );
};

export default BurgerConstructorElements;