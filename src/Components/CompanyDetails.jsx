import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; 
import Footer from "./Footer";
import ResponsiveAppBar from "./AppBar";
function CompanyDetails() {
  const { id } = useParams(); 
  const [company, setCompany] = useState({ name: "a", description: "desc", website: "wens", founded: "2323", industry: "ssdd", location: "Unknown" });

  useEffect(() => {
    const fetchCompanyDetails = async () => {
      try {
        const response = await fetch(`https://localhost/companies/${id}`); // Replace with your backend API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCompany(data); 
      } catch (error) {
        console.error('Error fetching company details:', error);
      }
    };

    fetchCompanyDetails();
  }, [id]);

  if (!company) {
    return <div>Loading...</div>; 
  }

  return (
    <>
    <ResponsiveAppBar></ResponsiveAppBar>
    <div className="p-6 mt-12 max-w-4xl mx-auto bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <h1 className="text-3xl font-bold text-white mb-4">{company.name}</h1>
      <p className="text-white mb-4">{company.description}</p>
      <div className="space-y-4">
        <p><strong className="text-white">Location:</strong> <span className="text-white">{company.location}</span></p>
        <p><strong className="text-white">Industry:</strong> <span className="text-white">{company.industry}</span></p>
        <p><strong className="text-white">Founded:</strong> <span className="text-white">{company.founded}</span></p>
        <p><strong className="text-white">Website:</strong> <a href={company.website} className="text-blue-400 hover:underline">{company.website}</a></p>
      </div>
      <button
        onClick={() => alert(`Applying to ${company.name}`)} 
        className="mt-6 inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300"
      >
        Apply Now
      </button>
      <Link
        to="/" 
        className="ml-4 inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300"
      >
        Back to Companies
      </Link>
    </div>
    <Footer></Footer>
    </>
  );
}

export default CompanyDetails;