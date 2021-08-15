import React from "react";
import { Icon } from "@iconify/react"


function Interest(){
        return(
        <div className="mt-44 sm:mt-64">
          <div className="my-10 text-center">
            <p className="text-white text-2xl font-bold"> My Interest </p>
          </div>
        <div className="flex-col">
          <div className="flex flex-row justify-between my-20">
          <div className="flex-col bg-white w-5/12 h-96 rounded-3xl border-black p-1 border-opacity-5">
            <div className="mb-4">
              <p className="text-gray-dark text-center text-xl font-bold"> Tools </p>
            </div>
            <div className="flex bg-gray-dark h-14 py-3 px-2 my-2 justify-between" role="button">
              <p className="text-white text-lg">Neovim</p>
              <Icon icon="simple-icons:neovim" style={{color: 'white' , fontSize: '32px'}}/>
            </div>
            <div className="flex bg-gray-dark h-14 py-3 px-2 my-2 justify-between">
              <p className="text-white text-lg">Git</p>
              <Icon icon="bx:bxl-git" style={{color: 'white' , fontSize: '32px'}}/>
            </div>
            <div className="flex bg-gray-dark h-14 py-3 px-2 my-2 justify-between">
              <p className="text-white text-lg">Linux</p>
              <Icon icon="carbon:linux" style={{color: 'white' , fontSize: '32px'}}/>
            </div>
          </div>
          <div className="flex-col bg-white w-5/12 h-96 rounded-3xl border-black p-1 border-opacity-5">
            <div className="mb-4">
              <p className="text-gray-dark text-center text-xl font-bold"> Front End </p>
            </div>
            <div className="flex bg-gray-dark h-14 py-3 px-2 my-2 justify-between">
              <p className="text-white text-lg">Tailwind</p>
              <Icon icon="file-icons:tailwind"  style={{color: 'white' , fontSize: '32px'}}/>
            </div>
            <div className="flex bg-gray-dark h-14 py-3 px-2 my-2 justify-between">
              <p className="text-white text-lg">ReactJS</p>
              <Icon icon="cib:react" style={{color: 'white' , fontSize: '32px'}}/>
            </div>
            <div className="flex bg-gray-dark h-14 py-3 px-2 my-2 justify-between">
              <p className="text-white text-lg">Flutter</p>
              <Icon icon="cib:flutter" style={{color: 'white' , fontSize: '32px'}}/>
            </div>
          </div>
          </div>
          <div className="flex flex-row justify-between my-20">
          <div className="flex-col bg-white w-5/12 h-96 rounded-3xl border-black p-1 border-opacity-5">
            <div className="mb-4">
              <p className="text-gray-dark text-center text-xl font-bold"> Back End </p>
            </div>
            <div className="flex bg-gray-dark h-14 py-3 px-2 my-2 justify-between">
              <p className="text-white text-lg">Django</p>
              <Icon icon="cib:django" style={{color: 'white' , fontSize: '32px'}}/>
            </div>
            <div className="flex bg-gray-dark h-14 py-3 px-2 my-2 justify-between">
              <p className="text-white text-lg">Node JS</p>
              <Icon icon="fa-brands:node-js" style={{color: 'white' , fontSize: '32px'}}/>
            </div>
            <div className="flex bg-gray-dark h-14 py-3 px-2 my-2 justify-between">
              <p className="text-white text-lg">Go</p>
              <Icon icon="cib:go" style={{color: 'white' , fontSize: '32px'}}/>
            </div>
          </div>
          <div className="flex-col bg-white w-5/12 h-96 rounded-3xl border-black p-1 border-opacity-5">
            <div className="mb-4">
              <p className="text-gray-dark text-center text-xl font-bold"> Other Stuff </p>
            </div>
            <div className="flex bg-gray-dark h-14 py-3 px-2 my-2 justify-between">
              <p className="text-white text-lg">C++</p>
              <Icon icon="bx:bxl-c-plus-plus" style={{color: 'white' , fontSize: '32px'}}/>
            </div>
          </div>
          </div>
        </div>
        </div>
        );
    }

export default Interest
