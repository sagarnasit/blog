import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import ReadLink from './read-link';

const PostPreview = ({ post }) => {
  let postDate = new Date(post.date);
  let fromatedDate = `${postDate.getDay()}-${postDate.getMonth()}-${postDate.getFullYear()}`;

  return (
    <article css={cssComp}>
      <div>
        <span className="post-date">{fromatedDate}</span>
        <Link
          to={post.slug}
          css={css`
            text-decoration: none;
          `}
        >
          <h3>{post.title}</h3>
        </Link>
        <p className="post-preview__excerpt">{post.excerpt}</p>
        <ReadLink to={post.slug}>Continue... &rarr;</ReadLink>
      </div>
    </article>
  );
};

// all css goes here
const cssComp = css`
  border-bottom: 1px solid #ddd;
  margin-top: 0;
  display: flex;
  padding-bottom: 1rem;
  margin-top: 1rem;

  .post-date {
    font-size: 0.7rem;
    letter-spacing: 0.05rem;
    opacity: 0.5;
  }

  .post-preview__excerpt {
    margin-top: 0.3rem;
  }
`;
export default PostPreview;
