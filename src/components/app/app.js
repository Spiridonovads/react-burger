import appStyles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { useState, useEffect } from 'react';
import { getIngredientsData } from '../../utile/api';
import { DataContext } from '../../context/app-context.js';
import { checkResponse } from '../../utile/res-ok';



const App = () => {

  const [dataState, setDataState] = useState({ 
      data: [],
      error: false,
      loading: false,
    })
  
  useEffect(() => {
     setDataState({...dataState, loading: true})
     getIngredientsData()
     .then((res) => checkResponse(res))
     .then((data) => setDataState({...dataState, data: data.data, error: false, loading: false }))
     .catch(() => setDataState({ ...dataState, loading: false, error: true }))
  }, [])

  const { data, loading, error } = dataState;

  return ( 
    <>
     {loading && <h1>Загрузка...</h1>}
     {error && <h1>Произошла ошибка</h1>}
     {!loading && !error && data.length > 0 &&
     <>
        <AppHeader/>
        <main>
          <div className={appStyles.wrapper}>
                <DataContext.Provider value={{data}}>
                    <BurgerIngredients/>
                    <BurgerConstructor/>
                </DataContext.Provider>
          </div>
        </main>
      </>
      }
    </>
    )
}

export default App;