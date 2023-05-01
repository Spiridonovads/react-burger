import React from 'react';
import appBurgerIngredientsStyle from './app-burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';



const dataPropTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
});



function BurgerIngredientsCard (props) {
  return(
    <>
      <div className={`${appBurgerIngredientsStyle.card}`}>
        <div className={appBurgerIngredientsStyle.notice}></div>
        <img src={props.data.image}/>
        <div className={appBurgerIngredientsStyle.price}>
          <p>{props.data.price}</p>
          <CurrencyIcon type="primary"/>
        </div>
        <p>{props.data.name}</p>
      </div>
   </>
  )
}

/*BurgerIngredients.propTypes = {
  props: dataPropTypes
}*/



const Tabs = () => {
  const [current, setCurrent] = React.useState('one');
  return (
    <div style={{ display: 'flex' }}>
      <a href="#one">
        <Tab href="#bul" value="one" active={current === 'one'} onClick={setCurrent}>
        Булки
        </Tab>
      </a>
      <a href="#two">
        <Tab value="two" active={current === 'two'} onClick={setCurrent}>
          Соусы
        </Tab>
      </a>
      <a href="#three">
        <Tab value="three" active={current === 'three'} onClick={setCurrent}>
          Начинки
        </Tab>
      </a>
    </div>
  )
}

class BurgerIngredients extends React.Component {
  
  render() {

    let data = require('../../utile/data.json')

    return (
    <>
      <section className={appBurgerIngredientsStyle.ingredients__section}>
        <h1 className={`mt-10 mb-5 ${appBurgerIngredientsStyle.main__title}`}>Соберите бургер</h1>
        <Tabs/>
        <div className={`mt-10 ${appBurgerIngredientsStyle.scroll}`}> 
          <h2 id="one" className={appBurgerIngredientsStyle.default__title}>Булки</h2>
          <div className={`ml-4 mt-6 mr-2 ${appBurgerIngredientsStyle.cards}`}>
            <BurgerIngredientsCard data={data[0]}/>
            <BurgerIngredientsCard data={data[14]}/>
          </div>

          <h2 id="two" className={`mt-10 ${appBurgerIngredientsStyle.default__title}`}>Соусы</h2>
          <div className={`ml-4 mt-6 mr-2 ${appBurgerIngredientsStyle.cards}`}>
            <BurgerIngredientsCard data={data[3]}/>
            <BurgerIngredientsCard data={data[6]}/>
            <BurgerIngredientsCard data={data[5]}/>
            <BurgerIngredientsCard data={data[9]}/>
          </div>

          <h2 id="three" className={`mt-10 ${appBurgerIngredientsStyle.default__title}`}>Начинки</h2>
          <div className={`ml-4 mt-6 mr-2 ${appBurgerIngredientsStyle.cards}`}>
            <BurgerIngredientsCard data={data[1]}/>
            <BurgerIngredientsCard data={data[2]}/>
            <BurgerIngredientsCard data={data[4]}/>
            <BurgerIngredientsCard data={data[7]}/>
            <BurgerIngredientsCard data={data[8]}/>
            <BurgerIngredientsCard data={data[10]}/>
            <BurgerIngredientsCard data={data[11]}/>
            <BurgerIngredientsCard data={data[12]}/>
            <BurgerIngredientsCard data={data[13]}/>
          </div>
        </div>
      </section>
    </>
    );
  }
}

export default BurgerIngredients;

