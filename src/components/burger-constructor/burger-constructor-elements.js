import appBurgerConstructorStyle from './burger-constructor.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerConstructorOrder from './burger-constructor-order';



const BurgerConstructorElements = ({data}) => {
  let total = 0 
  return (
    <>
      <div className='pl-8'>
        <ConstructorElement
          type="top"
          text={data[0].name}
          price={total=data[0].price}
          thumbnail={data[0].image}
        />
      </div>

    <div className={appBurgerConstructorStyle.scroll}> 
        {data.map(el => {
          if(el.type != 'bun'){
            total += el.price
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
            text={data[0].name}
            price={data[0].price}
            thumbnail={data[0].image}
          />
        </div>
      </div>

      <BurgerConstructorOrder total={total}/>
    </>
  );
};



BurgerConstructorElements.propTypes = {
  data: PropTypes.array.isRequired,
}



export default BurgerConstructorElements;