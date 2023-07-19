import styles from "./feed-order-details.module.css";
import { useSelector } from "../../services/types/types";
import { FC, useMemo } from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import clsx from "clsx";

type Data = { route?: object };

const FeedOrderDetails: FC<Data> = ({ route }) => {
  let orderData: any;
  const { order } = useSelector((state) => state.feed);
  const { data } = useSelector((state) => state.ingredients);
  
  if (route) {
    orderData = route;
  } else {
    orderData = order;
  }

  const qty = useMemo(() => {
    return orderData.ingredients?.reduce((acc: any, el: string) => {
      acc[el] = (acc[el] || 0) + 1;
      return acc;
    }, {});
  }, [orderData]);

  const priceFilter = useMemo(() => {
    return data?.reduce((acc: number, el: any) => {
      orderData.ingredients?.map((element: string) => {
        if (el._id === element) {
          acc += el.price;
        }
      });

      return acc;
    }, 0);
  }, [orderData]);

  const filter = useMemo(() => {
    return data.reduce((acc: object[], el: any) => {
      for (const key in qty) {
        if (el._id == key) {
          acc.push({ ...el, qty: qty[key] });
        }
      }
      return acc;
    }, []);
  }, [orderData]);

  const className = clsx(
    `mb-15 ${styles.created}`,
    { [`mb-15 ${styles.done}`]: orderData.status === "done" },
    { [`mb-15 ${styles.pending}`]: orderData.status === "pending" }
  );

  return (
    orderData._id && (
      <div className={styles.wrapper}>
        <p className={`mb-10 ${styles.number}`}>{`#${orderData.number}`}</p>
        <h3 className={`mb-3 ${styles.name}`}>{orderData.name}</h3>
        <p className={className}>
          {orderData.status === "done"
            ? "Выполнен"
            : orderData.status === "pending"
            ? "Готовится"
            : "Создан"}
        </p>
        <p className={`mb-6 ${styles.title}`}>Состав:</p>
        <div className={`mb-10 pr-6 ${styles.scroll}`}>
          {filter.map((el: any) => {
            return (
              <div key={el._id} className={`mb-4 ${styles.ingredient}`}>
                <div className={styles.ingredient__name}>
                  <div className={`mr-4 ${styles.border}`}>
                    <div className={`${styles.image}`}>
                      <img
                        src={el.image}
                        alt="ingredient image"
                        className={styles.size}
                      />
                    </div>
                  </div>
                  <p>{el.name}</p>
                </div>
                <div className={styles.full__price}>
                  <p
                    className={`pr-2 pl-4 ${styles.price}`}
                  >{`${el.qty} x ${el.price}`}</p>
                  <CurrencyIcon type="primary" />
                </div>
              </div>
            );
          })}
        </div>
        <div className={`mb-5 ${styles.flex}`}>
          <p className={styles.date}>{orderData.createdAt}</p>
          <div className={styles.full__price}>
            <p className={`pr-2 ${styles.price}`}>{priceFilter}</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    )
  );
};

export default FeedOrderDetails;
