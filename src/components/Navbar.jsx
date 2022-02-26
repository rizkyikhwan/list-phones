import useDarkMode from "../hook/useDarkMode";
import { FiSun, FiMoon } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const [showNav] = useState(false);

  const navHandler = () => {
    const link = document.querySelector("#link");
    if (!showNav) {
      link.classList.toggle("hidden");
    }
  };

  return (
    <nav className="bg-white bg-opacity-70 backdrop-blur border-gray-200 px-2 sm:px-4 py-2.5 my-4 rounded dark:bg-gray-600">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <h1 className="text-xl font-semibold tracking-wide">List Phone</h1>
        <div className="flex items-center">
          <button
            onClick={navHandler}
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <button
            onClick={() => {
              setTheme(colorTheme);
            }}
            className="block md:hidden p-3 bg-yellow-400 dark:bg-blue-700 rounded-lg shadow-lg uppercase font-semibold tracking-wide text-lg ml-3"
          >
            {colorTheme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
        </div>
        <div className="hidden w-full md:block md:w-auto" id="link">
          <ul className="flex flex-col md:items-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium" onClick={navHandler}>
            <li>
              <NavLink
                to="/"
                className="block py-2 pr-4 pl-3 text-gray-700 md:hover:text-indigo-400 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-400 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Latest
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/brands"
                className="block py-2 pr-4 pl-3 text-gray-700 md:hover:text-indigo-400 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-400 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Brands
              </NavLink>
            </li>
            <li>
              <button
                onClick={() => {
                  setTheme(colorTheme);
                }}
                className="hidden md:block p-2 bg-yellow-400 dark:bg-blue-700 rounded-lg shadow-lg uppercase font-semibold tracking-wide text-md ml-3"
              >
                {colorTheme === "dark" ? <FiSun /> : <FiMoon />}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
