import appStyles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients  from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { useEffect } from 'react';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useSelector, useDispatch } from 'react-redux';
import { getIngredients } from '../../services/actions/ingredients-data';
import { getConstructorIngredients } from '../../services/actions/constructor-data';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getIngredients());
      dispatch(getConstructorIngredients());
    },[dispatch]);

  const { data, loading, error } = useSelector(state => state.ingredients);
  
  return ( 
    <>
     {loading && <h1>Загрузка...</h1>}
     {error && <h1>Произошла ошибка</h1>}
     {!loading && !error && data.length > 0 &&
     <>
        <AppHeader/>
          <main className={appStyles.wrapper}>
            <DndProvider backend={HTML5Backend}>
                    <BurgerIngredients/>
                    <BurgerConstructor/>
            </DndProvider>
          </main>
      </>
      }
    </>
    )
}

export default App;