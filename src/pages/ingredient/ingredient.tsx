import { useSelector } from '../../services/types/types';
import { useLocation } from 'react-router-dom';
import IngredientDetails from '../../components/ingredient-details/ingredient-details';

const Ingredient = () => {
  const location = useLocation()

  const { modalState } = useSelector(state => state.ingredients);
  const {data} = useSelector(state => state.constructor);
  let ingredient: any

  if(!modalState && location.pathname.split('/')[2] && data){
    ingredient = data.find((el: any) => el._id === location.pathname.split('/')[2])
  }

  return (
		<main>
		<section className='mt-30'>
			<IngredientDetails ingredientRoute={ingredient}></IngredientDetails>
	</section>
	</main>
    )
} 

export default Ingredient;