import React from "react";
import Baner from "../assets/Description_banner.png";
import { BsFillGeoAltFill } from "react-icons/bs";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const About = () => {
  return (
    <div
      className="h-screen bg-primary-bg pt-[80px] flex flex-col justify-center items-center"
      name="about"
    >
      <div className="container mx-auto px-4 text-center flex items-center justify-center flex-col pt-4">
        <p className="text-center text-xl text-butcol mb-12">
          About Cars N Gaz
        </p>
        <div>
          <p className="text-lg text-text">
            Qu'est ce qui est différent des autres groupes?
          </p>
        </div>
        <div className="flex flex-row gap-2 items-top mt-32">
          <div className="text-text mt-16 text-left">
            <div className="w-full">
              <p className="text-lg mb-8">
                Chaque mois nous organisons 3 sorties au minimum qui
                comprennent:
              </p>
              <div className="flex flex-col gap-4">
                <p>
                  – rassemblements mobiles (car nous ne sommes pas fan des
                  rassemblements statiques)
                </p>
                <p>
                  – sorties exclusives (après-midi au Nürburgring e-sports bar
                  pour faire du simulateur)
                </p>
                <p>– soirée Cars N Fiesta</p>
                <p>– activités diverses (karting, lasergame, etc.)</p>
              </div>
            </div>
          </div>
          <img className="w-1/2" src={Baner} alt="" />
        </div>

        <div className="text-text mt-16 text-lg flex flex-col gap-8">
          <p>Cars N Gaz</p>
          <div className="flex items-center gap-4">
            <BsFillGeoAltFill />
            <span>
              <a href="https://maps.app.goo.gl/wNTNxhn7A9pQNb4P7">
                Chemin des Saules 20b - 1260 Nyon
              </a>{" "}
              lun-dim 9h00 à 22h00
            </span>
          </div>
          <div className="flex flex-row gap-8 justify-center items-center">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/cars_n_gaz/?hl=fr"
              className="hover:text-butcol"
            >
              <FaInstagram />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.tiktok.com/@carsngaz"
              className="hover:text-butcol"
            >
              <FaTiktok />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/@carsngaz1957"
              className="hover:text-butcol"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
