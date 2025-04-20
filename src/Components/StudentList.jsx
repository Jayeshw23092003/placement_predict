import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import ResponsiveAppBar from "./AppBar";
import { Button } from "flowbite-react";
const StudentList = () => {
  const [students, setStudents] = useState([]);
  const shortlistStudents=async()=>{
    const id = parseInt(localStorage.getItem("company_id"), 10);
    console.log("Company ID is", id);
    const response = await fetch("http://localhost:5000/shortlistStudents", {
      method : "POST",
      headers : {
        "Content-Type" : "application/json" 
      },
      body : JSON.stringify({job_id:id})
    })
    if (!response.ok) throw new Error("Network response was not OK");
    const json = await response.json();
    const studentsData = json.shortlisted_students || [];
    const formatted = studentsData.map((s) => ({
      id: s.id,
      name: s.name,
      college_name: s.college_name,
      email: s.email,
    }));
    console.log("Shortlisted Students are ", formatted)
    setStudents(formatted);
  }
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        // 1. Correctly parse your company_id
        const id = parseInt(localStorage.getItem("company_id"), 10);
        console.log("Company ID is", id);

        // 2. Fetch once
        const response = await fetch("http://localhost:5000/company", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ job_id: id }),
        });
        if (!response.ok) throw new Error("Network response was not OK");

        const json = await response.json();
        const studentsData = json.students_applied || [];

        // 3. Map backend shape → UI shape
        const formatted = studentsData.map((s) => ({
          id: s.id,
          name: s.name,
          college_name: s.college_name,
          email: s.email,
        }));

        // 4. Set state once
        setStudents(formatted);
        console.log("Loaded students:", formatted);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <>
      <ResponsiveAppBar />
      <div className="pt-[3rem] pl-[3rem]">
      <Button
                onClick = {()=>shortlistStudents()}
                className="ml-4 inline-flex items-center rounded-lg bg-gray-600 font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300"
              >
                ShortList Students
              </Button>
      </div>
      <div className="p-6 flex justify-center">
        <div className="w-full max-w-3xl">
          <h1 className="text-2xl font-bold mb-6 text-gray-600 text-center">
            Registered Students
          </h1>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 px-4 text-left text-sm font-semibold uppercase border-r border-gray-200">
                    ID
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-semibold uppercase border-r border-gray-200">
                    Name
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-semibold uppercase border-r border-gray-200">
                    College Name
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-semibold uppercase">
                    Email
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {students.length > 0 ? (
                  students.map((student) => (
                    <tr
                      key={student.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="py-3 px-4 text-sm border-r border-gray-200">
                        <Link
                          to={`/students/${student.id}`}
                          className="text-gray-700 hover:text-gray-900"
                        >
                          {student.id}
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-sm border-r border-gray-200">
                        {student.name}
                      </td>
                      <td className="py-3 px-4 text-sm border-r border-gray-200">
                        {student.college_name}
                      </td>
                      <td className="py-3 px-4 text-sm">
                        {student.email}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} className="py-4 text-center text-gray-500">
                      No students registered yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StudentList;
