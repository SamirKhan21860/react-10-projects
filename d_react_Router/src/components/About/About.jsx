// import React from 'react'
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:w-5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="Three people, one gentleman and two women, talking with smiley faces"
            />
          </div>
          <div className="md:w-7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">React development is carried out by passionate developers</h2>
            <p className="mt-6 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
              fuga maiores dicta fugiat, eligendi incidunt sequi officiis! Dolor
              sed sit ducimus aperiam tempora adipisci molestias cum unde.
              Accusamus, recusandae odit?
            </p>
            <p className="mt-4 text-gray-600">
              Nobis totam a eveniet odit sunt rerum quos officia illo, ducimus
              minus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
