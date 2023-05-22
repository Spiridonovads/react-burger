import appBurgerConstructorStyle from './burger-constructor.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Reorder } from 'framer-motion';

const BurgerScrollElement = ({data}) => { 

  const {name, price, image} = data
  
  return (
    <Reorder.Item value={data}>
      <div className={appBurgerConstructorStyle.element}>
        <DragIcon type="primary" className={appBurgerConstructorStyle.icon}/>
        <ConstructorElement 
          text={name}
          price={price}
          thumbnail={image}
        />
      </div> 
    </Reorder.Item>
  );
};

export default BurgerScrollElement;