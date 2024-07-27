import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./layouts/HomePage";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<Home />} />
          <Route path="detail">
            <Route path=":id" element={<Detail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
