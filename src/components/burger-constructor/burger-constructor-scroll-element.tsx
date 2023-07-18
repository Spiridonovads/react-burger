import appBurgerConstructorStyle from "./burger-constructor.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Reorder } from "framer-motion";
import { useDispatch } from "../../services/types/types";
import { deleteItem } from "../../services/actions/constructor-data";
import { FC } from "react";

type Data = {
  data: {
    _id: string;
    uniqueId: string;
    name: string;
    price: number;
    image: string;
  };
};

const BurgerConstructorScrollElement: FC<Data> = ({ data }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteItem(data));
  };

  return (
    <Reorder.Item value={data}>
      <div className={appBurgerConstructorStyle.element}>
        <DragIcon type="primary" />
        <ConstructorElement
          text={data.name}
          price={data.price}
          thumbnail={data.image}
          handleClose={handleDelete}
        />
      </div>
    </Reorder.Item>
  );
};

export default BurgerConstructorScrollElement;
