import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; 

function CompanyDetails() {
  const { id } = useParams(); 
  const [company, setCompany] = useState({name : "a", desc : "desc", website : "wens", founded : "2323", industry : "ssdd"});

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
    <div className="p-6 max-w-4xl mx-auto bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{company.name}</h1>
      <p className="text-gray-700 dark:text-gray-400 mb-4">{company.description}</p>
      <div className="space-y-4">
        <p><strong>Location:</strong> {company.location}</p>
        <p><strong>Industry:</strong> {company.industry}</p>
        <p><strong>Founded:</strong> {company.founded}</p>
        <p><strong>Website:</strong> <a href={company.website} className="text-blue-600 hover:underline">{company.website}</a></p>
      </div>
      <button
        onClick={() => alert(`Applying to ${company.name}`)} 
        className="mt-6 inline-flex items-center px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300"
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
  );
}

export default CompanyDetails;