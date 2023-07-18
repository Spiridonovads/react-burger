import appOrderProductsStyle from "./feed-order.module.css";
import { FC } from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from "../../services/types/types";
import { useMemo } from "react";
import { useLocation, Link } from "react-router-dom";
import clsx from "clsx";
import {
  getFeedOrder,
  setFeedModalState
} from "../../services/actions/feed-data";

type Data = {
  children: {
    ingredients: object[];
    number: number;
    createdAt: string;
    name: string;
    status: string;
    _id: string;
  };
};

const FeedOrderProducts: FC<Data> = ({ children }) => {
  const location = useLocation();

  const { data } = useSelector((state: any) => state.ingredients);

  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(getFeedOrder(children));
    dispatch(setFeedModalState(true));
  };

  const imageFilter = useMemo(() => {
    return data.reduce((acc: any, el: any) => {
      children.ingredients.map((element: any) => {
        if (el._id === element) {
          acc.push(el.image);
        }
      });
      return acc;
    }, []);
  }, [children]);

  const priceFilter = useMemo(() => {
    return data.reduce((acc: any, el: any) => {
      children.ingredients.map((element: any) => {
        if (el._id === element) {
          acc += el.price;
        }
      });
      return acc;
    }, 0);
  }, [children]);

  const className = clsx(
    { [`mt-2 ${appOrderProductsStyle.done}`]: children.status === "done" },
    {
      [`mt-2 ${appOrderProductsStyle.pending}`]: children.status === "pending",
    },
    { [`mt-2 ${appOrderProductsStyle.created}`]: children.status === "created" }
  );

  return (
    <Link
      to={
        location.pathname === "/profile/orders"
          ? { pathname: `/profile/orders/${children._id}` }
          : { pathname: `/feed/${children._id}` }
      }
      state={{ background: location }}
      onClick={openModal}
    >
      <div
        className={`mb-4 pt-6 pl-6 pr-6 pb-6 ${appOrderProductsStyle.wrapper}`}
      >
        <div className={`mb-6 ${appOrderProductsStyle.numbers}`}>
          <p
            className={appOrderProductsStyle.number}
          >{`#${children.number}`}</p>
          <p className={appOrderProductsStyle.date}>{children.createdAt}</p>
        </div>
        <h2 className={`${appOrderProductsStyle.name}`}>{children.name}</h2>
        {location.pathname === "/profile/orders" && (
          <p className={className}>
            {children.status === "done"
              ? "Выполнен"
              : children.status === "pending"
              ? "Готовится"
              : "Создан"}
          </p>
        )}

        <div className={`mt-6 ${appOrderProductsStyle.products}`}>
          {imageFilter?.map((el: any, i: any) => {
            while (i < 6) {
              return (
                <div
                  key={i}
                  className={
                    i === 0
                      ? appOrderProductsStyle.first__child
                      : i === 1
                      ? appOrderProductsStyle.second__child
                      : i === 2
                      ? appOrderProductsStyle.third__child
                      : i === 3
                      ? appOrderProductsStyle.fourth__child
                      : i === 4
                      ? appOrderProductsStyle.fifth__child
                      : i === 5 && imageFilter.length > 6
                      ? appOrderProductsStyle.sixth__child
                      : appOrderProductsStyle.last__child
                  }
                >
                  <div className={`${appOrderProductsStyle.border}`}>
                    <div className={`${appOrderProductsStyle.image}`}>
                      {i === 5 && imageFilter.length > 6 && (
                        <p className={appOrderProductsStyle.qty}>
                          {`+${imageFilter.length - 6}`}
                        </p>
                      )}
                      <img
                        src={el}
                        alt="ingredient image"
                        className={appOrderProductsStyle.size}
                      />
                    </div>
                  </div>
                </div>
              );
            }
          })}
          <div className={appOrderProductsStyle.full__price}>
            <p className={`pr-2 ${appOrderProductsStyle.price}`}>
              {priceFilter}
            </p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeedOrderProducts;
