import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/login/Login";
import NotFound from "./components/NotFound/NotFound";
import OrderReview from "./components/OrderReview/OrderReview";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import Shop from "./components/Shop/Shop";
import AuthProvider from "./context/AuthProvider";
import initFirebaseApp from "./firebase/init.firebase";
import Footer from "./components/footer/Footer";
import ProductDetails from "./components/ProductDetails/ProductDetails";

initFirebaseApp();
function App() {
  return (
    <AuthProvider>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Shop />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/review">
            <OrderReview />
          </Route>
          <Route path="/product/details/:key">
            <ProductDetails />
          </Route>
          <Route path="/inventory">
            <Inventory />
          </Route>
          <Route path="/placeorder">
            <PlaceOrder />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
