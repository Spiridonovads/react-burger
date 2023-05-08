import appStyles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { useState, useEffect } from 'react';
import { getData } from '../../api';



const App = () => {

  const [state, setState] = useState({ 
      data: [],
      error: false,
      loading: false,
    })
  
  useEffect(() => {
     getData()
     .then((data) => setState({data: data.data, error: false, loading: false }))
     .catch((err) => setState({ ...state, error: true }))
  }, [])

  const { data, loading, error } = state;

  return ( 
    <>
      <AppHeader/>
      <main>
        <div className={appStyles.wrapper}>
        {!loading && !error && data.length > 0 &&
             <>
             <BurgerIngredients data={data}/>
             <BurgerConstructor data={data}/>
             </>
          }
        </div>
      </main>
    </>
    )
}

export default App;