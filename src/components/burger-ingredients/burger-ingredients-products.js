import appBurgerIngredientsStyle from './burger-ingredients.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag } from "react-dnd";
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { GET_INGREDIENT_INFO } from '../../services/actions/ingredients-data';
import { SET_MODAL_STATE } from '../../services/actions/ingredients-data';

const BurgerIngredientsProduct = ({ref, elData}) => { 

  const {  data, loading, error  } = useSelector(state => state.constructor);

  const [, dragRef] = useDrag({
    type: "ingredient",
    item: elData
});

  const dispatch = useDispatch();

  const openModal = () => {
    dispatch({type: GET_INGREDIENT_INFO, id: elData._id})
    dispatch({type: SET_MODAL_STATE, bool: true})
  }

      return (
        <div ref={dragRef}>
          <div className={appBurgerIngredientsStyle.card} onClick={openModal} ref={ref}> 
            {loading && <h1>Загрузка...</h1>}
            {error && <h1>Произошла ошибка</h1>}
            {!loading && !error && data.length > 0 &&
              data.map((el, i) => {
                if(el.name === elData.name && el.qty > 0){
                  return <div key={i} className={appBurgerIngredientsStyle.notice}>{el.qty}</div>
                }
              })}
            <img src={elData.image} alt='product image'/>
            <div className={appBurgerIngredientsStyle.price}>
              <p>{elData.price}</p>
              <CurrencyIcon type="primary"/>
            </div>
            <p className={appBurgerIngredientsStyle.name}>{elData.name}</p>
          </div>
        </div>   
      )
}

BurgerIngredientsProduct.propTypes = {
  ref: PropTypes.string,
  elData: PropTypes.object.isRequired,
}

export default BurgerIngredientsProduct;

