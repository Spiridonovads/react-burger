import BurgerIngredients  from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import burgerSectorsStyles from './burger-sectors.module.css'

const BurgerSectors = () => {
  return ( 
        <main className={burgerSectorsStyles.wrapper}>
          <BurgerIngredients/>
          <BurgerConstructor/>
        </main>
    )
}

export default BurgerSectors;