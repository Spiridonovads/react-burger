import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCookie } from '../../utile/cookie';
import { FC } from 'react';

type State = { element: any };

export const ProtectedRouteElementNotAuth: FC<State> = ({ element }) => {
  return !getCookie('refreshToken') ? element : <Navigate to="/profile" replace/>;
} 

export const ProtectedRouteElementAuth: FC<State> = ({ element }) => {
  return getCookie('refreshToken') ? element : <Navigate to="/login" replace/>;
} 

export const ProtectedRouteElementReset: FC<State> = ({ element }) => {
  const { data } = useSelector((state: any) => state.forgot)
  return data.success ? element : <Navigate to="/forgot-password" replace/>;
} 
