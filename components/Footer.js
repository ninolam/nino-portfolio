import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#F1F1F1] dark:bg-gray-900">
      <div className="max-w-6xl  mx-auto px-4 py-10 md:py-20">
        <div className="h-0.5 w-full bg-white dark:bg-gray-700"></div>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center mt-8">
          <div>
            <p>&copy; Nino Lamoureux. Tous droits réservés.</p>
          </div>
          <div>
            <div>
              Développé par
              <div className="inline-block transform hover:scale-110 hover:-rotate-3 transition duration-300">
                <a
                  className="hover:bg-red-500 rounded-md px-2 py-1  hover:text-gray-50"
                  href="https://ninolam.fr"
                >
                  Nino Lamoureux
                </a>
              </div>
              avec
              <svg
                className="inline-block ml-2"
                width="20"
                height="20"
                fill="#ed1b24"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 122.88 107.39"
              >
                <path class="cls-1" d="M60.83,17.18c8-8.35,13.62-15.57,26-17C110-2.46,131.27,21.26,119.57,44.61c-3.33,6.65-10.11,14.56-17.61,22.32-8.23,8.52-17.34,16.87-23.72,23.2l-17.4,17.26L46.46,93.55C29.16,76.89,1,55.92,0,29.94-.63,11.74,13.73.08,30.25.29c14.76.2,21,7.54,30.58,16.89Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
