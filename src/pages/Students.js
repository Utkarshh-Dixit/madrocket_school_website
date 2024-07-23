import React from "react";

const Students = () => (
  <div className="p-8 max-w-6xl mx-auto bg-white shadow-lg rounded-lg">
    <h1 className="text-4xl font-bold mb-8 text-center text-blue-900">
      Student Life at Springdale
    </h1>

    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">
        Extracurricular Activities
      </h2>
      <ul className="list-disc list-inside text-lg text-gray-700">
        <li>Music</li>
        <li>Dance</li>
        <li>Drama</li>
        <li>Art</li>
        <li>Sports</li>
        <li>Robotics</li>
        <li>Debate Club</li>
        <li>Science Club</li>
      </ul>
    </section>

    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">
        Clubs and Societies
      </h2>
      <ul className="list-disc list-inside text-lg text-gray-700">
        <li>Literary Society</li>
        <li>Environmental Club</li>
        <li>Astronomy Club</li>
        <li>Coding Club</li>
      </ul>
    </section>

    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">
        Achievements
      </h2>
      <div className="space-y-4">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">John Smith</h3>
          <p className="text-lg text-gray-700">
            National Level Math Olympiad Winner
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">Sarah Lee</h3>
          <p className="text-lg text-gray-700">
            Gold Medalist in State Swimming Championship
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">
            Tech Innovators Club
          </h3>
          <p className="text-lg text-gray-700">
            Winners of Inter-School Robotics Competition
          </p>
        </div>
      </div>
    </section>

    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">
        Student Council
      </h2>
      <div className="space-y-4">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">President</h3>
          <p className="text-lg text-gray-700">Amy Parker, Grade 12</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">
            Vice President
          </h3>
          <p className="text-lg text-gray-700">Rajiv Mehta, Grade 11</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">Secretary</h3>
          <p className="text-lg text-gray-700">Lisa Wong, Grade 10</p>
        </div>
      </div>
    </section>
  </div>
);

export default Students;
