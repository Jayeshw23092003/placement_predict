
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { postData } from "../Controllers/ApiRequest";
import ResponsiveAppBar from "./AppBar";
import Footer from "./Footer";
function CompanyDetails() {
  const { id } = useParams();
  const [company, setCompany] = useState();


  const ApplyToCompany = async () => {
    const uidAndJobid = { job_id: company.id, user_id: id };

    try {
      const api_url = "http://localhost:5000/addUserToJob";
      const response = await postData(api_url, uidAndJobid);
      if (response.ok) {
        console.log("Data sent to backend");
        alert("Congratulations! You have successfully applied for the Job")
      }
    } catch (err) {
      alert(err);
      console.log(err);
    }
  };
  useEffect(() => {
    const fetchCompanyDetails = async () => {
      console.log("Hey")
      try {
        const response = await fetch(`http://localhost:5000/company?id=${id}`); 
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json_reponse = await response.json();
        console.log(json_reponse)
        setCompany(json_reponse.data);
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
      <div className="mx-auto mt-[4rem] min-h-screen max-w-4xl rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
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
        <button
          onClick={ApplyToCompany}
          className="mt-6 inline-flex items-center rounded-lg bg-green-600 px-4 py-2 font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300"
        >
          Apply Now
        </button>
        <Link
          to="/"
          className="ml-4 inline-flex items-center rounded-lg bg-gray-600 px-4 py-2 font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300"
        >
          Back to Companies
        </Link>

    </div>
    <Footer></Footer>
    </div>
  );
}

export default CompanyDetails;
