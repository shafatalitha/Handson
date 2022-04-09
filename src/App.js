import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Search from "./pages/Search";
import Trending from "./pages/trending";
import { Provider } from "react-redux";
import Store from "./Store";
import Navbar from "./pages/Navbar";
function App() {
  return (
    <Provider store={Store}>
      <Router>
      <Navbar/>
        <Switch>
          <Route path="/trending" component={Trending} />
          <Route path="/search" component={Search} />
        </Switch>
      </Router>
     
    </Provider>
  );
}

export default App;
