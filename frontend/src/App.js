import React from 'react';
import { BrowserRouter, Router, Route, link, Link } from 'react-router-dom';
import ProductScreen from './Screen/ProductScreen';
import HomeScreen from './Screen/HomeScreen';
import CartScreen from './Screen/CartScreen';
import SigninScreen from './Screen/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './Screen/RegisterScreen';

const App = () => {

  const userSign=useSelector(state=>state.UserSignInfo);
  console.log(userSign,"userSign");

  const {userInfo}=userSign;
  console.log(userSign,"userSigninfo");


  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closebutton = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>
              &#9776;
          </button>
            <Link to="/" >amazona</Link>
          </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>
             {userInfo ?<Link to="/profile">{userInfo.name}</Link>:
                <Link to="/signin" >Sign In</Link>
                }
          </div>
        </header>
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="cross_button_section" onClick={closebutton}>x</button>
          <ul>
            <li>
              <a href="index.html">pant</a>
            </li>
            <li>
              <a href="index.html">pant</a>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id" component={CartScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </main>
        <footer className="footer">
          All right reserved.
      </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
