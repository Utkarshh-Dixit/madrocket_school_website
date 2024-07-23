import React from "react";

const facultyMembers = [
  {
    name: "John Doe",
    position: "Principal",
    qualification: "M.Ed",
    experience: "20 years of experience in educational administration",
    photo: "https://via.placeholder.com/150?text=John+Doe",
  },
  {
    name: "Jane Smith",
    position: "Vice Principal",
    qualification: "M.Sc. in Physics",
    experience: "15 years of teaching experience",
    photo: "https://via.placeholder.com/150?text=Jane+Smith",
  },
  {
    name: "Emily Johnson",
    position: "English Teacher",
    qualification: "M.A. in English",
    experience: "10 years of teaching experience",
    photo: "https://via.placeholder.com/150?text=Emily+Johnson",
  },
  {
    name: "Michael Brown",
    position: "Mathematics Teacher",
    qualification: "M.Sc. in Mathematics",
    experience: "8 years of teaching experience",
    photo: "https://via.placeholder.com/150?text=Michael+Brown",
  },
  {
    name: "Sophia Davis",
    position: "Science Teacher",
    qualification: "M.Sc. in Chemistry",
    experience: "12 years of teaching experience",
    photo: "https://via.placeholder.com/150?text=Sophia+Davis",
  },
  {
    name: "David Wilson",
    position: "Computer Science Teacher",
    qualification: "B.Tech in Computer Science",
    experience: "5 years of teaching experience",
    photo: "https://via.placeholder.com/150?text=David+Wilson",
  },
];

const Faculty = () => (
  <div className="p-8 max-w-6xl mx-auto bg-white shadow-lg rounded-lg">
    <h1 className="text-4xl font-bold mb-8 text-center text-blue-900">
      Meet Our Faculty
    </h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {facultyMembers.map((member) => (
        <div
          key={member.name}
          className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center"
        >
          <img
            src={member.photo}
            alt={member.name}
            className="w-32 h-32 rounded-full mb-4 object-cover"
          />
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            {member.name}
          </h2>
          <p className="text-lg text-gray-700">{member.position}</p>
          <p className="text-md text-gray-600">{member.qualification}</p>
          <p className="text-md text-gray-600">{member.experience}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Faculty;
