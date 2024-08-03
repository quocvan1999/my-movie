import { BrowserRouter, Routes, Route } from "react-router-dom";

import { store } from "./redux/store";
import { Provider } from "react-redux";

import HomePage from "./layouts/HomePage";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import StreamVideo from "./pages/StreamVideo";
import ViewResult from "./pages/ViewResult";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route index element={<Home />} />
            <Route path="detail">
              <Route path=":id" element={<Detail />} />
            </Route>
            <Route path="streamvideo">
              <Route path=":id" element={<StreamVideo />} />
            </Route>
            <Route path="viewresult">
              <Route path=":keyUrl" element={<ViewResult />} />
              <Route path=":keyUrl" element={<ViewResult />} />
              <Route path=":keyUrl" element={<ViewResult />} />
              <Route path=":keyUrl" element={<ViewResult />} />
              <Route path=":keyUrl" element={<ViewResult />} />
            </Route>
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
