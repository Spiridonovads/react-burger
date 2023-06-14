import BurgerSectors from '../burger-sectors/burger-sectors';
import { useEffect } from 'react';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useSelector, useDispatch } from 'react-redux';
import { getIngredients } from '../../services/actions/ingredients-data';
import { getConstructorIngredients } from '../../services/actions/constructor-data';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginScreen from '../../pages/login-screen/login-screen';
import RegisterScreen from '../../pages/register-screen/register-screen';
import ForgotPassword from '../../pages/forgot-password/forgot-password';
import ResetPassword from '../../pages/reset-password/reset-password';
import Profile from '../../pages/profile/profile';
import NotFound from '../../pages/not-found/not-found';
import { ProtectedRouteElementAuth, ProtectedRouteElementNotAuth, ProtectedRouteElementReset } 
from '../protected-route-element/protected-route-element';
import Ingredient from '../../pages/ingredient/ingredient';
import { err, forgot, home, ingredients, login, profile, register, reset } from '../../utile/routes';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getIngredients());
      dispatch(getConstructorIngredients());
    },[dispatch]);

  const { data, loading, error } = useSelector(state => state.ingredients);
  const { modalState } = useSelector(state => state.ingredients);
  
  return ( 
     <>
     {loading && <h1>Загрузка...</h1>}
     {error && <h1>Произошла ошибка</h1>}
     {!loading && !error && data.length > 0 &&
     <>
      <DndProvider backend={HTML5Backend}>
        <BrowserRouter>
          <Routes>
             <Route path={home} element={<BurgerSectors/>}>
             {modalState &&
              <Route path={ingredients}/> }
             </Route>
              {!modalState &&
              <Route path={ingredients} element={<Ingredient/>}/>
              }
             <Route path={login} element={<ProtectedRouteElementNotAuth element={<LoginScreen/>}/>}/>
             <Route path={register} element={<ProtectedRouteElementNotAuth element={<RegisterScreen/>}/>}/>
             <Route path={forgot} element={<ProtectedRouteElementNotAuth element={<ForgotPassword/>}/>}/>
             <Route path={reset} element={<ProtectedRouteElementReset element={<ResetPassword/>}/>} />
             <Route path={profile} element={<ProtectedRouteElementAuth element={<Profile/>}/>}/>
             <Route path={err} element={<NotFound/>} />            
          </Routes>
        </BrowserRouter>
      </DndProvider>
    </>
    }
    </>
    )
}

export default App;