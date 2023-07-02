import BurgerIngredients  from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import AppHeader from '../app-header/app-header';
import burgerSectorsStyles from './burger-sectors.module.css'

const BurgerSectors = () => {
  return ( 
     <>
      <AppHeader/>
        <main className={burgerSectorsStyles.wrapper}>
          <BurgerIngredients/>
          <BurgerConstructor/>
        </main>
	
    </>
    )
}

export default BurgerSectors;