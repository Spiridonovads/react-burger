import appStyles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { useState, useEffect } from 'react';



const App = () => {

  const dataUrl = "https://norma.nomoreparties.space/api/ingredients";

  const [state, setState] = useState({ 
      data: [],
      error: false,
      loading: false,
    })
  
  const getData = async() => {
     setState({ ...state, error: false, loading: true });
     let res;
     try {
      res = await fetch(dataUrl)
     }
     catch(err) {
        alert('Произошла ошибка')
     }
     const data = await res.json();
     setState({data: data.data, error: false, loading: false });
  }

  useEffect(() => {
     getData()
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