import appBurgerConstructorStyle from './burger-constructor.module.css';
import BurgerConstructorElements from './burger-constructor-elements';
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from '../../services/types/types';
import { addIngridient } from '../../services/actions/constructor-data';
import { addItemProperties, Bun } from '../../services/actions/constructor-data'

const BurgerConstructor = () => {

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item: {type: string}) {
      handleDrop(item)
    },
  });

  const { order } = useSelector(state => state.constructor);

  const dispatch = useDispatch()

  const handleDrop = (item: {type: string}) => {
    if(item.type !== 'bun'){
      dispatch(addIngridient(item)); 
      dispatch(addItemProperties());  
    } else {
      dispatch(Bun(item));  
    }
};
  return (
    <section className={`pt-25 pl-4 ${appBurgerConstructorStyle.constructor__section}`} ref={dropTarget}>
    {order && order.length === 0 &&
    <h1 className={appBurgerConstructorStyle.visible}>Пожалуйста, перенесите сюда булку и ингредиенты для создания заказа</h1>
    }
     {order && order.length > 0 &&
       <>
       <BurgerConstructorElements/> 
       </>
     }
    </section>
  );
}

export default BurgerConstructor;


