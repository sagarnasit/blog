import React from 'react';
import { Global, css } from '@emotion/core';
import Helmet from 'react-helmet';
import Header from './header';
import useSiteMetaData from '../hooks/useSiteMetaData';

const Layout = ({ children }) => {
  const { title, description, logo } = useSiteMetaData();

  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          html,
          body {
            background-color: #fdfafd;
            margin: 0;
            color: #555;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Helvetica, Arial, sans-serif, 'Apple Color Emoji',
              'Segoe UI Emoji', 'Segoe UI Symbol';
            font-size: 18px;
            line-height: 1.4;

            /* remove margin for main div that gatsby mounts into */
            > div {
              margin-top: 0;
            }
            /* fix-gatsby-remark plugin issue with extra space above image */
            .gatsby-resp-image-background-image {
              display: none !important;
            }
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: #222;
            line-height: 1.1;

            + * {
              margin-top: 0.5rem;
            }
          }

          strong {
            color: #222;
          }

          li {
            margin-top: 0.25rem;
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="descriptoin" content={description} />
      </Helmet>

      <Header logo={logo} />
      <main
        css={css`
          margin: 2rem auto 4rem;
          max-width: width 90vw;
          width: 800px;
        `}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
