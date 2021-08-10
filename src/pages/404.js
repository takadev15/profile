import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import abductionIllustration from "../images/abduction-illustration.svg";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div>
        <img
          alt="Ghost getting abducted by aliens"
          className="block mx-auto w-1/5"
          src={abductionIllustration}
        />
        <p className="text-center text-white font-extrabold text-3xl mt-14">Wow where is everybody</p>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
