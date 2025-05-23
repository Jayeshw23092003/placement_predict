import Landing from "./Components/Landing.jsx";
import Team from "./Components/Team.jsx"
import Contact from "./Components/Contact.jsx"
import Registration from "./Components/Registration.jsx"
import Login from "./Components/Login.jsx"
import UploadResume from "./Components/UploadResume.jsx"
import Profile from "./Components/Profile.jsx"
import CompanyList from "./Components/CompanyList.jsx"
import CompanyDetails from './Components/CompanyDetails.jsx';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import StudentList from "./Components/StudentList.jsx";
import StudentDetails from "./Components/StudentDetails.jsx";
import ResponsiveAppBar from "./Components/AppBar.jsx";
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
          <Route path = "/students_profile" element = {<UploadResume></UploadResume>}></Route>
          <Route path = "/profile" element = {<Profile></Profile>}></Route>
          <Route path = "/companies_dashboard" element = {<CompanyList/>}></Route> 
          <Route path = "/users_dashboard" element = {<CompanyList/>}></Route> 
         <Route path="/company/:id" element={<CompanyDetails />}></Route>
         <Route path="/students" element={<StudentList />} />
          <Route path="/students/:id" element={<StudentDetails />} />
         <Route path="/navbar" element={<ResponsiveAppBar />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
