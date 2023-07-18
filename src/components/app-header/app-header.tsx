import appHeaderStyles from "./app-header.module.css";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink, Link } from "react-router-dom";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import clsx from "clsx";
import { useLocation } from "react-router-dom";

const AppHeader = () => {
  const location = useLocation();
  const burgerClassName = clsx(`pl-2 ${appHeaderStyles.button}`, {
    [`pl-2 ${appHeaderStyles.active__button}`]: location.pathname === "/",
  });
  const listClassName = clsx(`pl-2 ${appHeaderStyles.button}`, {
    [`pl-2 ${appHeaderStyles.active__button}`]: location.pathname === "/feed",
  });
  const profileClassName = clsx(`pl-2 ${appHeaderStyles.button}`, {
    [`pl-2 ${appHeaderStyles.active__button}`]:
      location.pathname === "/profile",
  });

  return (
    <header className={`pt-4 pb-4 ${appHeaderStyles.header}`}>
      <div className={appHeaderStyles.wrapper}>
        <nav className={appHeaderStyles.nav}>
          <ul
            className={`${appHeaderStyles.list} ${appHeaderStyles.left__edge}`}
          >
            <li className={`pr-5 pt-4 pb-4 mr-2 ${appHeaderStyles.item}`}>
              {location.pathname === "/" ? (
                <BurgerIcon type="primary" />
              ) : (
                <BurgerIcon type="secondary" />
              )}
              <NavLink to={{ pathname: "/" }} className={burgerClassName}>
                Конструктор
              </NavLink>
            </li>
            <li className={`pr-5 pt-4 pb-4 mr-2 ${appHeaderStyles.item}`}>
              {location.pathname === "/feed" ? (
                <ListIcon type="primary" />
              ) : (
                <ListIcon type="secondary" />
              )}
              <NavLink to={{ pathname: "/feed" }} className={listClassName}>
                Лента заказов
              </NavLink>
            </li>
          </ul>
          <Link to="/">
            <Logo />
          </Link>
          <ul
            className={`${appHeaderStyles.list} ${appHeaderStyles.right__edge}`}
          >
            <li className={`pr-5 pt-4 pb-4 mr-2 ${appHeaderStyles.item}`}>
              {location.pathname === "/profile" ? (
                <ProfileIcon type="primary" />
              ) : (
                <ProfileIcon type="secondary" />
              )}
              <NavLink
                to={{ pathname: "/profile" }}
                className={profileClassName}
              >
                Личный кабинет
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;
