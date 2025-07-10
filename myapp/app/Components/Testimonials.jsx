"use client"

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    text: "I used this service to check the history of a car I inherited. The report was thorough and helped me understand the vehicle's condition and value. It was reassuring to have all the necessary information at my fingertips. I’ll definitely use it again for any future purchases or sales!",
    author: "Michael B.",
  },
  {
    text: "The report I received was incredibly detailed and insightful. It gave me a clear picture of the car’s history and helped me avoid a potentially costly mistake. The customer service team was also very responsive and helpful. If you're buying or selling a car, this is a must-have tool!",
    author: "Laura K.",
  },
  {
    text: "I recently used this service to get a comprehensive report on a used car I was considering. The report was incredibly detailed and helped me avoid a bad deal. I was able to negotiate confidently and ended up with a great car. Highly recommend!",
    author: "Sarah T.",
  },
  {
    text: "I run a small dealership and this service has become an essential part of my workflow. It saves me time and gives my customers peace of mind. Totally worth it.",
    author: "Greg H.",
  },
  {
    text: "I’ve always been skeptical of online reports, but VehiclesCheck changed my mind. The information was spot on and super easy to digest. I feel way more confident buying used cars now.",
    author: "Ashley R.",
  },
  {
    text: "Great tool for anyone in the market for a vehicle. The interface is clean, and the report quality is outstanding. This is now part of my regular car shopping process.",
    author: "Tom C.",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // for tablets and small desktops
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // for mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-16 px-6 md:px-20 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Listen up! Our Customers Have Something to Say
      </h2>

      <Slider {...settings}>
        {testimonials.map((t, index) => (
          <div key={index} className="px-4">
            <div className="bg-white rounded-lg shadow-md p-6 text-center h-full">
              <p className="text-gray-800 mb-4">"{t.text}"</p>
              <p className="font-semibold text-gray-900">{t.author}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
