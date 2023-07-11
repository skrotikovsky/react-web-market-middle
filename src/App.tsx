import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/main-page/main-page";
import {AppRoute} from "./consts";
import Details from "./pages/details/details";
import Page404 from "./pages/page404/page404";
import Basket from "./pages/basket/basket";
import {observer} from "mobx-react-lite";

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path={AppRoute.MAIN}>
            <Route index element={<MainPage/>}/>
          <Route path={AppRoute.DETAILS} element={<Details/>}/>
          <Route path={AppRoute.BASKET} element={<Basket/>}/>
        </Route>
        <Route path={'*'} element={<Page404/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default observer(App);
