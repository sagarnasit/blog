import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }

      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 75, maxHeight: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return {
    title: data.site.siteMetadata.title,
    description: data.site.siteMetadata.description,
    logo: data.file.childImageSharp.fluid,
  };
};

export default useSiteMetadata;
