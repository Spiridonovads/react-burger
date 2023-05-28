import appBurgerConstructorStyle from './burger-constructor.module.css';
import BurgerConstructorElements from './burger-constructor-elements';
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from 'react-redux';
import { addIngridient } from '../../services/actions/constructor-data';
import { ADD_ITEM_PROPERTIES, BUN } from '../../services/actions/constructor-data';

const BurgerConstructor = () => {

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item) {
      handleDrop(item)
    },
  });

  const { order } = useSelector(state => state.constructor);

  const dispatch = useDispatch();

  const handleDrop = (item) => {
    if(item.type !== 'bun'){
      dispatch(addIngridient(item)); 
      dispatch({
        type: ADD_ITEM_PROPERTIES
      });  
    } else {
      dispatch({
        type: BUN, 
        ingredient: item
      });  
    }
};
  const isVisible = order ? `${appBurgerConstructorStyle.invisible}` :  `${appBurgerConstructorStyle.visible}`
  return (
    
    <section className={`pt-25 pl-4 ${appBurgerConstructorStyle.constructor__section}`} ref={dropTarget}>
    <h1 className={isVisible}>Пожалуйста, перенесите сюда булку и ингредиенты для создания заказа</h1>
     {order && 
       <BurgerConstructorElements/> 
     }
    </section>
  );
}

export default BurgerConstructor;


