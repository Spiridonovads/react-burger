import React from 'react';
import appBurgerIngredientsStyle from './burger-ingredients.module.css';
import data from '../../utile/data.json';
import Tabs from '../hocs/with-tabs';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../../modal-overlay/modal-overlay';




class BurgerIngredients extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  handleOpenModal = () => {
    this.setState({ visible: !this.state.visible });
  }

    render() {
      return (
          <section className={appBurgerIngredientsStyle.ingredients__section}>
            <h1 className={`mt-10 mb-5 ${appBurgerIngredientsStyle.main__title}`}>Соберите бургер</h1>
            <Tabs/>
            <div className={`mt-10 ${appBurgerIngredientsStyle.scroll}`}> 
              <h2 id="one" className={appBurgerIngredientsStyle.default__title}>Булки</h2>
              <div className={`ml-4 mt-6 mr-2 ${appBurgerIngredientsStyle.cards}`}>
                {data.map(el=> {
                  if(el.type === "bun"){
                    return(
                      <div className={appBurgerIngredientsStyle.card} key={el.id}>
                      <div className={appBurgerIngredientsStyle.notice}/>
                      <img src={el.image}/>
                      <div className={appBurgerIngredientsStyle.price}>
                        <p>{el.price}</p>
                        <CurrencyIcon type="primary"/>
                      </div>
                      <a href='#!' onClick={this.handleOpenModal} className={appBurgerIngredientsStyle.links}>{el.name}</a>
                      {this.state.visible && 
                      <ModalOverlay data={el}/>
                      }
                    </div>
                  )
                  }
                })}
              </div>
    
              <h2 id="two" className={`mt-10 ${appBurgerIngredientsStyle.default__title}`}>Соусы</h2>
              <div className={`ml-4 mt-6 mr-2 ${appBurgerIngredientsStyle.cards}`}>
                {data.map(el=> {
                  if(el.type === "sauce"){
                    return(
                      <div className={appBurgerIngredientsStyle.card} key={el.id}>
                      <div className={appBurgerIngredientsStyle.notice}/>
                      <img src={el.image}/>
                      <div className={appBurgerIngredientsStyle.price}>
                        <p>{el.price}</p>
                        <CurrencyIcon type="primary"/>
                      </div>
                      <a href='#!' onClick={this.handleOpenModal} className={appBurgerIngredientsStyle.links}>{el.name}</a>
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
                      <div className={appBurgerIngredientsStyle.card} key={el.id}>
                        <div className={appBurgerIngredientsStyle.notice}/>
                        <img src={el.image}/>
                        <div className={appBurgerIngredientsStyle.price}>
                          <p>{el.price}</p>
                          <CurrencyIcon type="primary"/>
                        </div>
                        <a href='#!' onClick={this.handleOpenModal} className={appBurgerIngredientsStyle.links}>{el.name}</a>
                    </div>
                    
                  )
                  }
                })}
              </div>
            </div>
          </section>
        );
    }
    
}



export default BurgerIngredients;

