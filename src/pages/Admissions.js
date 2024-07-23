import React from "react";

const Admissions = () => (
  <div className="p-8 max-w-5xl mx-auto bg-white shadow-lg rounded-lg">
    <h1 className="text-4xl font-bold mb-8 text-center text-blue-900">
      Admissions
    </h1>

    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">
        Admission Process
      </h2>
      <p className="text-lg text-gray-700 mb-4">
        Admission forms are available for download. Submit the completed form
        along with required documents at the school office.
      </p>
      <a
        href="/path-to-admission-form.pdf"
        download
        className="inline-block bg-blue-600 text-white text-lg font-semibold py-2 px-6 rounded-lg shadow hover:bg-blue-700 transition duration-300"
      >
        Download Admission Form
      </a>
    </section>

    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">
        Admission Criteria
      </h2>
      <p className="text-lg text-gray-700">
        Admission is based on merit and availability of seats. Entrance tests
        may be conducted for certain grades.
      </p>
    </section>

    <section>
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">
        Important Dates
      </h2>
      <ul className="list-disc pl-5 text-lg text-gray-700">
        <li>
          <strong>Admission Form Availability:</strong> March 1st
        </li>
        <li>
          <strong>Last Date for Submission:</strong> March 31st
        </li>
        <li>
          <strong>Entrance Test:</strong> April 15th
        </li>
        <li>
          <strong>Announcement of Results:</strong> April 30th
        </li>
      </ul>
    </section>
  </div>
);

export default Admissions;
