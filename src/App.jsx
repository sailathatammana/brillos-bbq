import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import "./styles/style.scss";

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/menu" component={MenuPage} />
          <Route exact path="/menu/:categoryID" component={CategoryPage} />
          <Route
            exact
            path="/menu/:categoryID/:productID"
            component={ProductPage}
          />
          <Route exact path="/contact" component={ContactPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
