import React from 'react'
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

function Navbar() {
  return (
    <Router>
    <nav >
      <div className="navbarRoutes">
      <ul>
        <li>
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

export default Navbar