import appBurgerConstructorStyle from './burger-constructor.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Reorder } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { DELETE_ITEM } from '../../services/actions/constructor-data';
import { FC } from 'react';

type Data = { data: {_id: string; uniqueId: number; name: string; price: number; image: string} };

const BurgerConstructorScrollElement: FC<Data> = ({data}) => {
  
  const dispatch: any = useDispatch()

  const handleClose = () => {
    dispatch({type: DELETE_ITEM, id: data._id, index: data.uniqueId})    
  }

  return (
    <Reorder.Item value={data}>
      <div className={appBurgerConstructorStyle.element}>
        <DragIcon type="primary"/>
        <ConstructorElement 
          text={data.name}
          price={data.price}
          thumbnail={data.image}
          handleClose={handleClose}
        />
      </div> 
      </Reorder.Item>
  );
};

export default BurgerConstructorScrollElement;