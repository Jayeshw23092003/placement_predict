import React, { useState } from 'react';

function CompanyForm({ isOpen, onClose }) {
  const [newCompany, setNewCompany] = useState({
    id: '',
    name: '',
    package: '',
    jobRole: '',
    jobDesc: '',
    deadline: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCompany({ ...newCompany, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/job", {
      method: "POST",
      headers :{
        "Content-Type" : "application/json" 
      },
      body : JSON.stringify(newCompany)
    })  

    onClose(); 
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Add New Company</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <input
              type="text"
              name="id"
              placeholder="ID"
              value={newCompany.id}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="text"
              name="name"
              placeholder="Company Name"
              value={newCompany.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="text"
              name="package"
              placeholder="Package"
              value={newCompany.package}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="text"
              name="jobRole"
              placeholder="Job Role"
              value={newCompany.jobRole}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="text"
              name="jobDesc"
              placeholder="Job Description"
              value={newCompany.jobDesc}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="date"
              name="deadline"
              placeholder="Deadline"
              value={newCompany.deadline}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mt-6 flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CompanyForm;