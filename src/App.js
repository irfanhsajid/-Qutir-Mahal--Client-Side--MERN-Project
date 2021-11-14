import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login-Register/Login/Login';
import Register from './Pages/Login-Register/Register/Register';
import NotFound from './Pages/Error404/Notfound';
import AuthProvider from './Pages/Login-Register/Contexts/AuthProvider';
import AllProducts from './Pages/Products/AllProducts/AllProducts';
import PrivateRoute from './Pages/Login-Register/PrivateRoute/PrivateRoute';
import ProductDetails from './Pages/Products/ProductDetails/ProductDetails';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute exact path='/products'>
              <AllProducts></AllProducts>
            </PrivateRoute>
            <Route exact path="/productDetails/:productId">
              <ProductDetails></ProductDetails>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='/register'>
              <Register></Register>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
