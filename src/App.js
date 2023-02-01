// import Navbar from "./componets/Navbar";
import '../src/css/Index.css'
import Students from "./componets/Students";
import Staff from "./componets/Staff";
import Login from "./componets/Login";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';




function App() {
  return (
    <Router>
    <div className="App">
      <div>
      <ul>
        <li>
          <Link to={'/'}>Logins2</Link>
        </li>
        <li>
          <Link to={'/students'}>Students</Link>
        </li>
          <li>
          <Link to={'/staff'}>Staff</Link>
        </li>
      </ul>

           <Routes>
                 <Route exact path='/' element={< Login />}></Route>
                 <Route  path='/students' element={< Students />}></Route>
                 <Route  path='/staff' element={< Staff />}></Route>
          </Routes>
    </div>
    </div>
    </Router>
  );
}

export default App;
