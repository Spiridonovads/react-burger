import appOrderDetailsStyle from "./order-details.module.css";
import { useSelector } from "../../services/types/types";

const OrderDetails = () => {
  const { data, loading, error } = useSelector(
    (state) => state.orderNumber
  );

  return (
    <div className={`pt-30 pb-30 ${appOrderDetailsStyle.wrapper}`}>
      {loading || (!data.number && <h1>Загрузка...</h1>)}
      {error && <h1>Произошла ошибка</h1>}
      {!loading && !error && (
        <p className={`mb-8 ${appOrderDetailsStyle.id}`}>{data.number}</p>
      )}
      <p className={`mb-15 ${appOrderDetailsStyle.id__text}`}>
        идентификатор заказа
      </p>
      <div className={`mb-15 ${appOrderDetailsStyle.img}`} />
      <div className={appOrderDetailsStyle.text}>
        <p className="mb-2">Ваш заказ начали готовить</p>
        <p>
          <span className={appOrderDetailsStyle.catching__text}>
            Дождитесь готовности на орбитальной станции
          </span>
        </p>
      </div>
    </div>
  );
};

export default OrderDetails;
