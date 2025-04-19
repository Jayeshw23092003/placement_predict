import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useParams, Link } from "react-router-dom";
import { postData } from "../Controllers/ApiRequest";
import ResponsiveAppBar from "./AppBar";
import Footer from "./Footer";
import { Button } from "flowbite-react";
function CompanyDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [company, setCompany] = useState();
  const [actor, setActor] = useState(0);
  const [students, setStudents] = useState();
  const shortListStudents=async()=>{
    const data = {job_id : company.id, max_students : 1}
    const api_url = "http://localhost:5000/shortlistStudents"
    const response = await postData(api_url, data);
    console.log(response)
  }

  const goBack=()=>
  {
    navigate(-1);
  }
  const ApplyToCompany = async () => {
    const user_id = localStorage.getItem("user_id");
    
    const uidAndJobid = { job_id: id, user_id:user_id};

    try {
      const api_url = "http://localhost:5000/addUserToJob";
      const response = await postData(api_url, uidAndJobid);
      
        console.log("Data sent to backend", response);
        alert("Congratulations! You have successfully applied for the Job")
      
    } catch (err) {
      alert(err);
      console.log(err);
    }
  };
  useEffect(() => {
    const actor = localStorage.getItem("actor");
    console.log(actor)
    setActor(actor)
    const fetchCompanyDetails = async () => {
      console.log("Hey")
      try {
        const response = await fetch(`http://localhost:5000/company?id=${id}`); 
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json_reponse = await response.json();
        console.log(json_reponse)
        setCompany(json_reponse);
      } catch (error) {
        console.error("Error fetching company details:", error);
      }
    }
    fetchCompanyDetails();
  }, []);

  if (!company) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      
       
      <ResponsiveAppBar></ResponsiveAppBar>
      <div className="mx-auto mt-[4rem] min-h-screen max-w-4xl rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700">
        <h1 className="mb-4 text-3xl font-bold text-white-900 dark:text-black">
          {company.company_name}
        </h1>
        <p className="mb-4 pt-[1rem] text-gray-700 dark:text-gray-400">
          {company.job_description}
        </p>
        <div className="space-y-4">
          <p>
            <strong>Package Offered:</strong> {company.package_offered}
          </p>
          <p>
            <strong>Job Role:</strong> {company.job_role}
          </p>
          <p>
            <strong>Job Deadline:</strong> {company.deadline}
          </p>
        </div>
        {actor === "true" ? <button
          onClick={shortListStudents}
          className="mt-6 inline-flex items-center rounded-lg bg-green-600 px-4 py-2 font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300"
        >
          Shortlist Students
        </button> : <button
          onClick={ApplyToCompany}
          className="mt-6 inline-flex items-center rounded-lg bg-green-600 px-4 py-2 font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300"
        >
          Apply Now
        </button>}
        <Button
          onClick = {()=>goBack()}
          className="ml-4 inline-flex items-center rounded-lg bg-gray-600 font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300"
        >
          Back to Companies
        </Button>

    </div>
    <Footer></Footer>
    </div>
  );
}

export default CompanyDetails;
