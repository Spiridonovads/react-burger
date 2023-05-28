import appBurgerConstructorStyle from './burger-constructor.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Reorder } from 'framer-motion';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { DELETE_ITEM } from '../../services/actions/constructor-data';

const BurgerConstructorScrollElement = ({data}) => {
  
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch({type: DELETE_ITEM, id: data._id, index: data.uniqueId})    
  }

  return (
    <Reorder.Item value={data}>
      <div className={appBurgerConstructorStyle.element}>
        <DragIcon type="primary" className={appBurgerConstructorStyle.icon}/>
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

BurgerConstructorScrollElement.propTypes = {
  data: PropTypes.object.isRequired
}

export default BurgerConstructorScrollElement;