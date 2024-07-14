import React from "react";
import { Link } from "react-scroll";
import Banner from "../assets/banner-main.png";

const Home = () => {
  return (
    <div className="h-screen bg-primary-bg text-text pt-[80px]" name="home">
      <img src={Banner} alt="Cars N Gaz Banner with Ford Mustang " />
      <div className="container mx-auto px-4 text-center flex items-center justify-center flex-col pt-4">
        <h1 className="text-xl mb-8 text-butcol">Cars N Gaz</h1>
        <p className="text-lg mb-12">Plus qu'un groupe, c'est une famille</p>
        <p className="w-1/4 mb-4">
          Le concept est simple, tu aimes rouler et tu cherches à le faire au
          milieu d’autres véhicules de passionnés, alors écris nous au 079 872
          65 22 et viens traverser les plus belles routes de Suisse bien
          entouré.
        </p>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          <button
            type="submit"
            className="text-text  hover:text-text border border-butcol hover:bg-butcol focus:ring-4 focus:outline-none focus:ring-butcol font-light rounded-2xl text-lg px-16 py-3.5 text-center dark:border-butcol dark:text-text dark:hover:text-text dark:hover:bg-butcol dark:focus:ring-butcol "
          >
            Let's Connect
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
