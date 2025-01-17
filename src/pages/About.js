import React from "react";

const About = () => (
  <div className="p-8 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
    <h1 className="text-4xl font-bold mb-8 text-center text-blue-900">
      About Us
    </h1>

    <section className="mb-8">
      <h2 className="text-3xl font-semibold mb-4 text-gray-800">History</h2>
      <p className="text-lg text-gray-700">
        Founded in 1985, Springdale Public School has been dedicated to
        providing quality education and holistic development to students.
      </p>
    </section>

    <section className="mb-8">
      <h2 className="text-3xl font-semibold mb-4 text-gray-800">Vision</h2>
      <p className="text-lg text-gray-700">
        To create a learning environment that fosters academic excellence,
        critical thinking, and ethical values.
      </p>
    </section>

    <section className="mb-8">
      <h2 className="text-3xl font-semibold mb-4 text-gray-800">Mission</h2>
      <p className="text-lg text-gray-700">
        To empower students with the knowledge, skills, and values needed to
        thrive in a dynamic world.
      </p>
    </section>

    <section className="mb-8">
      <h2 className="text-3xl font-semibold mb-4 text-gray-800">
        Principal's Message
      </h2>
      <p className="text-lg text-gray-700">
        At Springdale, we believe in nurturing the potential of every student
        and guiding them towards a successful future.
      </p>
    </section>

    <section>
      <h2 className="text-3xl font-semibold mb-4 text-gray-800">
        Infrastructure and Facilities
      </h2>
      <ul className="list-disc pl-5 text-lg text-gray-700">
        <li>State-of-the-art science and computer labs</li>
        <li>Spacious and well-equipped classrooms</li>
        <li>Library with a vast collection of books and digital resources</li>
        <li>
          Sports facilities including a playground, gymnasium, and swimming pool
        </li>
      </ul>
    </section>
  </div>
);

export default About;
