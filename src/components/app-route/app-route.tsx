import BurgerSectors from "../burger-sectors/burger-sectors";
import { useEffect } from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import LoginScreen from "../../pages/login-screen/login-screen";
import RegisterScreen from "../../pages/register-screen/register-screen";
import ForgotPassword from "../../pages/forgot-password/forgot-password";
import ResetPassword from "../../pages/reset-password/reset-password";
import Profile from "../../pages/profile/profile";
import NotFound from "../../pages/not-found/not-found";
import {
  ProtectedRouteElementReset,
  ProtectedRouteElement,
} from "../protected-route-element/protected-route-element";
import Ingredient from "../../pages/ingredient/ingredient";
import {
  err,
  forgot,
  home,
  ingredients,
  login,
  profile,
  register,
  reset,
  feed,
  feedID,
} from "../../utile/routes";
import Feed from "../../pages/feed/feed";
import FeedOrderPage from "../../pages/feed-order/feed-order";
import { useSelector } from "../../services/types/types";


const AppRoute = () => {
  const location = useLocation();
  let background = location.state?.background;
  const {modalState} = useSelector((state) => state.ingredients);
  console.log(modalState)

  return (
    <Routes location={background || location}>
      <Route path={home} element={<BurgerSectors />}>
        {background && <Route path={ingredients} />}
      </Route>
      {!modalState
      }
      <Route path={ingredients} element={<Ingredient />}/> 
      <Route
        path={login}
        element={
          <ProtectedRouteElement element={<LoginScreen />} auth={false} />
        }
      />
      <Route
        path={register}
        element={
          <ProtectedRouteElement element={<RegisterScreen />} auth={false} />
        }
      />
      <Route
        path={forgot}
        element={
          <ProtectedRouteElement element={<ForgotPassword />} auth={false} />
        }
      />
      <Route
        path={reset}
        element={<ProtectedRouteElementReset element={<ResetPassword />} />}
      />
      <Route
        path={profile}
        element={<ProtectedRouteElement element={<Profile />} auth={true} />}
      ></Route>
      <Route path={err} element={<NotFound />} />
      <Route path={feed} element={<Feed />}>
        {background && <Route path={feedID} />}
      </Route>
      <Route path={feedID} element={<FeedOrderPage />} />
      <Route
        path={`${profile}/orders`}
        element={<ProtectedRouteElement element={<Profile />} auth={true} />}
      >
        {background && <Route path={`${profile}/orders/:id`} />}
      </Route>
      <Route
        path={`${profile}/orders/:id`}
        element={
          <ProtectedRouteElement element={<FeedOrderPage />} auth={true} />
        }
      />
    </Routes>
  );
};

export default AppRoute;
