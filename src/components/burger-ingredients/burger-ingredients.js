import appBurgerIngredientsStyle from './burger-ingredients.module.css';
import Tabs from './burger-ingredients-tabs';
import { useState, useMemo, useRef, useEffect } from 'react';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import BurgerIngredientsProduct from './burger-ingredients-products';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SET_MODAL_STATE } from '../../services/actions/ingredients-data';

const BurgerIngredients = () => { 

  const [isIntersecting, setIsIntersecting] = useState('');
  const bunsRef = useRef(null);
  const sauceRef = useRef(null);
  const fillingsRef = useRef(null);
  let currentTab = isIntersecting;

  const dispatch = useDispatch();
  const { data } = useSelector(state => state.ingredients);
  const { modalState } = useSelector(state => state.ingredients);
  
  useEffect(() => {
    const bunsObserver = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting) {
          setIsIntersecting('one');
        } 
      },
    {root: document.getElementById('root'), rootMargin: "-500px" },
    );
    bunsObserver.observe(bunsRef.current);

   const sauceObserver = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting) {
          setIsIntersecting('two');
        }    
      },
    {root: document.getElementById('root'), rootMargin: "-500px" },
    );
    sauceObserver.observe(sauceRef.current);

    const fillingsObserver = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting) {
          setIsIntersecting('three');
        }    
      },
    {root: document.getElementById('root'), rootMargin: "-500px" },
    );
    fillingsObserver.observe(fillingsRef.current);
    
    return () => {
      bunsObserver.disconnect(); 
      sauceObserver.disconnect(); 
      fillingsObserver.disconnect(); 
    };
  }, [isIntersecting]);

  const navigate = useNavigate();

  const closeModal = () => {
    navigate('/', { replace: true })
    dispatch({type: SET_MODAL_STATE, bool: false})
  }

  const burgerBuns = useMemo(() => {
    return data.filter(el => el.type === 'bun')
  }, [data]
  );

  const burgerSauce = useMemo(() => {
    return data.filter(el => el.type === 'sauce')
  }, [data]
  );

  const burgerFillings = useMemo(() => {
    return data.filter(el => el.type === 'main')
  }, [data]
  );
  
      return (
          <section className={appBurgerIngredientsStyle.ingredients__section}>
            <h1  className={`mt-10 mb-5 ${appBurgerIngredientsStyle.main__title}`}>Соберите бургер</h1>
            <Tabs currentTab={currentTab} active/>
            <div className={`mt-10 ${appBurgerIngredientsStyle.scroll}`}> 
            <div  id="one" ref={bunsRef}  >
              <h2 className={appBurgerIngredientsStyle.default__title}>Булки</h2>
              <div className={`ml-4 mt-6 mr-2 ${appBurgerIngredientsStyle.cards}`}>
                {burgerBuns.map(el => {
                  return (
                    <BurgerIngredientsProduct elData={el} key={el._id}/>
                  )
                })}
              </div>
              </div>

              <div id="two" ref={sauceRef} >
              <h2 className={`mt-10 ${appBurgerIngredientsStyle.default__title}`}>Соусы</h2>
              <div className={`ml-4 mt-6 mr-2 ${appBurgerIngredientsStyle.cards}`}>
                {burgerSauce.map(el => {
                    return (
                      <BurgerIngredientsProduct elData={el} key={el._id}/>
                    )
                  })}
              </div>
              </div>

              <div id="three" ref={fillingsRef} >
              <h2 className={`mt-10 ${appBurgerIngredientsStyle.default__title}`}>Начинки</h2>
              <div className={`ml-4 mt-6 mr-2 ${appBurgerIngredientsStyle.cards}`}>
                {burgerFillings.map(el => {
                      return (
                        <BurgerIngredientsProduct elData={el} key={el._id}/>
                      )
                    })}
              </div>
              </div>

            </div>
          {modalState && 
           <Modal onCloseButtonClick={closeModal}><IngredientDetails/></Modal>
            } 
          </section>
        );
}

export default BurgerIngredients;

