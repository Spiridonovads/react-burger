import appBurgerConstructorStyle from './burger-constructor.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerConstructorOrder from './burger-constructor-order';
import { useMemo, useContext, useState } from 'react';
import { DataContext } from '../../context/app-context';
import BurgerScrollElement from './burger-scroll-element';
import { Reorder } from 'framer-motion';

const BurgerConstructorElements = () => {
  
  const {data} = useContext(DataContext);
  let total = 0;
  const burgerConstructorElements =[];
  
  const burgerFillingFilter = useMemo(() => {
    data.filter(el => el.type != 'bun')
    .forEach((el) => {
      total += el.price
      burgerConstructorElements.push(el._id)
    })
    return data.filter(el => el.type != 'bun')
  }, [data]
  );

  const burgerBunsFilter = useMemo(() => {
    data.filter(el => el.type === 'bun' && el.name !== 'Флюоресцентная булка R2-D3')
    .forEach((el) => {
      total += el.price
      burgerConstructorElements.push(el._id)
    })
    return data.filter(el => el.type === 'bun' && el.name !== 'Флюоресцентная булка R2-D3')
  }, [data]
  );
  
  const [item, setItem] = useState(burgerFillingFilter)

  return (
    <>
    {burgerBunsFilter.map(el => {
      return (
        <div key={el._id} className='pl-8'>
        <ConstructorElement
          type="top"
          text={`${el.name} (верх)`}
          price={el.price}
          thumbnail={el.image}
        />
        </div>
      )
    })}

    <Reorder.Group values={item} onReorder={setItem} axis='y'>
     <div className={appBurgerConstructorStyle.scroll}> 
        {item.map(el => {
            return (
              <BurgerScrollElement 
                key={el._id}
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
        />
        </div>
      )
    })}
      <BurgerConstructorOrder orderProducts={burgerConstructorElements} total={total}/>
    </>
  );
};

export default BurgerConstructorElements;