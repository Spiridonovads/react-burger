import BurgerSectors from '../burger-sectors/burger-sectors';
import { useEffect } from 'react';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useSelector, useDispatch } from '../../services/types/types';
import { getIngredients } from '../../services/actions/ingredients-data';
import { getConstructorIngredients } from '../../services/actions/constructor-data';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginScreen from '../../pages/login-screen/login-screen';
import RegisterScreen from '../../pages/register-screen/register-screen';
import ForgotPassword from '../../pages/forgot-password/forgot-password';
import ResetPassword from '../../pages/reset-password/reset-password';
import Profile from '../../pages/profile/profile';
import NotFound from '../../pages/not-found/not-found';
import { ProtectedRouteElementReset, ProtectedRouteElement } 
from '../protected-route-element/protected-route-element';
import Ingredient from '../../pages/ingredient/ingredient';
import { err, forgot, home, ingredients, login, profile, register, reset, feed, feedID } from '../../utile/routes';
import AppHeader from '../app-header/app-header';
import Feed from '../../pages/feed/feed';
import FeedOrderPage from '../../pages/feed-order/feed-order';
import { getFeed } from '../../services/actions/feed-data';

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getIngredients());
      dispatch(getConstructorIngredients());
      dispatch(getFeed());
    },[dispatch]);

  const { data, loading, error }= useSelector(state => state.ingredients);

  const { modalState} = useSelector(state => state.ingredients);
  const feedModalState = useSelector(state => state.feed.modalState);
  
  return ( 
     <>
     {loading && <h1>Загрузка...</h1>}
     {error && <h1>Произошла ошибка</h1>}
     {!loading && !error && data.length > 0 &&
     <>
      <DndProvider backend={HTML5Backend}>
        <BrowserRouter>
        <AppHeader/>
          <Routes>
             <Route path={home} element={<BurgerSectors/>}>
             {modalState &&
              <Route path={ingredients}/> }
             </Route>
              {!modalState &&
              <Route path={ingredients} element={<Ingredient/>}/>
              }
             <Route path={login} element={<ProtectedRouteElement element={<LoginScreen/>} auth={false}/>}/>
             <Route path={register} element={<ProtectedRouteElement element={<RegisterScreen/>} auth={false}/>}/>
             <Route path={forgot} element={<ProtectedRouteElement element={<ForgotPassword/>} auth={false}/>}/>
             <Route path={reset} element={<ProtectedRouteElementReset element={<ResetPassword/>}/>} />
             <Route path={profile} element={<ProtectedRouteElement element={<Profile/>} auth={true}/>}></Route>
             <Route path={err} element={<NotFound/>} />            
             <Route path={feed} element={<Feed/>} > 
              { feedModalState &&
                <Route path={feedID} />}    
              </Route>      
              {!feedModalState &&
                <Route path={feedID} element={<FeedOrderPage/>}/>
              }
             <Route path={`${profile}/orders`} element={<ProtectedRouteElement element={<Profile/>} auth={true}/>}>
             { feedModalState &&
                <Route path={`${profile}/orders/:id`} />}    
              </Route>      
              {!feedModalState &&
                <Route path={`${profile}/orders/:id`} element={<ProtectedRouteElement element={<FeedOrderPage/>} auth={true}/>}/>
              }                   
          </Routes>
        </BrowserRouter>
      </DndProvider>
    </>
    }
    </>
    )
}

export default App;