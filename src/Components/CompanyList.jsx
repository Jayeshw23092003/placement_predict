import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddCompanyForm from "./CompanyForm";
import Header from "./Header";
import Footer from "./Footer";
import ResponsiveAppBar from "./AppBar";

function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/job");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data.jobs);
        setCompanies(Array.from(data.jobs));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSaveCompany = async (newCompany) => {
    try {
      const response = await fetch("http://localhost:5000/job", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCompany),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setCompanies([...companies, data]);
    } catch (error) {
      console.error("Error saving company:", error);
    }
  };

  return (
    <div>
      <ResponsiveAppBar />

      <div className="mx-20 mt-4 rounded-lg border-2 border-gray-300 bg-blue-950 p-8 shadow-2xl">
        <button
          onClick={() => setIsModalOpen(true)}
          className="absolute right-40 top-3 mb-4 mt-2 rounded-lg bg-gradient-to-r from-blue-900 to-blue-950 px-4 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-800 hover:to-blue-900"
        >
          Add Company
        </button>

        {isModalOpen && (
          <div className="mb-6">
            <AddCompanyForm
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
          </div>
        )}

        
        <div className="m-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
          {companies.map((company) => (
            <div
              key={company.id}
              className="relative transform rounded-lg border border-gray-200 bg-white p-6 shadow-lg transition-transform duration-300 hover:scale-105"
            >
           
              <div className="absolute left-0 right-0 top-0 h-1/5 rounded-t-lg bg-gradient-to-r from-sky-600 to-sky-700"></div>

        
              <div className="relative z-10">
                <h5 className="mb-5 text-[1.2rem] font-bold tracking-tight text-white">
                  {company.company_name}
                </h5>
                <p className="mb-3 text-sm font-normal text-gray-600">
                  {company.job_description}
                </p>

                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <strong>Package:</strong> {company.package_offered}
                  </p>
                  <p>
                    <strong>Job Role:</strong> {company.job_role}
                  </p>
                  <p>
                    <strong>Job Description:</strong> {company.job_description}
                  </p>
                  <p>
                    <strong>Deadline:</strong> {company.job_deadline}
                  </p>
                </div>

                <Link
                  to={`/company/${company.id}`}
                  className="mt-4 inline-flex items-center rounded-lg bg-sky-600 px-3 py-2 text-center text-sm font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-4 focus:ring-cyan-300"
                >
                  Explore
                  <svg
                    className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CompanyList;