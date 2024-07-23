import React, { useState } from "react";

const galleryItems = [
  {
    type: "photo",
    src: "sports_day.jpg",
    description: "Students participating in various sports events.",
  },
  {
    type: "photo",
    src: "science_exhibition.jpg",
    description: "Students presenting their science projects.",
  },
  {
    type: "photo",
    src: "cultural_fest.jpg",
    description: "Students performing in the cultural fest.",
  },
  {
    type: "photo",
    src: "classroom.jpg",
    description: "A glimpse of our interactive classrooms.",
  },
  {
    type: "photo",
    src: "library.jpg",
    description: "Students reading and studying in the school library.",
  },
  {
    type: "video",
    src: "school_tour.mp4",
    description: "Virtual tour of Springdale Public School.",
  },
  {
    type: "video",
    src: "annual_function.mp4",
    description: "Highlights from the Annual Function 2023.",
  },
];

const Gallery = () => {
  const [filter, setFilter] = useState("all");

  const filteredItems =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.type === filter);

  return (
    <div className="p-8 max-w-6xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-900">
        Gallery
      </h1>

      <div className="mb-8 text-center">
        <button
          className={`px-4 py-2 mx-2 font-semibold text-white bg-blue-500 rounded-lg ${
            filter === "all" ? "bg-blue-700" : "hover:bg-blue-600"
          }`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`px-4 py-2 mx-2 font-semibold text-white bg-green-500 rounded-lg ${
            filter === "photo" ? "bg-green-700" : "hover:bg-green-600"
          }`}
          onClick={() => setFilter("photo")}
        >
          Photos
        </button>
        <button
          className={`px-4 py-2 mx-2 font-semibold text-white bg-red-500 rounded-lg ${
            filter === "video" ? "bg-red-700" : "hover:bg-red-600"
          }`}
          onClick={() => setFilter("video")}
        >
          Videos
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((item, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
            {item.type === "photo" ? (
              <img
                src={item.src}
                alt={item.description}
                className="w-full h-auto rounded-lg"
              />
            ) : (
              <video controls className="w-full h-auto rounded-lg">
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <p className="mt-2 text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
