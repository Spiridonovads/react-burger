import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCookie } from '../../utile/cookie';
import { FC } from 'react';

type State = { element: any };

export const ProtectedRouteElementNotAuth: FC<State> = ({ element }) => {
  const location = useLocation()
  const from = location.state?.from || '/'
  return !getCookie('refreshToken') ? element : <Navigate to={from} replace/>;
} 

export const ProtectedRouteElementAuth: FC<State> = ({ element }) => {
  const location = useLocation()
  return getCookie('refreshToken') ? element : <Navigate to='/login' replace state={{from: location}}/>;
} 

export const ProtectedRouteElementReset: FC<State> = ({ element }) => {
  const { data } = useSelector((state: any) => state.forgot)
  return data.success ? element : <Navigate to="/forgot-password" replace/>;
} 

