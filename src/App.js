import "./App.css";

import { Switch, Route } from "react-router-dom";
import Home from "./pages";
import SigninHome from "./pages/signin";
function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninHome} exact />
      </Switch>
    </>
  );
}

export default App;
