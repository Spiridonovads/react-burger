import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCookie } from '../../utile/cookie';

export const ProtectedRouteElementNotAuth = ({ element }) => {
  return !getCookie('refreshToken') ? element : <Navigate to="/profile" replace/>;
} 

export const ProtectedRouteElementAuth = ({ element }) => {
  return getCookie('refreshToken') ? element : <Navigate to="/login" replace/>;
} 

export const ProtectedRouteElementReset = ({ element }) => {
  const { data } = useSelector(state => state.forgot)
  return data.success ? element : <Navigate to="/forgot-password" replace/>;
} 
