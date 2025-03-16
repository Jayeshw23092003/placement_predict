import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const dummyData = [
          {
            id: 1,
            name: "John Doe",
            collegeName: "ABC University",
          },
          {
            id: 2,
            name: "Jane Smith",
            collegeName: "XYZ College",
          },
          {
            id: 3,
            name: "Alice Johnson",
            collegeName: "PQR Institute",
          },
        ];

        // Simulate API delay
        setTimeout(() => {
          setStudents(dummyData);
        }, 1000);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, []);

  return (
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
  );
};

export default StudentList;