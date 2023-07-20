import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "../../services/types/types";
import { getCookie } from "../../utile/cookie";
import { FC } from "react";

type State = { element: any; auth?: boolean };

export const ProtectedRouteElementReset: FC<State> = ({ element }) => {
  const { data } = useSelector((state) => state.forgot);
  return data.success ? element : <Navigate to="/forgot-password" replace />;
};

export const ProtectedRouteElement: FC<State> = ({ element, auth }) => {
  const location = useLocation();
  const from = location.state?.from || "/";
  if (auth) {
    return getCookie("refreshToken") ? (
      element
    ) : (
      <Navigate to="/login" replace state={{ from: location }} />
    );
  } else {
    return !getCookie("refreshToken") ? (
      element
    ) : (
      <Navigate to={from} replace />
    );
  }
};
