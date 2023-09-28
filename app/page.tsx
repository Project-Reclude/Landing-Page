/* eslint-disable react/no-unescaped-entities */

import { Oswald } from "next/font/google";
import { Quattrocento } from "next/font/google";
import { Montserrat } from "next/font/google";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const oswald = Oswald({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

const quattrocento = Quattrocento({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export default function Home() {
  return (
    <div>
      <div className="w-full h-screen bg-[url('/background.png')] bg-cover bg-center">
        <div className="w-full h-full bg-dark-shade-300 backdrop-brightness-75 flex flex-col items-center justify-center">
          <span
            className={`${quattrocento.className} text-light-accent-1000 font-bold text-2xl p-3 drop-shadow-[0_3px_2px_rgba(0,0,0,0.3)]`}
          >
            Simplicitas. Facundia. Accommodatio.
          </span>
          <span
            className={`${oswald.className} text-light-accent-1000 font-bold text-8xl drop-shadow-[0_3px_2px_rgba(0,0,0,0.5)]`}
          >
            Project Reclude
          </span>
          <span
            className={`${quattrocento.className} text-light-accent-1000 font-bold text-2xl p-8 drop-shadow-[0_3px_2px_rgba(0,0,0,0.3)]`}
          >
            Simplicitas. Facundia. Accommodatio.
          </span>
        </div>
      </div>

      <div>
        <div className="mt-20 ml-56 mr-56 mb-20 flex flex-col items-center bg-light-shade-300 rounded-3xl">
          <span
            className={`${oswald.className} text-dark-shade-1000 font-bold text-6xl underline mt-10`}
          >
            ABOUT
          </span>
          <span
            className={`${montserrat.className} text-dark-accent-1000 text-2xl font-medium text-center ml-8 mr-8 mt-10 mb-10`}
          >
            Project Reclude is my venture into crafting self-sustained
            applications. I've divided these applications into two categories:
            productivity and utility. These software tools began as solutions to
            my personal needs, but my goal is to ensure they're just as
            accessible and useful for you.
            <br />
            <br />
            What sets these applications apart is their user-friendliness. I've
            taken a minimalist approach to design, so they're intuitive and
            straightforward, regardless of technical expertise.
            <br />
            <br />
            The core mission of Project Reclude is to simplify and enhance your
            daily life. My applications are here to streamline tasks, tackle
            common problems, and ultimately make technology work for you. I hope
            you find them as valuable as I do!
          </span>
        </div>
      </div>

      <div>
        <footer className="bg-dark-shade-1000 p-10 flex flex-col items-center justify-center">
          <p
            className={`${quattrocento.className} text-xl text-light-accent-1000 font-semibold`}
          >
            Made by{" "}
            <a className="text-light-shade-1000 font-bold" href="#">
              &copy; Aditya Jyoti
            </a>
            , hosted at{" "}
            <a
              className="text-light-shade-1000 font-bold"
              href="https://github.com/Project-Reclude/Landing-Page"
              target="_blank"
            >
              Github
            </a>
          </p>
          <div className="flex gap-10 mt-3">
            <a href="https://github.com/Aditya-Jyoti">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-light-accent-1000 bg-dark-accent-500 p-2 border rounded-full"
              ></FontAwesomeIcon>
            </a>
            <a href="www.linkedin.com/in/aditya-jyoti/">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-light-accent-1000 bg-dark-accent-500 p-2 border rounded-full"
              ></FontAwesomeIcon>
            </a>
            <a href="mailto:aj.adityajyoti@gmail.com">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-light-accent-1000 bg-dark-accent-500 p-2 border rounded-full"
              ></FontAwesomeIcon>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
