import appBurgerIngredientsStyle from './burger-ingredients.module.css';
import Tabs from '../hocs/with-tabs';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import {useState, useMemo} from 'react'
import ModalOverlay from '../modal-overlay/modal-overlay';
import PropTypes from 'prop-types';
import IngredientDetails from '../ingredient-details/ingredient-details';



const BurgerIngredients = ({data}) => { 

  const [state, setState] = useState()

  const openModal = () => {
    setState(true);
  }
  
  const closeModal = () => {
    setState(false);
  }

  const burgerBuns = useMemo(() => {
    return data.filter(el => el.type === 'bun')
  }, []
  );

  const burgerSauce = useMemo(() => {
    return data.filter(el => el.type === 'sauce')
  }, []
  );

  const burgerFillings = useMemo(() => {
    return data.filter(el => el.type === 'main')
  }, []
  );
  
      return (
          <section className={appBurgerIngredientsStyle.ingredients__section}>
            <h1 className={`mt-10 mb-5 ${appBurgerIngredientsStyle.main__title}`}>Соберите бургер</h1>
            <Tabs active/>
            <div className={`mt-10 ${appBurgerIngredientsStyle.scroll}`}> 
              <h2 id="one" className={appBurgerIngredientsStyle.default__title}>Булки</h2>
              <div className={`ml-4 mt-6 mr-2 ${appBurgerIngredientsStyle.cards}`}>
                {burgerBuns.map((el) => {
                    return(
                      <>
                        <div className={appBurgerIngredientsStyle.card} key={el.id} href='#!' onClick={openModal} >
                          <div className={appBurgerIngredientsStyle.notice}/>
                          <img src={el.image}/>
                          <div className={appBurgerIngredientsStyle.price}>
                            <p>{el.price}</p>
                            <CurrencyIcon type="primary"/>
                          </div>
                          <p className={appBurgerIngredientsStyle.name}>{el.name}</p>
                        </div>
                        
                    </>
                  )
                })}
              </div>
    
              <h2 id="two" className={`mt-10 ${appBurgerIngredientsStyle.default__title}`}>Соусы</h2>
              <div className={`ml-4 mt-6 mr-2 ${appBurgerIngredientsStyle.cards}`}>
                {burgerSauce.map(el=> {
                    return(
                      <div className={appBurgerIngredientsStyle.card} key={el.id} href='#!' onClick={openModal}>
                        <div className={appBurgerIngredientsStyle.notice}/>
                        <img src={el.image}/>
                        <div className={appBurgerIngredientsStyle.price}>
                          <p>{el.price}</p>
                          <CurrencyIcon type="primary"/>
                        </div>
                      <p className={appBurgerIngredientsStyle.name}>{el.name}</p>

                    </div>
                  )
                })}
              </div>
    
              <h2 id="three" className={`mt-10 ${appBurgerIngredientsStyle.default__title}`}>Начинки</h2>
              <div className={`ml-4 mt-6 mr-2 ${appBurgerIngredientsStyle.cards}`}>
               {burgerFillings.map(el=> {
                    return(
                      <>
                      <div className={appBurgerIngredientsStyle.card} key={el.id} href='#!' onClick={openModal}>
                        <div className={appBurgerIngredientsStyle.notice}/>
                        <img src={el.image}/>
                        <div className={appBurgerIngredientsStyle.price}>
                          <p>{el.price}</p>
                          <CurrencyIcon type="primary"/>
                        </div>
                        <p className={appBurgerIngredientsStyle.name}>{el.name}</p>
                      </div>
                    
                    </>
                  )
                })}
              </div>
            </div>
           <ModalOverlay show={state} onCloseButtonClick={closeModal}><IngredientDetails data={data}/></ModalOverlay>
          </section>
        );
}



BurgerIngredients.propTypes = {
  data: PropTypes.array.isRequired
}



export default BurgerIngredients;

