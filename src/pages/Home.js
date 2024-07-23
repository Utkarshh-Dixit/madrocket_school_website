import React from "react";
import Carousel from "../components/Carousel";

const Home = () => (
  <div className="flex flex-col">
    <Carousel />
    <section className="text-center p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">
        Welcome to Springdale Public School
      </h1>
      <p className="text-lg">
        Where we nurture young minds for a brighter future.
      </p>
    </section>
  </div>
);

export default Home;
