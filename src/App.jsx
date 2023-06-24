import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.scss";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Error404 from "./pages/404";
import PrivateRoute from "./utils/PrivateRoute";
import PreventRouteLogin from "./utils/PreventRouteLogin";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <PreventRouteLogin>
              <Login />
            </PreventRouteLogin>
          }
        />
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
