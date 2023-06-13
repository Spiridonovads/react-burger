import appHeaderStyles from './app-header.module.css';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const AppHeader = () => {

  const [burgerState, setBurgerState] = useState(false)
  const [listState, setListState] = useState(false)
  const [profileState, setProfileState] = useState(false)

    return (
        <header className={`pt-4 pb-4 ${appHeaderStyles.header}`}>
          <div className={appHeaderStyles.wrapper}>
            <nav className={appHeaderStyles.nav}>
             <ul className={`${appHeaderStyles.list} ${appHeaderStyles.left__edge}`}>
                <li className={`pr-5 pt-4 pb-4 mr-2 ${appHeaderStyles.item}`}>
                {burgerState ? <BurgerIcon/> : <BurgerIcon type="secondary"/>}
                <NavLink 
                  to={{ pathname: '/' }}
                  className={({isActive }) => {
                    if(isActive) {
                      setBurgerState(true)
                      return (
                        `pl-2 ${appHeaderStyles.active__button}`
                      )
                    } else {
                      setBurgerState(false)
                      return (
                        `pl-2 ${appHeaderStyles.button}`
                      )
                    }
                  }}>
                Конструктор
                </NavLink>
                </li>
                <li className={`pr-5 pt-4 pb-4 mr-2 ${appHeaderStyles.item}`}>
                {listState ? <ListIcon/> : <ListIcon type="secondary"/>}
                <NavLink 
                  to={{ pathname: '*' }}
                  className={({isActive }) => {
                    if(isActive) {
                      setListState(true)
                      return (
                        `pl-2 ${appHeaderStyles.active__button}`
                      )
                    } else {
                      setListState(false)
                      return (
                        `pl-2 ${appHeaderStyles.button}`
                      )
                    }
                  }}
                  >
                  Лента заказов
                </NavLink>
                </li>
              </ul>
              <Logo/>
              <ul className={`${appHeaderStyles.list} ${appHeaderStyles.right__edge}`}>
                <li className={`pr-5 pt-4 pb-4 mr-2 ${appHeaderStyles.item}`}>
                {profileState ? <ProfileIcon/> : <ProfileIcon type="secondary"/>}
                  <NavLink 
                    to={{ pathname: '/profile' }}
                    className={({isActive }) => {
                      if(isActive) {
                        setProfileState(true)
                        return (
                          `pl-2 ${appHeaderStyles.active__button}`
                        )
                      } else {
                        setProfileState(false)
                        return (
                          `pl-2 ${appHeaderStyles.button}`
                        )
                      }
                    }}
                    >
                    Личный кабинет
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </header>
    );
}

export default AppHeader;
