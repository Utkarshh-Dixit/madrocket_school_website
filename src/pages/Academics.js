import React from "react";

const Academics = () => (
  <div className="p-8 max-w-5xl mx-auto bg-white shadow-lg rounded-lg">
    <h1 className="text-4xl font-bold mb-8 text-center text-blue-900">
      Academics
    </h1>

    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">Curriculum</h2>

      <div className="mb-8">
        <h3 className="text-2xl font-medium text-gray-800">
          Primary (Grades 1-5)
        </h3>
        <p className="text-lg text-gray-700">
          English, Mathematics, Science, Social Studies, Art, Physical Education
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-medium text-gray-800">
          Secondary (Grades 6-10)
        </h3>
        <p className="text-lg text-gray-700">
          English, Mathematics, Science (Physics, Chemistry, Biology), Social
          Studies, Computer Science, Physical Education, Art
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-medium text-gray-800">
          Senior Secondary (Grades 11-12)
        </h3>
        <p className="text-lg text-gray-700">
          <strong>Science Stream:</strong> Physics, Chemistry, Biology,
          Mathematics, Computer Science, English
        </p>
        <p className="text-lg text-gray-700">
          <strong>Commerce Stream:</strong> Accountancy, Business Studies,
          Economics, Mathematics, English
        </p>
      </div>
    </section>

    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">
        Teaching Methodologies
      </h2>
      <p className="text-lg text-gray-700">
        We use a blend of traditional and modern teaching techniques to cater to
        different learning styles.
      </p>
    </section>

    <section>
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">
        Educational Resources
      </h2>
      <p className="text-lg text-gray-700">
        Digital classrooms, interactive learning modules, and access to online
        educational platforms.
      </p>
    </section>
  </div>
);

export default Academics;
