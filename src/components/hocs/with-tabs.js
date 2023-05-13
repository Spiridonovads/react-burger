import {useState, useEffect, useRef} from 'react'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import withTabsStyle from './with-tabs.module.css'



const Tabs = () => {
  const [current, setCurrent] = useState('one');
  
  return (
    <div className={withTabsStyle.wrapper}>
      <a href="#one">
        <Tab value="one" active={current === 'one'} onClick={setCurrent}>
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



export default Tabs;