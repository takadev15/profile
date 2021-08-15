import React from "react";

import rwpintar from "../images/RwPintar.png"
import siakad from "../images/siakad.png"

// const [isExpanded, toggleExpansion] = useState(false);


function Projects(){
        return(
        <div className="flex-col sm:bg-gray-light p-0 sm:p-10">
          <div className="flex flex-col bg-gray-light my-10 sm:h-auto sm:flex-row sm:my-14 sm:pr-20 sm:pt-5" >
            <div className="w-full sm:w-2/5 mx-0 sm:mx-5">
              <img className="w-full transition duration-500 transform hover:translate-x-2 hover:translate-y-2" src={rwpintar}/>
            </div>
            <div className="flex-col w-full sm:h-auto sm:w-3/5 ml-0 sm:ml-4 mt-8 sm:mt-0">
              <p className="text-white text-lg text-center sm:text-left">RwPintar</p>
              <p className="text-white mt-4 mx-10 text-justify sm:mx-0 sm:mr-64 sm:w-full text-base">An web app for citizen association and people in small neighborhood communities to interact and managed the neighborhood by online means. This project aim is to help citizen association digitalized their database, social help system and almost all of their communities facilities. I personally worked on the backend of this project using Django Framework</p>
              <div className="flex justify-center sm:justify-start space-x-6 my-10 sm:mt-4">
                <a href="https://github.com/HCIteamB/rwpintar-dev" className="bg-white h-8 w-24 rounded-full py-1.5 hover:bg-gray-lightest">
                  <p className="text-xs font-bold text-center">Source Code</p>
                </a>
                <a href="#" className="bg-white h-8 w-24 rounded-full py-1.5 hover:bg-gray-lightest">
                  <p className="text-xs font-bold text-center">Live</p>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-gray-light my-10 sm:h-auto sm:flex-row sm:my-14 sm:pr-20 sm:pt-5" >
            <div className="w-full sm:w-2/5 mx-0 sm:mx-5">
              <img className="w-full transition duration-500 transform hover:translate-x-2 hover:translate-y-2" src={siakad}/>
            </div>
            <div className="flex-col w-full sm:h-auto sm:w-3/5 ml-0 sm:ml-4 mt-8 sm:mt-0">
              <p className="text-white text-lg text-center sm:text-left">RwPintar</p>
              <p className="text-white mt-4 mx-10 text-justify sm:mx-0 sm:mr-64 sm:w-full text-base">An web app for citizen association and people in small neighborhood communities to interact and managed the neighborhood by online means. This project aim is to help citizen association digitalized their database, social help system and almost all of their communities facilities. I personally worked on the backend of this project using Django Framework</p>
              <div className="flex justify-center sm:justify-start space-x-6 my-10 sm:mt-4">
                <a href="https://github.com/HCIteamB/rwpintar-dev" className="bg-white h-8 w-24 rounded-full py-1.5 hover:bg-gray-lightest">
                  <p className="text-xs font-bold text-center">Source Code</p>
                </a>
                <a href="#" className="bg-white h-8 w-24 rounded-full py-1.5 hover:bg-gray-lightest">
                  <p className="text-xs font-bold text-center">Live</p>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-0 sm:mt-24">
          <a href="#" className="text-center"><p className="text-white text-xl font-semibold"> See More </p></a>
          </div>
        </div>
        );
    }

export default Projects
