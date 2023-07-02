import appIngredientStyle from './ingredient.module.css'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import AppHeader from '../../components/app-header/app-header';

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
		<>
		<AppHeader/>
		<main>
		<section className={appIngredientStyle.section}>
			<div className={`mt-20 ${appIngredientStyle.wrapper}`}>
			<div className={`mb-8 ${appIngredientStyle.details}`}>
				Детали ингредиента
			</div>
				<img alt='product image' src={ingredient.image_large} className={appIngredientStyle.img}/>
				<p className={`mb-8 mt-4 ${appIngredientStyle.name}`}>{ingredient.name}</p>
				<div className={appIngredientStyle.info}>
					<div className={`mr-5 ${appIngredientStyle.text}`}>
						Калории,ккал
						<span>{ingredient.calories}</span>
					</div>
					<div className={`mr-5 ${appIngredientStyle.text}`}>
						Белки, г
						<span>{ingredient.proteins}</span>
					</div>
					<div className={`mr-5 ${appIngredientStyle.text}`}>
						Жиры, г
						<span>{ingredient.fat}</span>
					</div>
					<div className={appIngredientStyle.text}>
						Углеводы, г
						<span>{ingredient.carbohydrates}</span>
					</div>
				</div>
	</div>
	</section>
	</main>
	</>
    )
} 

export default Ingredient;