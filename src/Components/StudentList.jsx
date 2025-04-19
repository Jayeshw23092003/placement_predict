import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import ResponsiveAppBar from "./AppBar";
const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const id = localStorage.getItem("company_id");
        const response = await fetch(`http://localhost:5000/registered_students?id=${id}`);
        let json_response;
        if(response)
        {
          json_response = await response.json();
          setStudents(json_response.data);
        }
        else
        {
          alert("No Students are registered for this")
        }
        
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <><ResponsiveAppBar />
    <div className="p-6 flex justify-center">
      <div className="w-full max-w-3xl">
        <h1 className="text-2xl font-bold mb-6 text-gray-600 text-center">
          Registered Students
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-semibold text-white uppercase border-r border-gray-200">
                  ID
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-white uppercase border-r border-gray-200">
                  Name
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-white uppercase">
                  College Name
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 text-sm text-gray-700 border-r border-gray-200">
                    <Link
                      to={`/students/${student.id}`}
                      className="text-gray-700 hover:text-gray-900"
                    >
                      {student.id}
                    </Link>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700 border-r border-gray-200">
                    {student.name}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {student.collegeName}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <Footer/>

    </>
  );
};

export default StudentList;