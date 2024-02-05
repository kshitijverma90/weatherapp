
import './App.css';
import {BrowserRouter as Router, Switch, Route, Routes} from "react-router-dom";

import Login from './Login';
import Home from './Home';
import Header from './Header';
import { useEffect } from 'react';
import { auth } from './firebase';
import Users from './Users';
function App() {
  
    
  
    return (
      <Router>
        
      <div className="App">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
      <Route path="/">
      <Header />
      <Home />
      <Users />
      </Route>
      </Switch>
      </div>
      
      </Router>
  );
}

export default App;
