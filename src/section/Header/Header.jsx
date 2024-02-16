import "./Header.css";
import { NavItem,ButtonYellow } from "../../component/index"
import { Link } from "react-router-dom";
import React, { useState } from "react";


  
const Header = () =>{

  const [pdfFilePath, setPdfFilePath] = useState("../../CV.pdf");

  const handleDownload = () => {
    // Triggering the download
    const link = document.createElement("a");
    link.href = pdfFilePath;
    link.download = "AlaeEddineElharrak_CV.pdf";
    link.click();
  };

  return(
    <>
    <nav className= "navbar w-full fixed rounded-b-full flex flex-nowrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-300 focus:text-neutral-700 dark:bg-neutral-600 lg:flex-wrap lg:justify-start lg:py-4 fontFamily">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
  
      <Link to="/AboutMe" className="hidden sm:block absolute sm:left-36 xl:left-28 lg:left-18 md:left-12 lg:text-xl xl:text-3xl text-white">Alae Eddine Elharrak</Link>
      <div className="hidden sm:block absolute right-20 sm:right-12 lg:right-20 lg:top-4">
      <button onClick={handleDownload} className="bg-yellow-400 text-black lg:font-medium px-6 py-1 md:px-8 md:py-2 lg:text-lg lg:px-10 lg:py-2 rounded-3xl">
        Download CV
      </button>
      </div>

    <button className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 md:hidden">
      <span className="[&>svg]:w-7">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-7 w-7">
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clipRule="evenodd" />
        </svg>
      </span>
    </button>

    
    <div className= "hidden md:block mx-auto py-2" >
      
      <ul
        className="list-style-none sm:space-x-2 flex flex-row">
        
        <NavItem>
          <Link
            className="text-neutral-500 transition duration-200 hover:text-neutral-300 hover:ease-in-out focus:font-semibold focus:border-b focus:border-yellow-400 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
            to="/AboutMe">About Me!
          </Link>
        </NavItem>
        <NavItem>
          <Link
            className="text-neutral-500 transition duration-200 hover:text-neutral-300 hover:ease-in-out focus:font-semibold focus:border-b focus:border-yellow-400 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
            to="/Resume">Resume
          </Link>
        </NavItem>
        <NavItem>
          <Link
            className="text-neutral-500 transition duration-200 hover:text-neutral-300 hover:ease-in-out focus:font-semibold focus:border-b focus:border-yellow-400 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
            to="/Projects">Projects
          </Link>
        </NavItem>
        <NavItem>
          <Link
            className="p-0 text-neutral-500 transition duration-200 hover:text-neutral-300 hover:ease-in-out focus:font-semibold focus:border-b focus:border-yellow-400  disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
            to="/Contact">Contact
          </Link>
        </NavItem>
        
      </ul>
    </div>
  </div>
    </nav>
        </>
    );
}

export default Header;