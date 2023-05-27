import appBurgerConstructorStyle from './burger-constructor.module.css';
import BurgerConstructorElements from './burger-constructor-elements';
import { useDrop } from "react-dnd";
import { useDispatch } from 'react-redux';

const BurgerConstructor = () => {

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item) {
      handleDrop(item)
    },
});

  const dispatch = useDispatch();

  const handleDrop = (item) => {
    dispatch({type: 'ADD_ITEM_PROPERTIES', ingredient: item })
    dispatch({type: 'ADD_ITEM', ingredient: item })
    
};

  return (
    <section className={`pt-25 pl-4 ${appBurgerConstructorStyle.constructor__section}`} ref={dropTarget}>
      <BurgerConstructorElements/>
    </section>
  );
}

export default BurgerConstructor;


