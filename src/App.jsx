import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./layouts/HomePage";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import StreamVideo from "./pages/StreamVideo";
import ViewResult from "./pages/ViewResult";

function App() {
  return (
    <BrowserRouter>
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
            <Route path="viewall" element={<ViewResult />} />
            <Route path="phimbo" element={<ViewResult />} />
            <Route path="phimle" element={<ViewResult />} />
            <Route path="tvshow" element={<ViewResult />} />
            <Route path="hoathinh" element={<ViewResult />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
