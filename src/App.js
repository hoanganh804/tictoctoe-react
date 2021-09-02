import "./App.css";
import TictoctoeApp from "./components/TictoctoeApp";
import "antd/dist/antd.css";
import Login from "./components/Login";
import { BrowserRouter as Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/tictoctoeapp" component={TictoctoeApp} />
      </Switch>
    </div>
  );
}

export default App;
