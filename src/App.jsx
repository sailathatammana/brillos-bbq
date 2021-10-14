import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AdminPage from "./pages/Admin/AdminPage";
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
          <Route exact path="/menu/:categoryID/:id" component={ProductPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route path="/admin" component={AdminPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
