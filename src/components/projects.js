import React from "react";

import rwpintar from "../images/RwPintar.png"
import siakad from "../images/siakad.png"


function Projects(){
        return(
        <div className="flex-col bg-gray-light p-10">
          <div className="flex my-14 pr-20">
            <div className="w-2/5 mx-5">
              <img className="w-full transition duration-500 transform hover:translate-x-2 hover:translate-y-2" src={rwpintar}/>
            </div>
            <div className="flex-col w-3/5 ml-4">
              <p className="text-white text-lg">RwPintar</p>
              <p className="text-white mt-4 mr-64 text-base">An web app for citizen association and people in small neighborhood communities to interact and managed the neighborhood by online means. This project aim is to help citizen association digitalized their database, social help system and almost all of their communities facilities. I personally worked on the backend of this project using Django Framework</p>
              <div className="flex space-x-6 mt-4">
                <a href="https://github.com/HCIteamB/rwpintar-dev" className="bg-white h-8 w-24 rounded-full py-1.5 hover:bg-gray-lightest">
                  <p className="text-xs font-bold text-center">Source Code</p>
                </a>
                <a href="#" className="bg-white h-8 w-24 rounded-full py-1.5 hover:bg-gray-lightest">
                  <p className="text-xs font-bold text-center">Live</p>
                </a>
              </div>
            </div>
          </div>
          <div className="flex my-14 pr-20">
            <div className="w-2/5 mx-5">
              <img className="w-full h-full transition duration-500 transform hover:translate-x-2 hover:translate-y-2" src={siakad}/>
            </div>
            <div className="flex-col w-3/5 ml-4">
              <p className="text-white text-lg">Siakad Multiplatform</p>
              <p className="text-white mt-4 mr-64 text-base">An Ultra Experimental SIAKAD clone using Flutter as the Frontend and Go as the backend. Planned to be created by me and my friend as a means to further understand flutter for website design and Go architecture</p>
              <div className="flex space-x-6 mt-4">
                <a href="https://github.com/PandoraWTG/siakad_multiplatform" className="bg-white h-8 w-24 rounded-full py-1.5 hover:bg-gray-lightest">
                  <p className="text-xs font-bold text-center">Source Code</p>
                </a>
                <a href="#" className="bg-white h-8 w-24 rounded-full py-1.5 hover:bg-gray-lightest">
                  <p className="text-xs font-bold text-center">Live</p>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-24">
          <a href="#" className="text-center"><p className="text-white text-xl font-semibold"> See More </p></a>
          </div>
        </div>
        );
    }

export default Projects
