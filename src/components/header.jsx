import {Link } from 'react-router-dom';
import React from 'react';


function Header(){
return(<div className="homeButtonContent">
          <div className="homeButton">
          <Link to='/'>🏠</Link> | PROJECT
          </div>
        </div>)
}
export default Header;
