import './App.css';
import FirstPage from './components/firstPage';
import SecondPage from './components/secondPage';
import ThirdPage from './components/thirdPage';
import Footer from './components/footer';
import Header from './components/header';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App(){

return (
    <div className="app">
      <div className="content">
       <Router>
        <Header/>
        <Switch>
        <Route exact path='/' component={FirstPage}/>
        <Route path='/second' component={SecondPage}/>
        <Route path='/third' component={ThirdPage}/>
        </Switch>
        <Footer/>
      </Router>
      </div>
    </div>
  );
}
  

export default App;
