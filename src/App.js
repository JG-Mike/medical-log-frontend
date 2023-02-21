import "./componets/css/Index.css"
import Students from "./componets/Students";
import Staff from "./componets/Staff";
import Login from "./componets/Login";
import Home from "./Home";
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
          <Link className="routeLink"  to={'/'}>Login</Link>
        </li>
        <li>
          <Link className="routeLink"  to={'/students'}>Students</Link>
        </li>
          <li>
          <Link className="routeLink"  to={'/staff'}>Staff</Link>
        </li>
           <li>
          <Link className="routeLink"  to={'/home'}>Home</Link>
        </li>
      </ul>
      

           <Routes>
                 <Route exact path='/' element={< Login />}></Route>
                 <Route  path='/students' element={< Students />}></Route>
                 <Route  path='/staff' element={< Staff />}></Route>
                 <Route  path='/home' element={<Home/>}></Route>
          </Routes>
    </div>
    </nav>
    </Router>
  );
}

export default App;
