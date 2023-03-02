import React, { Component } from 'react'
import Home from '../home/Home';
import Login from '../login/Login';
import Staff from '../patients/Staff';
import Students from '../patients/Students';
import './Navbar.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';

class Navbar extends Component{

    state = {clicked: false};
    handleClick = () => {
     this.setState({clicked:!this.state.clicked})
    }
    render() {
  return (
    <Router>
    <nav >
      <a href="/">
      <img src="images/logoipsum-280.svg" alt="" /></a>
      <div>
      <ul
      id='navbar' className={this.state.clicked ? '#navbar active' :'#navbar'}
       > <li>
         <Link className="routeLink"  to={'/home'}>Home</Link>
        </li>
         <li>
           <Link className="routeLink"  to={'/login'}>Login</Link>
        </li>
        <li>
          <Link className="routeLink"  to={'/students'}>Students</Link>
        </li>
          <li>
          <Link className="routeLink"  to={'/staff'}>Staff</Link>
        </li>
      </ul>
      </div>
      <div className="mobile" onClick={this.handleClick}>
        <i id='bar'
        className={this.state.clicked? "fas fa-times" : "fas fa-bars"}
        ></i>
      </div>
    </nav>
           <Routes>
                  <Route exact path='/home' element={<Home/>}></Route>
                 <Route  path='/login' element={< Login />}></Route>
                 <Route  path='/students' element={< Students />}></Route>
                 <Route  path='/staff' element={< Staff />}></Route>
          </Routes>
    
    </Router>
    )
}
}

export default Navbar;