import "./App.css";
import TictoctoeApp from "./components/TictoctoeApp";
import "antd/dist/antd.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/tictoctoe-react/" component={Login} />
          <Route
            exact
            path="/tictoctoe-react/tictoctoeapp"
            component={TictoctoeApp}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
