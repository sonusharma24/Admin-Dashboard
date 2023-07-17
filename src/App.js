import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/index";
import Login from "./pages/login/index";
import List from "./pages/list/index";
import New from "./pages/new/index";
import Single from "./pages/single/index";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
