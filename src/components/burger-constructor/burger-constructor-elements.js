import appBurgerConstructorStyle from './burger-constructor.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerConstructorOrder from './burger-constructor-order';
import { useMemo, useContext } from 'react';
import { DataContext } from '../../context/app-context';



const BurgerConstructorElements = () => {
  
  const {data} = useContext(DataContext);

  let total = 0

  const burgerFillingFilter = useMemo(() => {
    data.filter(el => el.type != 'bun').forEach((el) => total += el.price)
    return data.filter(el => el.type != 'bun')
  }, [data]
  );

  const burgerBunsFilter = useMemo(() => {
    data.filter(el => el.type === 'bun' && el.name === 'Флюоресцентная булка R2-D3').forEach((el) => total += el.price)
    return data.filter(el => el.type === 'bun' && el.name === 'Флюоресцентная булка R2-D3')
  }, [data]
  );
  
  return (
    <>
    {burgerBunsFilter.map(el => {
      return (
        <div className='pl-8'>
        <ConstructorElement
          type="top"
          text={el.name}
          price={el.price}
          thumbnail={el.image}
        />
        </div>
      )
    })}

    <div className={appBurgerConstructorStyle.scroll}> 
        {burgerFillingFilter.map(el => {
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
        })}
      </div>

      {burgerBunsFilter.map(el => {
      return (
        <div className='pl-8'>
        <ConstructorElement
          type="bottom"
          text={el.name}
          price={el.price}
          thumbnail={el.image}
        />
        </div>
      )
    })}

      <BurgerConstructorOrder total={total}/>
    </>
  );
};



export default BurgerConstructorElements;