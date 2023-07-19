import { useSelector } from "../../services/types/types";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import { useLocation, useParams } from "react-router-dom";

const Ingredient = () => {
  const { data } = useSelector((state) => state.constructor);

  let ingredient: object | undefined;
  const params = useParams();

  ingredient = data?.find((el: any) => el._id === Object.values(params)[0]);

  return (
    <main>
      <section className="mt-30">
        <IngredientDetails ingredientRoute={ingredient}></IngredientDetails>
      </section>
    </main>
  );
};

export default Ingredient;
