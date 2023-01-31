// import Navbar from "./componets/Navbar";
import '../src/css/Index.css'
import Students from "./componets/Students";
import Staff from "./componets/Staff";
import Login from "./componets/Login";
import { BrowserRouter as Router,Route} from "react-router-dom";





function App() {
  return (
    <div className="App">
{/* < Navbar/> */}
<Router>
  <Route componet ={Students} path='/students'exact/>
</Router>

    </div>
  );
}

export default App;
