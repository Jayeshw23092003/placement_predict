import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddCompanyForm from "./CompanyForm";
import Header from "./Header";
import Footer from "./Footer";
import ResponsiveAppBar from "./AppBar";
function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const data = [
    {
      id: 1,
      name: "Tech Innovators Inc.",
      description:
        "A leading tech company specializing in AI and machine learning solutions.",
      package: "$120,000",
      jobRole: "Software Engineer",
      jobDesc: "Develop and maintain cutting-edge AI algorithms.",
      deadline: "2023-12-15",
    },
    {
      id: 2,
      name: "Green Energy Solutions",
      description:
        "Pioneers in renewable energy technologies and sustainable practices.",
      package: "$95,000",
      jobRole: "Environmental Engineer",
      jobDesc: "Design and implement renewable energy systems.",
      deadline: "2023-11-30",
    },
    {
      id: 3,
      name: "HealthTech Labs",
      description:
        "Revolutionizing healthcare with innovative medical technologies.",
      package: "$110,000",
      jobRole: "Data Scientist",
      jobDesc: "Analyze healthcare data to improve patient outcomes.",
      deadline: "2023-12-10",
    },
    {
      id: 4,
      name: "FinTech Global",
      description:
        "Transforming the financial industry with blockchain and digital payment solutions.",
      package: "$130,000",
      jobRole: "Blockchain Developer",
      jobDesc: "Build secure and scalable blockchain applications.",
      deadline: "2023-12-20",
    },
    {
      id: 5,
      name: "EduTech Solutions",
      description:
        "Empowering education through technology and online learning platforms.",
      package: "$90,000",
      jobRole: "UX Designer",
      jobDesc: "Design intuitive and user-friendly educational tools.",
      deadline: "2023-11-25",
    },
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/job");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data.jobs)
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
      <ResponsiveAppBar></ResponsiveAppBar>
      <div className=" mx-20 mt-4 border-2 border-gray-600 p-8 shadow-2xl">
        <button
          onClick={() => setIsModalOpen(true)}
          className=" absolute right-40 top-12 mb-4 mt-2 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-gradient-to-r hover:from-red-400 hover:to-red-500 "
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

        <div className=" m-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
          {companies.map((company) => (
            <div
              key={company.id}
              className="relative m-10 max-w-80 transform rounded-lg border border-black bg-white p-6 shadow-sm transition-transform duration-300 hover:scale-105"
            >
              <div className="absolute left-0 right-0 top-0 h-1/5 rounded-t-lg bg-gradient-to-r from-cyan-600 to-cyan-600"></div>

              <div className="relative z-10">
                <h5 className="mb-5 text-[1.2rem] font-bold tracking-tight text-white">
                  {company.company_name}
                </h5>
                <p className="mb-3 text-sm font-normal text-gray-600">
                  {company.job_description}
                </p>

                <div className="space-y-2 text-sm text-gray-600">
                  <p className="text-sm text-gray-600">
                    <strong>Package:</strong> {company.package}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Job Role:</strong> {company.job_role}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Job Description:</strong> {company.job_description}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Deadline:</strong> {company.job_deadline}
                  </p>
                </div>

                <Link
                  to={`/company/${company.id}`}
                  className="mt-4 inline-flex items-center rounded-lg bg-cyan-500 px-3 py-2 text-center text-sm font-medium text-white hover:bg-cyan-600 focus:outline-none focus:ring-4 focus:ring-cyan-300"
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
      <Footer></Footer>
    </div>
  );
}
export default CompanyList;
