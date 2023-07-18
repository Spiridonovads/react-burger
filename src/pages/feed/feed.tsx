import appFeedStyle from "./feed.module.css";
import FeedOrder from "../../components/feed-order/feed-order";
import { useSelector } from "../../services/types/types";
import { useMemo, useEffect } from "react";
import {
  getSocketStartFeed,
  getSocketClose,
} from "../../services/actions/socket-data";
import { useDispatch } from "../../services/types/types";

const Feed = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSocketStartFeed());
    return () => {
      console.log('feed out')
      dispatch(getSocketClose())
    };
  }, [dispatch]);
  const orders = useSelector((state: any) => state.socket.data);
  console.log(orders)

  const ordersDoneFilter = useMemo(() => {
    return orders.orders?.reduce((acc: any, el: any) => {
      if (el.status === "done") {
        acc.push(el.number);
      }
      return acc;
    }, []);
  }, [orders]);

  const ordersNotDoneFilter = useMemo(() => {
    return orders.orders?.reduce((acc: any, el: any) => {
      if (el.status !== "done") {
        acc.push(el.number);
      }
      return acc;
    }, []);
  }, [orders]);

  return (
    <>
      {orders.orders?.length > 0 && (
        <main>
          <div className={appFeedStyle.wrapper}>
            <section className={appFeedStyle.section}>
              <h1 className={`mt-10 mb-5 ${appFeedStyle.main__title}`}>
                Лента заказов
              </h1>
              <FeedOrder />
            </section>
            <section className={appFeedStyle.section}>
              <div className={`mt-25 mb-15 ${appFeedStyle.flex}`}>
                <div className={appFeedStyle.list}>
                  <h3 className={`mb-6 ${appFeedStyle.title}`}>Готовы:</h3>
                  <ul className={appFeedStyle.ul}>
                    {ordersDoneFilter.map((el: any, i: any) => {
                      while (i < 5) {
                        return (
                          <li key={i} className="mb-2">
                            {el}
                          </li>
                        );
                      }
                    })}
                  </ul>
                </div>
                <div className={`${appFeedStyle.list}`}>
                  <h3 className={`mb-6 ${appFeedStyle.title}`}>В работе:</h3>
                  <ul className={appFeedStyle.ul}>
                    {ordersNotDoneFilter.map((el: any, i: any) => {
                      while (i < 5) {
                        return (
                          <li key={i} className="mb-2">
                            {el}
                          </li>
                        );
                      }
                    })}
                  </ul>
                </div>
              </div>
              <div className="mb-15 mt-15">
                <h3 className={appFeedStyle.title}>Выполнено за все время:</h3>
                <p className={appFeedStyle.neon}>{orders.total}</p>
              </div>
              <div className="mb-15">
                <h3 className={appFeedStyle.title}>Выполнено за сегодня:</h3>
                <p className={appFeedStyle.neon}>{orders.totalToday}</p>
              </div>
            </section>
          </div>
        </main>
      )}
    </>
  );
};

export default Feed;
