import './App.css';
import FirstPage from './components/firstPage';
import SecondPage from './components/secondPage';
import ThirdPage from './components/thirdPage';
import Footer from './components/footer';
import Header from './components/header';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import React from 'react';

function App() {
  /*document.addEventListener('touchstart', handleTouchStart, false)
  document.addEventListener('touchmove', handleTouchMove, false)

  const app = document.querySelector("mainContent")

  let x1 = null
  let y1 = null 
  let rightCount = 0;
  let leftCount = 0;


  function handleTouchStart(event){
    let firstTouch = event.touches[0]
    x1=firstTouch.clientX;
    y1=firstTouch.clientY;
    console.log(x1,y1)
  }

  function handleTouchMove(event){
    if(!x1 || !y1){
      return false;
    }
    let x2 = event.touches[0].clientX
    let y2 = event.touches[0].clientY
    let xDif = x2 - x1
    let yDif = y2 - y1
    if(Math.abs(xDif) > Math.abs(yDif)){
      if(xDif > 0){
       rightCount++
      }
      else{
        leftCount++
      }
      }
      if(leftCount>50){
          window.location.assign(`http://localhost:3000/${""}`)

      }
      if(rightCount>50){
        
          window.location.assign(`http://localhost:3000/${""}`)


    }
  }
x1 = null
y1 = null 
*/
  return (
    <div className="app">
      <div className="content">
       <BrowserRouter>
        <Header/>
        <Switch>
        <Route exact path='/' component={FirstPage}/>
        <Route path='/second' component={SecondPage}/>
        <Route path='/third' component={ThirdPage}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
