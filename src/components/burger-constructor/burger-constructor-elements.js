import appBurgerConstructorStyle from './burger-constructor.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerConstructorOrder from './burger-constructor-order';
import { useMemo } from 'react'



const BurgerConstructorElements = ({data}) => {
  

  const findTotal = useMemo(() => {
    let total = 0
    data.filter(el => el.type != 'bun').forEach((el) => total += el.price)
    return total
  }, []
  );

  const burgerFillingFilter = useMemo(() => {
    return data.filter(el => el.type != 'bun')
  }, []
  );
  

  return (
    <>
      <div className='pl-8'>
        <ConstructorElement
          type="top"
          text={data[0].name}
          price={data[0].price}
          thumbnail={data[0].image}
        />
      </div>

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
      
      <div className='pl-8'>
        <div className='mb-6'>
          <ConstructorElement
            type="bottom"
            text={data[0].name}
            price={data[0].price}
            thumbnail={data[0].image}
          />
        </div>
      </div>

      <BurgerConstructorOrder total={findTotal} data={data}/>
    </>
  );
};



BurgerConstructorElements.propTypes = {
  data: PropTypes.array.isRequired,
}



export default BurgerConstructorElements;