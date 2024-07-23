import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSent, setFormSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-900">
        Contact Us
      </h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          <strong>Address:</strong> Springdale Public School, 123 Education
          Lane, Cityville, State, ZIP Code
        </p>
        <p className="text-lg text-gray-700 mb-4">
          <strong>Phone:</strong> +1 (123) 456-7890
        </p>
        <p className="text-lg text-gray-700 mb-4">
          <strong>Email:</strong>{" "}
          <a
            href="mailto:info@springdale.edu"
            className="text-blue-600 hover:underline"
          >
            info@springdale.edu
          </a>
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Contact Form
        </h2>
        {formSent ? (
          <p className="text-lg text-green-700">
            Thank you! Your message has been sent.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-800 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-800 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-800 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Send Message
            </button>
          </form>
        )}
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Our Location
        </h2>
        <div className="relative w-full h-96 mb-8">
          <iframe
            title="Google Maps Location"
            className="absolute inset-0 w-full h-full rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2491.1759418091065!2d-0.13502828431535585!3d51.52205757963713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b43a09e40ef%3A0x1b5c57ac77968d0!2s123%20Education%20Lane%2C%20Cityville%2C%20State%2C%20ZIP%20Code!5e0!3m2!1sen!2sus!4v1677853169571!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
