import { useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useSelector, useDispatch } from "../../services/types/types";
import { getIngredients } from "../../services/actions/ingredients-data";
import { getConstructorIngredients } from "../../services/actions/constructor-data";
import { BrowserRouter } from "react-router-dom";
import AppHeader from "../app-header/app-header";
import AppRoute from "../app-route/app-route";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
    dispatch(getConstructorIngredients());
  }, [dispatch]);

  const { data, loading, error } = useSelector((state) => state.ingredients);

  return (
    <>
      {loading && <h1>Загрузка...</h1>}
      {error && <h1>Произошла ошибка</h1>}
      {!loading && !error && data.length > 0 && (
        <>
          <DndProvider backend={HTML5Backend}>
            <BrowserRouter basename="/react-burger">
              <AppHeader />
              <AppRoute />
            </BrowserRouter>
          </DndProvider>
        </>
      )}
    </>
  );
};

export default App;
