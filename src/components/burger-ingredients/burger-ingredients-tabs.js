import {useState, useEffect} from 'react'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import appBurgerIngredientsStyle from './burger-ingredients.module.css';
import PropTypes from 'prop-types';

const Tabs = ({currentTab}) => {
  
  const [current, setCurrent] = useState('one');

  useEffect(() => {
    if(currentTab == 'one'){
      setCurrent('one')
    }
    if(currentTab == 'two'){
      setCurrent('two')
    }
    if(currentTab == 'three'){
      setCurrent('three')
    }
  }, [currentTab])
  
  return (
    <div className={appBurgerIngredientsStyle.tabs}>
      <a href="#one">
        <Tab value="one" active={current == 'one'} onClick={setCurrent}>
        Булки
        </Tab>
      </a>
      <a href="#two">
        <Tab value="two" active={current == 'two'} onClick={setCurrent}>
          Соусы
        </Tab>
      </a>
      <a href="#three">
        <Tab value="three" active={current == 'three'} onClick={setCurrent}>
          Начинки
        </Tab>
      </a>
    </div>
  )
}

Tabs.propTypes = {
  currentTab: PropTypes.string
}

export default Tabs;