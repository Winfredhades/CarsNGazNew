import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { events } from "../data/events";
import carPic from "../assets/car.jpg";
import { BsFillGeoAltFill } from "react-icons/bs";

const Events = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
    centerPadding: "20px",
  };
  return (
    <div
      className="h-screen bg-primary-bg pt-[80px] flex flex-col justify-center items-center"
      name="events"
    >
      <div className="container mx-auto px-4 text-center flex items-center justify-center flex-col pt-4">
        <p className="text-center text-xl text-butcol mb-12">
          Cars N Gaz Events
        </p>
      </div>
      <div className="container mx-auto px-4">
        <div className="slider-container text-text">
          <Slider {...settings} className="slider">
            {events.map((event, index) => (
              <div
                className="text-center px-2" // Add padding here
                key={event.date.toISOString() + index}
              >
                <div className="bg-white rounded-lg p-4 shadow-lg flex flex-col justify-center h-full">
                  {" "}
                  <img
                    className="rounded-xl w-full"
                    src={carPic}
                    alt={event.title}
                  />
                  <div className="w-full flex flex-col gap-4 mt-4 mx-auto">
                    <h3>{event.date.toDateString()}</h3>
                    <div className="flex justify-center items-center gap-4">
                      <BsFillGeoAltFill />
                      <p>{event.address}</p>
                    </div>
                    <p>{event.description}</p>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded">
                      Book A Place
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Events;
