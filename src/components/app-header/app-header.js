import appHeaderStyles from './app-header.module.css';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import AppHeaderListItem from './app-header-list-item';



const AppHeader = () => {
    return (
        <header className={`pt-4 pb-4 ${appHeaderStyles.header}`}>
          <div className={appHeaderStyles.wrapper}>
            <nav className={appHeaderStyles.nav}>
             <ul className={`${appHeaderStyles.list} ${appHeaderStyles.left__edge}`}>
                <li className='pr-5 pt-4 pb-4 mr-2'>
                  <AppHeaderListItem name='Конструктор' icon='burgerIcon'/>
                </li>
                <li className='pl-5 pt-4 pb-4'>
                  <AppHeaderListItem name='Лента заказов' icon='listIcon'/>
                </li>
              </ul>
              <Logo/>
              <ul className={`${appHeaderStyles.list} ${appHeaderStyles.right__edge}`}>
                <li className='pl-5 pt-4 pb-4'>
                 <AppHeaderListItem name='Личный кабинет' icon='profileIcon'/>
                </li>
              </ul>
            </nav>
          </div>
        </header>
    );
}



export default AppHeader;




