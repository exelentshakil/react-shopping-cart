import React,{useContext} from 'react';
// Components

import Nav from './components/Nav'
import About from './components/About'
import Contact from './components/Contact'
import Shop from './components/Shop'
import Home from './components/Home'
import Cart from './components/Cart'

// Router

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// Contexts

import {ProductProvider} from './contexts/ProductContext'
// css
import './App.css'


const App = () => {

  return (
    <div className="app-container">
      <ProductProvider>
        <Router>
          <Nav />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/cart" exact component={Cart} />

          </Switch>

        </Router>
      </ProductProvider>
    </div>
  )


}

export default App;
