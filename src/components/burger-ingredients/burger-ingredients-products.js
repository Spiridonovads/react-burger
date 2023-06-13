import appBurgerIngredientsStyle from './burger-ingredients.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag } from "react-dnd";
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { GET_INGREDIENT_INFO } from '../../services/actions/ingredients-data';
import { SET_MODAL_STATE } from '../../services/actions/ingredients-data';
import { Link } from 'react-router-dom';

const BurgerIngredientsProduct = ({ref, elData}) => { 

  const {  data, loading, error  } = useSelector(state => state.constructor);

  const [, dragRef] = useDrag({
    type: "ingredient",
    item: elData
});

  const dispatch = useDispatch();

  const openModal = () => {
    dispatch({type: GET_INGREDIENT_INFO, el: elData})
    dispatch({type: SET_MODAL_STATE, bool: true})
  }

      return (
       
        <div ref={dragRef}>
          <Link to={{pathname: `/ingredients/${elData._id}`}}className={appBurgerIngredientsStyle.card} onClick={openModal} ref={ref}> 
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
              <p>{elData.name}</p>
          </Link>
        </div> 
         
      )
}

BurgerIngredientsProduct.propTypes = {
  ref: PropTypes.string,
  elData: PropTypes.object.isRequired,
}

export default BurgerIngredientsProduct;

