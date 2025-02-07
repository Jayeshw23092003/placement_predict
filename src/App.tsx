import Landing from "./Components/Landing.jsx";
import Team from "./Components/Team.jsx"
import Contact from "./Components/Contact.jsx"
import Registration from "./Components/Registration.jsx"
import Login from "./Components/Login.jsx"
import {Route, Routes, BrowserRouter as Router} from "react-router-dom"
function App() {
  return (
    <div>
    
      <Router>
        <Routes>
          <Route path = "/" element = {<Landing></Landing>}></Route>
          <Route path = "/about" element = {<Team></Team>}></Route>
          <Route path = "/contact" element = {<Contact></Contact>}></Route>
          <Route path = "/registration" element = {<Registration></Registration>}></Route>
          <Route path = "/login" element = {<Login></Login>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
