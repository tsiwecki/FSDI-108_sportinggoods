import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "font-awesome/css/font-awesome.min.css";

import Footer from "./components/footer";
import NavBar from "./components/navBar";
import Catalog from "./components/catalog";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";

function App() {
  return (
    <BrowserRouter>
      <div className="App">

         <NavBar></NavBar>
        <h1>Sporting Goods</h1>

        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" exact component={About}></Route>          
          <Route path="/catalog" exact component={Catalog}></Route>
        </Switch>

        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
