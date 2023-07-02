import appIngredientStyle from './ingredient.module.css'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import IngredientDetails from '../../components/ingredient-details/ingredient-details';

const Ingredient = () => {
  const location = useLocation()

  const { modalState } = useSelector((state: any) => state.ingredients);
  const {data} = useSelector((state: any) => state.constructor);
  let ingredient 

  if(!modalState && location.pathname.split('/')[2] && data){
    ingredient = data.find((el: {_id: string}) => el._id === location.pathname.split('/')[2])
  }

  return (
		ingredient &&
		<main>
		<section className={`mt-30 ${appIngredientStyle.section}`}>
			<IngredientDetails ingredientRoute={ingredient}></IngredientDetails>
	</section>
	</main>
    )
} 

export default Ingredient;