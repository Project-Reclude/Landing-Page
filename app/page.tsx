import { Oswald } from "next/font/google";
import { Quattrocento } from "next/font/google";
import { Montserrat } from "next/font/google";

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
            className={`${quattrocento.className} text-light-shade-1000 font-bold text-2xl p-3 drop-shadow-[0_3px_2px_rgba(0,0,0,0.8)]`}
          >
            Simplicitas. Facundia. Accommodatio.
          </span>
          <span
            className={`${oswald.className} text-light-shade-1000 font-bold text-8xl drop-shadow-[0_3px_2px_rgba(0,0,0,0.8)]`}
          >
            Project Reclude
          </span>
          <span
            className={`${quattrocento.className} text-light-shade-1000 font-bold text-2xl p-10 drop-shadow-[0_3px_2px_rgba(0,0,0,0.8)]`}
          >
            Simplicitas. Facundia. Accommodatio.
          </span>
        </div>
      </div>

      <div className="w-full h-full">


      </div>
    </div>
  );
}
