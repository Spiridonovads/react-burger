import appBurgerIngredientsStyle from './burger-ingredients.module.css';
import Tabs from '../hocs/with-tabs';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import {useState, useRef, useEffect} from 'react'
import ModalOverlay from '../modal-overlay/modal-overlay';
import PropTypes from 'prop-types';



const BurgerIngredients = ({data}) => { 
  const [state, setState] = useState()


  const toggleModal = () => {
    setState(!state)
  }
  let index 
      return (
          <section className={appBurgerIngredientsStyle.ingredients__section}>
            <h1 className={`mt-10 mb-5 ${appBurgerIngredientsStyle.main__title}`}>Соберите бургер</h1>
            <Tabs/>
            <div className={`mt-10 ${appBurgerIngredientsStyle.scroll}`}> 
              <h2 id="one" className={appBurgerIngredientsStyle.default__title}>Булки</h2>
              <div className={`ml-4 mt-6 mr-2 ${appBurgerIngredientsStyle.cards}`}>
                {data.map((el, i) => {
                  if(el.type === "bun"){
                    index = i
                    return(
                      <>
                        <div className={appBurgerIngredientsStyle.card} key={el.id} href='#!' onClick={toggleModal} >
                          <div className={appBurgerIngredientsStyle.notice}/>
                          <img src={el.image}/>
                          <div className={appBurgerIngredientsStyle.price}>
                            <p>{el.price}</p>
                            <CurrencyIcon type="primary"/>
                          </div>
                          <p className={appBurgerIngredientsStyle.name}>{el.name}</p>
                          <ModalOverlay show={state} onCloseButtonClick={toggleModal} modalType='ingredient' data={data}/>
                        </div>
                        
                    </>
                  )
                  }
                })}
              </div>
    
              <h2 id="two" className={`mt-10 ${appBurgerIngredientsStyle.default__title}`}>Соусы</h2>
              <div className={`ml-4 mt-6 mr-2 ${appBurgerIngredientsStyle.cards}`}>
                {data.map(el=> {
                  if(el.type === "sauce"){
                    return(
                      <div className={appBurgerIngredientsStyle.card} key={el.id} href='#!' onClick={toggleModal}>
                        <div className={appBurgerIngredientsStyle.notice}/>
                        <img src={el.image}/>
                        <div className={appBurgerIngredientsStyle.price}>
                          <p>{el.price}</p>
                          <CurrencyIcon type="primary"/>
                        </div>
                      <p className={appBurgerIngredientsStyle.name}>{el.name}</p>

                    </div>
                  )
                  }
                })}
              </div>
    
              <h2 id="three" className={`mt-10 ${appBurgerIngredientsStyle.default__title}`}>Начинки</h2>
              <div className={`ml-4 mt-6 mr-2 ${appBurgerIngredientsStyle.cards}`}>
               {data.map(el=> {
                  if(el.type === "main"){
                    return(
                      <>
                      <div className={appBurgerIngredientsStyle.card} key={el.id} href='#!' onClick={toggleModal}>
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
                  }
                })}
              </div>
            </div>

          </section>
        );
}



BurgerIngredients.propTypes = {
  data: PropTypes.array.isRequired
}



export default BurgerIngredients;

