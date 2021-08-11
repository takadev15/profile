import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { projects } from '../components/constant.js'

function ProjectsPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <div className="w-2/3 mx-auto">
        <div className="text-center mt-32 mb-10">
          <p className="font-bold text-3xl text-white">Projects</p>
        </div>
        <div className="flex-col bg-gray-light p-10">
        {projects.map((p, i)=> { return (  
          <div className="flex my-14 pr-20" key={i}>
            <div className="w-2/5 mx-5">
              <img className="transition duration-500 transform hover:translate-x-2 hover:translate-y-2" src={p.image}/>
            </div>
            <div className="flex-col w-3/5 ml-4">
              <p className="text-white text-lg">{p.title}</p>
              <p className="text-white mt-4 mr-64 text-base">{p.description}</p>
              <div className="flex space-x-6 mt-4">
                <a href={p.source} className="bg-white h-8 w-24 rounded-full py-1.5 hover:bg-gray-lightest">
                  <p className="text-xs font-bold text-center">Source Code</p>
                </a>
                <a href={p.visit} className="bg-white h-8 w-24 rounded-full py-1.5 hover:bg-gray-lightest">
                  <p className="text-xs font-bold text-center">Live</p>
                </a>
              </div>
            </div>
          </div>
        );
        })}
          <a href="/project" className="text-center"><p className="text-white text-xl font-semibold"> See More </p></a>
        </div>
        </div>
    </Layout>
  );
}

export default ProjectsPage;
