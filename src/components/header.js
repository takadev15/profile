import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className="bg-gray-dark">
      <div className="flex flex-wrap items-center justify-between max-w-full p-4 mx-auto md:p-8">
        <Link to="/">
          <h1 className="flex items-center text-white hover:text-gray-lightest no-underline">
            <span className="text-xl font-bold tracking-tight">
              {site.siteMetadata.title}
            </span>
          </h1>
        </Link>

        <button
          className="items-center block px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:items-center w-full h-full md:w-auto md:h-auto`}
        >
          {[
            {
              route: `https://www.blog.takary.my.id`,
              title: `Blog`,
            },
            {
              route: `#`,
              title: `Project`,
            },
            {
              route: `#`,
              title: `Interests`,
            },
          ].map((link) => (
            <Link
              className="block mt-4 text-white text-lg hover:text-gray-lightest no-underline md:inline-block md:mt-0 md:ml-6"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;

