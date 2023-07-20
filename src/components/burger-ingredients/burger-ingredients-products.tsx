import appBurgerIngredientsStyle from "./burger-ingredients.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";
import { useSelector, useDispatch } from "../../services/types/types";
import {
  getIngredientInfo,
  setModalState,
} from "../../services/actions/ingredients-data";
import { Link, useLocation } from "react-router-dom";
import { FC } from "react";
import { TArray } from "../../services/reducers/constructor-data";

type Data = {
  elData: TArray;
};

const BurgerIngredientsProduct: FC<Data> = ({ elData }) => {
  const { data, loading, error } = useSelector((state) => state.constructor);

  const [, dragRef] = useDrag({
    type: "ingredient",
    item: elData,
  });

  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(getIngredientInfo(elData));
    dispatch(setModalState(true));
  };

  const location = useLocation();

  return (
    <div ref={dragRef}>
      <Link
        to={{ pathname: `/ingredients/${elData._id}`}}
        state={{ background: location }}
        className={appBurgerIngredientsStyle.card}
        onClick={openModal}
      >
        {loading && <h1>Загрузка...</h1>}
        {error && <h1>Произошла ошибка</h1>}
        {!loading &&
          !error &&
          data.length > 0 &&
          data.map((el) => {
            if (el.name === elData.name && el.qty > 0) {
              return (
                <div key={el._id} className={appBurgerIngredientsStyle.notice}>
                  {el.qty}
                </div>
              );
            }
          })}
        <img src={elData.image} alt="product image" />
        <div className={appBurgerIngredientsStyle.price}>
          <p>{elData.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p>{elData.name}</p>
      </Link>
    </div>
  );
};

export default BurgerIngredientsProduct;
