import appBurgerConstructorStyle from './burger-constructor.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerConstructorOrder from './burger-constructor-order';



const BurgerConstructorElements = (props) => {
  let total = 0
  return (
    <>
      <div className='pl-8'>
        {total += props.data[0].price}
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
            text={props.data[0].name}
            price={props.data[0].price}
            thumbnail={props.data[0].image}
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