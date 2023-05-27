import appIngredientsDetailsStyle from './ingredient-details.module.css';
import { useSelector } from 'react-redux';

const IngredientDetails = () => {
  
  const {ingredient} = useSelector(state => state.ingredients);

    return (
        <div className={appIngredientsDetailsStyle.wrapper}>
            <div className={`mb-8 ${appIngredientsDetailsStyle.details}`}>
              Детали ингредиента
            </div>
              <img src={ingredient[0].image_large} className={appIngredientsDetailsStyle.img}/>
              <p className={`mb-8 mt-4 ${appIngredientsDetailsStyle.name}`}>{ingredient[0].name}</p>
              <div className={appIngredientsDetailsStyle.info}>
                <div className={`mr-5 ${appIngredientsDetailsStyle.text}`}>
                  Калории,ккал
                  <span>{ingredient[0].calories}</span>
                </div>
                <div className={`mr-5 ${appIngredientsDetailsStyle.text}`}>
                  Белки, г
                  <span>{ingredient[0].proteins}</span>
                </div>
                <div className={`mr-5 ${appIngredientsDetailsStyle.text}`}>
                  Жиры, г
                  <span>{ingredient[0].fat}</span>
                </div>
                <div className={appIngredientsDetailsStyle.text}>
                  Углеводы, г
                  <span>{ingredient[0].carbohydrates}</span>
                </div>
              </div>
        </div>
    )
} 

export default IngredientDetails;