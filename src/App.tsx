import Landing from "./Components/Landing.jsx";
import Team from "./Components/Team.jsx"
import Contact from "./Components/Contact.jsx"
import Registration from "./Components/Registration.jsx"
import Login from "./Components/Login.jsx"
import UploadResume from "./Components/UploadResume.jsx"
import Profile from "./Components/Profile.jsx"
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
          <Route path = "/resume" element = {<UploadResume></UploadResume>}></Route>
          <Route path = "/all_companies" element = {<UploadResume></UploadResume>}></Route>
          <Route path = "/profile" element = {<Profile></Profile>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
