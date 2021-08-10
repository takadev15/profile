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
          <div className="flex my-5 pr-20" key={i}>
            <div className="mx-5 h-96 w-96">
              <img src={p.image}/>
            </div>
            <div className="flex-col ml-4">
              <p className="text-white text-lg">{p.title}</p>
              <p className="text-white mt-4 mr-64 text-base">{p.description}</p>
              <div className="flex space-x-6 mt-4">
                <a href={p.source} className="bg-white h-8 w-24 rounded-full py-2">
                  <p className="text-xs font-bold text-center">Source Code</p>
                </a>
                <a href={p.visit} className="bg-white h-8 w-24 rounded-full py-2">
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
