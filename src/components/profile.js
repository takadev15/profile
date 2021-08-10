import React from "react";
import { Icon } from "@iconify/react"

import twitterCircle from "@iconify-icons/jam/twitter-circle"
import linkedinCircle from "@iconify-icons/jam/linkedin-circle"
import githubCircle from "@iconify-icons/jam/github-circle"

import profile from "../images/profile.jpg"

function Profile(){
        return(
        <div className="flex mt-32">
          <div className="mr-16">
            <img className="rounded-full transition duration-500 ease-in-out scale-100 transform hover:scale-110 object-cover h-40 w-40" src={profile}/>
          </div>
          <div className="flex-col w-1/2">
            <p className="font-bold text-xl text-white">About me</p>
            <p className="text-lg text-white"> Hello There! My name is Daffa Haryadi A.K.A Taka, Im 20 y/o guy from indonesia who is trying to be A Software Engineer. I like Open source Project and trying my best to contribute to many of them. I also like Linux, Neovim, and watch Vtubers along the way, nice to meet you :^) .</p>
            <div className="flex space-x-3 mt-4">
              <a href="#" className="bg-white h-8 w-16 py-0.5 mt-2 rounded-xl hover:bg-gray-lightest" title="CV">
                <p className="text-center text-gray-dark"> cv </p>
              </a>
              <a href="https://github.com/Takachii15" target="_blank" rel="noopener noreferrer" title="Github">
              <Icon icon={githubCircle} style={{fontSize: '48px', color: '#fff' }} /></a>
              <a href="https://www.linkedin.com/in/daffa-haryadi-80068a170/" target="_blank" rel="noopener noreferrer" title="Linkedin">
              <Icon icon={linkedinCircle} style={{fontSize: '48px', color: '#fff'}} /></a>
              <a href="https://twitter.com/takachiii_" target="_blank" rel="noopener noreferrer" title="Twitter">
              <Icon icon={twitterCircle} style={{fontSize: '48px', color: '#fff'}} /></a>
            </div>
          </div>
        </div>
        );
    }

export default Profile
