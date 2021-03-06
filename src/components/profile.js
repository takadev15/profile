import React from "react";
import { Icon } from "@iconify/react"

import twitterCircle from "@iconify-icons/jam/twitter-circle"
import linkedinCircle from "@iconify-icons/jam/linkedin-circle"
import githubCircle from "@iconify-icons/jam/github-circle"

import profile from "../images/me.png"


function Profile(){
        return(
        <div className="flex flex-col mt-20 sm:flex-row md:mt-32">
          <div className="mx-20 sm:mr-16">
            <img className="rounded-full transition duration-500 ease-in-out scale-100 transform hover:scale-110 object-cover h-32 w-32 sm:h-44 sm:w-44" src={profile}/>
          </div>
          <div className="flex-col w-full text-center mt-10 sm:mt-0 sm:text-left sm:w-1/2">
            <p className="font-bold text-xl text-white">About me</p>
            <p className="text-lg text-white"> Hello There! My name is Daffa Haryadi A.K.A Taka, Im 20 y/o guy from indonesia who is trying to be A Software Engineer. I like Open source Project and trying my best to contribute to many of them. I also like Linux, Neovim, and watch Vtubers along the way, nice to meet you :^) .</p>
            <div className="flex space-x-2 mt-4 mx-16 sm:space-x-3 sm:mx-0">
              <a href="https://docs.google.com/document/d/1Y4vVEaIrL6TDpj88Pr8R56DoCtVyeZ2q2Fdcgid_jEA/edit?usp=sharing" className="bg-white h-8 w-16 py-0.5 mt-2 rounded-xl hover:bg-gray-lightest" title="CV">
                <p className="text-center text-gray-dark"> cv </p>
              </a>
              <a href="https://github.com/takadev15" target="_blank" rel="noopener noreferrer" title="Github">
              <Icon icon={githubCircle} style={{fontSize: '48px', color: '#fff' }} /></a>
              <a href="https://www.linkedin.com/in/daffahry/" target="_blank" rel="noopener noreferrer" title="Linkedin">
              <Icon icon={linkedinCircle} style={{fontSize: '48px', color: '#fff'}} /></a>
              <a href="https://twitter.com/takachiii_" target="_blank" rel="noopener noreferrer" title="Twitter">
              <Icon icon={twitterCircle} style={{fontSize: '48px', color: '#fff'}} /></a>
            </div>
          </div>
        </div>
        );
      }

export default Profile
