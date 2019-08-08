import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

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
const Header = () => (
  <header
    css={css`
      background: #eee;
      border-bottom: 1px solid #ddd;
      display: flex;
      justify-content: space-between;
      padding: 1.5rem calc((100vw - 800px - 0.5rem) / 2);
      box-shadow: 1px 2px 18px rgba(0, 0, 0, 0.1);
    `}
  >
    <NavLink to="/">
      <span
        css={css`
          font-size: 1.3rem;
        `}
      >
        Sagar Nasit
      </span>
    </NavLink>
    <nav
      css={css`
        margin-top: 0;
      `}
    >
      <NavLink activeClassName="current-page" to="/">
        Home
      </NavLink>
      <NavLink activeClassName="current-page" to="/about">
        About
      </NavLink>
    </nav>
  </header>
);

export default Header;
