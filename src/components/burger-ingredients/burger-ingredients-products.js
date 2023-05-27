import appBurgerIngredientsStyle from './burger-ingredients.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag } from "react-dnd";
import { useSelector, useDispatch } from 'react-redux';

const BurgerIngredientsProduct = ({ref, elData}) => { 

  const {order} = useSelector(state => state.constructor)

  const [, dragRef] = useDrag({
    type: "ingredient",
    item: elData
});

  const dispatch = useDispatch();

  const openModal = () => {
    dispatch({type: 'GET_INGREDIENT_INFO', id: elData._id})
    dispatch({type: 'SET_MODAL_STATE', bool: true})
  }

      return (
        <div ref={dragRef}>
          <div className={appBurgerIngredientsStyle.card} onClick={openModal} ref={ref}> 
          {order.map((el, i) => {
            if(el.name === elData.name /*&& el.qty > 0*/){
              return <div key={i} className={appBurgerIngredientsStyle.notice}>{el.qty}</div>
            }
          })}
            <img src={elData.image}/>
            <div className={appBurgerIngredientsStyle.price}>
              <p>{elData.price}</p>
              <CurrencyIcon type="primary"/>
            </div>
            <p className={appBurgerIngredientsStyle.name}>{elData.name}</p>
          </div>
        </div>   
      )
}

export default BurgerIngredientsProduct;

