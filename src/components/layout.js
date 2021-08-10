import PropTypes from "prop-types";
import React from "react";
import { Icon } from "@iconify/react"
import twitterCircle from "@iconify-icons/jam/twitter-circle"
import linkedinCircle from "@iconify-icons/jam/linkedin-circle"
import gitlabCircle from "@iconify-icons/jam/gitlab-circle"
import githubCircle from "@iconify-icons/jam/github-circle"

import Header from "./header";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-dark">
      <Header />

      <main className="flex-1 w-full max-w-full px-4 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main>

      <footer className="bg-gray-light mt-32">
        <div className="flex-col">
          <div className="justify-center text-center mt-8">
            <p className="text-white"> See me on </p>
          </div>
          <div className="flex my-3 justify-center space-x-3 mt-8">
              <a href="https://twitter.com/takachiii_" target="_blank" rel="noopener noreferrer" title="Twitter">
            <Icon icon={twitterCircle} style={{fontSize: '48px' , color: '#fff',}} /></a>
              <a href="https://www.linkedin.com/in/daffa-haryadi-80068a170/" target="_blank" rel="noopener noreferrer" title="linkedin">
            <Icon icon={linkedinCircle} style={{fontSize: '48px' , color: 'white'}} /></a>
              <a href="https://gitlab.com/TAKA15" target="_blank" rel="noopener noreferrer" title="Gitlab">
            <Icon icon={gitlabCircle} style={{fontSize: '48px' , color: 'white'}} /></a>
              <a href="https://github.com/Takachii15" target="_blank" rel="noopener noreferrer" title="Github">
            <Icon icon={githubCircle} style={{fontSize: '48px', color: '#fff' }} /></a>
          </div>
          <div className="text-center mt-10 mb-8">
            <p className="text-white"> ©{new Date().getFullYear()} TAKARY</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
