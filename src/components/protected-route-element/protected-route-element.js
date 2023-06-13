import { Navigate } from 'react-router-dom';
import { getCookie } from '../../utile/cookie';
import { useSelector } from 'react-redux';

export const ProtectedRouteElementNotAuth = ({ element }) => {
  const auth = getCookie('accessToken')
  return !auth ? element : <Navigate to="/profile" replace/>;
} 

export const ProtectedRouteElementAuth = ({ element }) => {
  const auth = getCookie('accessToken')
  return auth ? element : <Navigate to="/login" replace/>;
} 

export const ProtectedRouteElementReset = ({ element }) => {
  const { data } = useSelector(state => state.forgot)
  return data.success ? element : <Navigate to="/forgot-password" replace/>;
} 
