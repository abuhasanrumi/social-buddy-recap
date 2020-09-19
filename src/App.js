import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Error from './Components/Error/Error';
import InsidePost from './Components/InsidePost/InsidePost';

function App() {
  return (
    <div className="body">
      <Header/>
      <Router>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/posts/:id">
            <InsidePost/>
          </Route>
          <Route path="*">
            <Error/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
