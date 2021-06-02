import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "font-awesome/css/font-awesome.min.css";

import Footer from "./components/footer";
import NavBar from "./components/navBar";
import Catalog from "./components/catalog";


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1>Sporting Goods</h1>
      
     
      <Catalog></Catalog>
      

      <Footer></Footer>
    </div>
  );
}

export default App;


