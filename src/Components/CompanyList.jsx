import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AddCompanyForm from './CompanyForm'; 
import Header from './Header'
function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const data= [
    {
      "id": 1,
      "name": "Tech Innovators Inc.",
      "description": "A leading tech company specializing in AI and machine learning solutions.",
      "package": "$120,000",
      "jobRole": "Software Engineer",
      "jobDesc": "Develop and maintain cutting-edge AI algorithms.",
      "deadline": "2023-12-15"
    },
    {
      "id": 2,
      "name": "Green Energy Solutions",
      "description": "Pioneers in renewable energy technologies and sustainable practices.",
      "package": "$95,000",
      "jobRole": "Environmental Engineer",
      "jobDesc": "Design and implement renewable energy systems.",
      "deadline": "2023-11-30"
    },
    {
      "id": 3,
      "name": "HealthTech Labs",
      "description": "Revolutionizing healthcare with innovative medical technologies.",
      "package": "$110,000",
      "jobRole": "Data Scientist",
      "jobDesc": "Analyze healthcare data to improve patient outcomes.",
      "deadline": "2023-12-10"
    },
    {
      "id": 4,
      "name": "FinTech Global",
      "description": "Transforming the financial industry with blockchain and digital payment solutions.",
      "package": "$130,000",
      "jobRole": "Blockchain Developer",
      "jobDesc": "Build secure and scalable blockchain applications.",
      "deadline": "2023-12-20"
    },
    {
      "id": 5,
      "name": "EduTech Solutions",
      "description": "Empowering education through technology and online learning platforms.",
      "package": "$90,000",
      "jobRole": "UX Designer",
      "jobDesc": "Design intuitive and user-friendly educational tools.",
      "deadline": "2023-11-25"
    }
  ]
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://your-backend-api.com/companies');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCompanies(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSaveCompany = async (newCompany) => {
    try {
      const response = await fetch('https://your-backend-api.com/companies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCompany),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setCompanies([...companies, data]);
    } catch (error) {
      console.error('Error saving company:', error);
    }
  };

  return (
    <div>
     <Header></Header>
    <div className=" p-8 mt-4 border-2 mx-20 border-gray-600 shadow-2xl">
        
      <button
        onClick={() => setIsModalOpen(true)}
        className=" text-sm bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-red-400 hover:to-red-500 transition-all duration-300 absolute top-12 right-40 mt-2 mb-4 ">

        Add Company
      </button>

      
      {isModalOpen && (
    <div className="mb-6">
      <AddCompanyForm isOpen={isModalOpen} 
       onClose={() => setIsModalOpen(false)}
       onSave={handleSaveCompany} />
    </div>
  )}


      <div className=" m-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {data.map((company) => (
          <div
          key={company.id}
          className="relative max-w-80 p-6 m-10 bg-white border border-black rounded-lg shadow-sm transform transition-transform duration-300 hover:scale-105"
        >
          
          <div className="absolute top-0 left-0 right-0 h-1/5 bg-gradient-to-r from-cyan-600 to-cyan-600 rounded-t-lg"></div>

          
          <div className="relative z-10">
            <h5 className="mb-5 text-[1.2rem] font-bold tracking-tight text-white">{company.name}</h5>
            <p className="mb-3 text-sm font-normal text-gray-600">{company.description}</p>
            
            
            <div className="space-y-2 text-sm text-gray-600">
              <p className="text-gray-600 text-sm"><strong>Package:</strong> {company.package}</p>
              <p  className="text-gray-600 text-sm"><strong>Job Role:</strong> {company.jobRole}</p>
              <p  className="text-gray-600 text-sm"><strong>Job Description:</strong> {company.jobDesc}</p>
              <p  className="text-gray-600 text-sm"><strong>Deadline:</strong> {company.deadline}</p>
            </div>

            
            <Link
              to={`/company/${company.id}`}
              className="mt-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-cyan-300"
            >
              Explore
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </Link>
          </div>
        </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default CompanyList;