import appBurgerConstructorStyle from "./burger-constructor.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerConstructorOrder from "./burger-constructor-order";
import { useMemo, useState, useEffect } from "react";
import { useSelector, useDispatch } from "../../services/types/types";
import BurgerConstructorScrollElement from "./burger-constructor-scroll-element";
import { Reorder } from "framer-motion";
import { constructorOrderSort } from "../../services/actions/constructor-data";
import { TArray } from "../../services/reducers/constructor-data";

const BurgerConstructorElements = () => {
  const { order } = useSelector((state) => state.constructor);

  const dispatch = useDispatch();

  const burgerBunsFilter = useMemo<Array<TArray>>(() => {
    return order.filter((el) => el.type === "bun");
  }, [order]);

  const burgerFillingFilter = useMemo<Array<TArray>>(() => {
    return order.filter((el) => el.type != "bun");
  }, [order]);

  const total = useMemo<number>(() => {
    return order.reduce((sum: number, current) => sum + current.price, 0);
  }, [burgerBunsFilter, burgerFillingFilter]);

  const [items, setItems] = useState<Array<TArray>>(burgerFillingFilter);

  useEffect(() => {
    setItems(burgerFillingFilter);
  }, [burgerFillingFilter]);

  useEffect(() => {
    dispatch(constructorOrderSort([...burgerBunsFilter, ...items]));
  }, [items]);

  return (
    <>
      {order && (
        <>
          {burgerBunsFilter.map((el) => {
            return (
              <div key={el._id} className="pl-8">
                <ConstructorElement
                  type="top"
                  text={`${el.name} (верх)`}
                  price={el.price}
                  thumbnail={el.image}
                  isLocked={true}
                />
              </div>
            );
          })}
          <Reorder.Group axis="y" values={items} onReorder={setItems}>
            <div className={appBurgerConstructorStyle.scroll}>
              {items.map((el) => {
                return (
                  <BurgerConstructorScrollElement key={el.uniqueId} data={el} />
                );
              })}
            </div>
          </Reorder.Group>
          {burgerBunsFilter.map((el) => {
            return (
              <div key={el._id} className="pl-8">
                <ConstructorElement
                  type="bottom"
                  text={`${el.name} (низ)`}
                  price={el.price}
                  thumbnail={el.image}
                  isLocked={true}
                />
              </div>
            );
          })}
          <BurgerConstructorOrder total={total} />
        </>
      )}
    </>
  );
};

export default BurgerConstructorElements;
