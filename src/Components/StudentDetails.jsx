import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import ResponsiveAppBar from "./AppBar";
const StudentDetails = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  const dummyStudents = [
    {
      id: 1,
      personal: {
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+1234567890",
        gender: "Male",
        category: "General",
      },
      academicDetails: {
        highestQualifications: "B.Tech",
        currentCGPA: "8.5",
        ssc: "90%",
        hsc: "85%",
        backlogs: "0",
        educationalGap: "No",
        branch: "Computer Science",
      },
      skillsAndCertifications: {
        programmingSkills: "JavaScript, Python",
        technicalSkills: "React, Node.js",
        certifications: "AWS Certified, Google Cloud",
        projects: "E-commerce Website, Chat Application",
        hackathonParticipation: "3",
      },
      workAndExperience: {
        internships: "2 internships completed",
        workExperience: "1 year at XYZ Corp",
        researchPublications: "2 papers published",
      },
      extracurricular: {
        softSkills: "Communication, Leadership",
        clubsAndSocieties: "Coding Club, Debate Society",
        sportsParticipation: "Football, Basketball",
      },
      preferences: {
        domain: "Software Development",
        location: "Bangalore",
        jobRole: "Full Stack Developer",
        salaryRange: "8-12 LPA",
      },
      behavioralAndPsychometric: {
        problemSolving: "Excellent",
        aptitudeTestScore: "85%",
        communicationSkills: "Good",
      },
    },
    {
      id: 2,
      personal: {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "+9876543210",
        gender: "Female",
        category: "OBC",
      },
      academicDetails: {
        highestQualifications: "M.Tech",
        currentCGPA: "9.0",
        ssc: "95%",
        hsc: "90%",
        backlogs: "1",
        educationalGap: "Yes",
        branch: "Information Technology",
      },
      skillsAndCertifications: {
        programmingSkills: "Java, Python",
        technicalSkills: "Spring Boot, SQL",
        certifications: "Oracle Certified, Microsoft Azure",
        projects: "Library Management System, Online Quiz Platform",
        hackathonParticipation: "2",
      },
      workAndExperience: {
        internships: "1 internship completed",
        workExperience: "6 months at ABC Corp",
        researchPublications: "1 paper published",
      },
      extracurricular: {
        softSkills: "Teamwork, Time Management",
        clubsAndSocieties: "Robotics Club, Literary Society",
        sportsParticipation: "Badminton",
      },
      preferences: {
        domain: "Data Science",
        location: "Pune",
        jobRole: "Data Analyst",
        salaryRange: "6-10 LPA",
      },
      behavioralAndPsychometric: {
        problemSolving: "Good",
        aptitudeTestScore: "80%",
        communicationSkills: "Excellent",
      },
    },
    {
      id: 3,
      personal: {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "+9876543210",
        gender: "Female",
        category: "OBC",
      },
      academicDetails: {
        highestQualifications: "M.Tech",
        currentCGPA: "9.0",
        ssc: "95%",
        hsc: "90%",
        backlogs: "1",
        educationalGap: "Yes",
        branch: "Information Technology",
      },
      skillsAndCertifications: {
        programmingSkills: "Java, Python",
        technicalSkills: "Spring Boot, SQL",
        certifications: "Oracle Certified, Microsoft Azure",
        projects: "Library Management System, Online Quiz Platform",
        hackathonParticipation: "2",
      },
      workAndExperience: {
        internships: "1 internship completed",
        workExperience: "6 months at ABC Corp",
        researchPublications: "1 paper published",
      },
      extracurricular: {
        softSkills: "Teamwork, Time Management",
        clubsAndSocieties: "Robotics Club, Literary Society",
        sportsParticipation: "Badminton",
      },
      preferences: {
        domain: "Data Science",
        location: "Pune",
        jobRole: "Data Analyst",
        salaryRange: "6-10 LPA",
      },
      behavioralAndPsychometric: {
        problemSolving: "Good",
        aptitudeTestScore: "80%",
        communicationSkills: "Excellent",
      },
    }
  ];

  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        setTimeout(() => {
          const foundStudent = dummyStudents.find((student) => student.id === parseInt(id));
          if (foundStudent) {
            setStudent(foundStudent);
          } else {
            throw new Error("Student not found");
          }
        }, 1000);
      } catch (error) {
        console.error("Error fetching student details:", error);
      }
    };

    fetchStudentDetails();
  }, [id]);

  if (!student) {
    return <div className="p-6 text-gray-700 text-center">Loading...</div>;
  }


  const renderSection = (title, data, emoji) => {
    return (
      <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-600">
        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
          {emoji} {title}
        </h2>
        <div className="space-y-4">
          {Object.entries(data).map(([key, value]) => (
            <div key={key} className="flex items-center gap-4 border-b border-gray-200 dark:border-gray-600 pb-2">
              <p className="text-sm font-semibold text-gray-900 dark:text-white w-1/3 capitalize">
                {key.replace(/([A-Z])/g, " $1").trim()}
              </p>
              <p className="text-sm text-gray-900 dark:text-white flex-1">{value}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <><ResponsiveAppBar />
    <div className="p-6 flex justify-center">
      <div className="w-full max-w-6xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 ">
          🎓 Student Details
        </h1>
        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="text-center pb-6">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              🆔 Student ID: {student.id}
            </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {renderSection("Personal Details", student.personal, "👤")}
            {renderSection("Academic Details", student.academicDetails, "📚")}
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {renderSection("Skills and Certifications", student.skillsAndCertifications, "💻")}
            {renderSection("Work and Experience", student.workAndExperience, "💼")}
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {renderSection("Extracurricular Activities", student.extracurricular, "🏅")}
            {renderSection("Preferences", student.preferences, "📍")}
          </div>

          <div className="mb-6">
            {renderSection("Behavioral and Psychometric", student.behavioralAndPsychometric, "🧠")}
          </div>

          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-600 mb-6">
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              🛠️ Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {student.skillsAndCertifications.programmingSkills
                .split(", ")
                .map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
            </div>
          </div>


          <div className="text-center">
            <a
              href={student.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 bg-blue-200 text-blue-800 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
            >
              📄 Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footer/>

    </>
  );
};

export default StudentDetails;