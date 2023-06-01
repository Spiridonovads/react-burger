import appStyles from './app.module.css';
import AppHeader from '../app-header/app-header';
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
          <BrowserRouter>
            <Routes>
             <Route path="/" element={<BurgerSectors/>} />
             <Route path="/login" element={<LoginScreen/>} />
             <Route path="/register" element={<RegisterScreen/>} />
             <Route path="/forgot-password" element={<ForgotPassword/>} />
             <Route path="/reset-password" element={<ResetPassword/>} />
             <Route path="/profile" element={<Profile/>} />
            </Routes>
          </BrowserRouter>
        </DndProvider>
      </main>
      </>
      }
    </>
    )
}

export default App;