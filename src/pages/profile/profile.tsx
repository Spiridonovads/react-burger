import profileScreenStyles from "./profile.module.css";
import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "../../services/types/types";
import {
  getPerson,
  getChangePerson,
  deletePerson,
} from "../../services/actions/person-data";
import { deleteLogout, getLogout } from "../../services/actions/logout-data";
import clsx from "clsx";
import FeedOrderProducts from "../../components/feed-order/feed-order-products";
import { getSocketStartProfile, getSocketClose } from "../../services/actions/socket-data";
import { setFeedModalState } from "../../services/actions/feed-data";
import Modal from "../../components/modal/modal";
import FeedOrderDetails from "../../components/feed-order-details/feed-order-details";

type Data = { email: string; password: string; name: string };

const Profile = () => {
  const [form, setValue] = useState<Data>({
    email: "",
    password: "",
    name: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  const logoutClick = () => {
    dispatch(getLogout());
  };
  const logoutData = useSelector((state) => state.logout.data);
  const navigate = useNavigate();

  if (logoutData.success) {
    navigate("/login", { replace: false });
    dispatch(deleteLogout());
    dispatch(deletePerson());
  }

  useEffect(() => {
    dispatch(getPerson());
    dispatch(getSocketStartProfile());
    return () => {
      dispatch(getSocketClose())
    }
  }, [dispatch]);

  const { data } = useSelector((state) => state.person);
  const orders = useSelector((state) => state.socket.data);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getChangePerson(form));
  };
  const location = useLocation();

  const profileActive = clsx(` ${profileScreenStyles.link}`, {
    [`${profileScreenStyles.active__link}`]: location.pathname === "/profile",
  });
  const orderActive = clsx(` ${profileScreenStyles.link}`, {
    [` ${profileScreenStyles.active__link}`]:
      location.pathname === "/profile/orders",
  });

  const closeModal = (): void => {
    navigate("/profile/orders", { replace: true });
    dispatch(setFeedModalState(false));
  };

  const { modalState } = useSelector((state) => state.feed);
  return (
    <>
      <main>
        <section className={profileScreenStyles.section}>
          <div>
            <ul className="mt-20">
              <li className={profileScreenStyles.list__item}>
                <NavLink
                  to={{ pathname: "/profile" }}
                  className={profileActive}
                >
                  {" "}
                  Профиль{" "}
                </NavLink>
              </li>
              <li className={profileScreenStyles.list__item}>
                <NavLink
                  to={{ pathname: "/profile/orders" }}
                  className={orderActive}
                >
                  {" "}
                  История заказов{" "}
                </NavLink>
              </li>
              <li className={profileScreenStyles.list__item}>
                <NavLink
                  to={{ pathname: "/profile" }}
                  className={profileScreenStyles.link}
                  onClick={logoutClick}
                >
                  Выход
                </NavLink>
              </li>
              <li className={` mt-20 ${profileScreenStyles.other__link}`}>
                В этом разделе вы можете изменить свои персональные данные
              </li>
            </ul>
          </div>
          {location.pathname === "/profile" && (
            <form
              onSubmit={handleFormSubmit}
              className={`mt-20 ${profileScreenStyles.form}`}
            >
              <Input
                placeholder={data.success ? data.user?.name : "Имя"}
                onChange={onChange}
                icon={"EditIcon"}
                value={form.name}
                name={"name"}
              />
              <EmailInput
                onChange={onChange}
                value={form.email}
                name={"email"}
                placeholder={data.success ? data.user?.email : "Логин"}
              />
              <PasswordInput
                onChange={onChange}
                value={form.password}
                name={"password"}
                placeholder={"***********"}
              />
              <Button htmlType="submit" type="primary" size="large">
                Сохранить
              </Button>
            </form>
          )}
          {location.pathname !== "/profile" && (
            <div className={profileScreenStyles.block}>
              <div className={`pr-2 ${profileScreenStyles.scroll}`}>
                {orders.orders?.map((el: any, i:number) => {
                  return <FeedOrderProducts key={i}>{el}</FeedOrderProducts>;
                })}
              </div>
            </div>
          )}
        </section>
      </main>
      {modalState && (
        <Modal onCloseButtonClick={closeModal}>
          <FeedOrderDetails />
        </Modal>
      )}
    </>
  );
};

export default Profile;
