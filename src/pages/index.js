import React from "react";

import Layout from "../components/layout";
import Profile from "../components/profile.js"
import Projects from "../components/projects.js"
import Interest from "../components/interest.js"


import SEO from "../components/seo";
// import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`portofolio`, `takary`, `software engineer`, `developer`]}
        title="Home"
      />
      <div className="w-5/6 sm:w-2/3 mx-auto">
        <Profile />
        <div className="text-center mt-48 sm:mt-72 mb-10">
          <p className="font-bold text-3xl text-white">Projects</p>
        </div>
        <Projects />
        <Interest />
      </div>
    </Layout>
  );
}

export default IndexPage;
