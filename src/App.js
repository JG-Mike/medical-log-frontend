import "./componets/css/Index.css"
import Students from "./componets/Students";
import Staff from "./componets/Staff";
import Login from "./componets/Login";
import Home from "./componets/Home";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';




function App() {
  return (
    <Router>
    <nav className="nav">
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
      

           <Routes>
                  <Route exact path='/home' element={<Home/>}></Route>
                 <Route  path='/login' element={< Login />}></Route>
                 <Route  path='/students' element={< Students />}></Route>
                 <Route  path='/staff' element={< Staff />}></Route>
          </Routes>
    </div>
    </nav>
    </Router>
  );
}

export default App;
