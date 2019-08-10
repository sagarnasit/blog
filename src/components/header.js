import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link, graphql } from 'gatsby';
import Image from 'gatsby-image';

import githubIcon from '../../static/github.png';
import twitterIcon from '../../static/twitter.png';
import linkedinIcon from '../../static/linkedin.png';

const NavLink = styled(Link)`
  color: #222;
  font-size: size 1rem;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid #222;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
const Header = props => {
  return (
    <header css={CSS}>
      <NavLink to="/" className="header-logo-link">
        <Image className="logo" fluid={props.logo} width={100} />
        <span className="header-site-name">Sagar Nasit</span>
      </NavLink>
      <nav>
        <a className="social-link" target="_blank" href="github.com/sagarnasit">
          <img className="social-media-icon" src={githubIcon} />
        </a>

        <a
          className="social-link"
          target="_blank"
          href="twitter.com/sagarnasit"
        >
          <img className="social-media-icon" src={twitterIcon} />
        </a>

        <a
          className="social-link"
          target="_blank"
          href="linkedin.com/sagarnasit"
        >
          <img className="social-media-icon" src={linkedinIcon} />
        </a>
      </nav>
    </header>
  );
};

export const query = graphql`
  query {
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`;

const CSS = css`
  background: #eee;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem calc((100vw - 800px - 0.5rem) / 2);
  box-shadow: 1px 2px 18px rgba(0, 0, 0, 0.1);

  .logo {
    display: inline-block;
    width: 75px;
  }
  .header-logo-link {
    display: flex;
    align-items: center;
  }

  .header-site-name {
    font-size: 1.2rem;
    margin-left: 0.3rem;
  }

  .social-media-icon {
    width: 30px;
  }

  .social-link {
    margin-right: 0.5rem;

    :last-of-type {
      margin: 0;
    }
  }
`;
export default Header;
