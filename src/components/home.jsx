import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "font-awesome/css/font-awesome.min.css";

import Footer from "./components/footer";
import Home from "./components/home";
import NavBar from "./components/navBar";

function App() {
  return (
    <div className="Home">
      <Home></Home>

      <NavBar></NavBar>

      <h1>Under Construction</h1>

      <Footer></Footer>
    </div>
  );
}

export default App;
