import React from 'react';
import appHeaderStyles from './app-header.module.css';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';


function Icon (props) {

  if(props.icon === 'burgerIcon'){
    return (
      <BurgerIcon/>
    )
  }

  if(props.icon === 'listIcon'){
    return (
      <ListIcon/>
    )
  }

  if(props.icon === 'profileIcon'){
    return (
      <ProfileIcon/>
    )
  }
}

class HeaderList extends React.Component {


  render(){

    return (
    <>
      <div className={appHeaderStyles.item}>
        <Icon icon ={this.props.icon}/>
        <button onClick={this.togglePages} type='button' className={`pl-2 ${appHeaderStyles.button}`}>
        {this.props.name}
        </button>
      </div>
    </>
    )
  }
}

class AppHeader extends React.Component {
 
  render() {

    return (
      <>
        <header className={`pt-4 pb-4 ${appHeaderStyles.header}`}>
          <div className={appHeaderStyles.wrapper}>
            <nav className={appHeaderStyles.nav}>
             <ul className={`${appHeaderStyles.list} ${appHeaderStyles.left__edge}`}>
                <li className='pr-5 pt-4 pb-4 mr-2'>
                  <HeaderList name='Конструктор' icon='burgerIcon'/>
                </li>
                <li className='pl-5 pt-4 pb-4'>
                  <HeaderList name='Лента заказов' icon='listIcon'/>
                </li>
              </ul>
              <Logo/>
              <ul className={`${appHeaderStyles.list} ${appHeaderStyles.right__edge}`}>
                <li className='pl-5 pt-4 pb-4'>
                 <HeaderList name='Личный кабинет' icon='profileIcon'/>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </>
    );
  }
}

export default AppHeader;




