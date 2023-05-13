import appIngredientsDetailsStyle from './ingredient-details.module.css';
import { useContext } from 'react';
import { DataContext } from '../../context/app-context';



const IngredientDetails = () => {
  
  const {data} = useContext(DataContext);

    return (
        <div className={appIngredientsDetailsStyle.wrapper}>
            <div className={`mb-8 ${appIngredientsDetailsStyle.details}`}>
              Детали ингредиента
            </div>
              <img src={data[0].image} className={appIngredientsDetailsStyle.img}/>
              <p className={`mb-8 mt-4 ${appIngredientsDetailsStyle.name}`}>{data[0].name}</p>
              <div className={appIngredientsDetailsStyle.info}>
                <div className={`mr-5 ${appIngredientsDetailsStyle.text}`}>
                  Калории,ккал
                  <span>{data[0].calories}</span>
                </div>
                <div className={`mr-5 ${appIngredientsDetailsStyle.text}`}>
                  Белки, г
                  <span>{data[0].proteins}</span>
                </div>
                <div className={`mr-5 ${appIngredientsDetailsStyle.text}`}>
                  Жиры, г
                  <span>{data[0].fat}</span>
                </div>
                <div className={appIngredientsDetailsStyle.text}>
                  Углеводы, г
                  <span>{data[0].carbohydrates}</span>
                </div>
              </div>
        </div>
    )
} 



export default IngredientDetails;