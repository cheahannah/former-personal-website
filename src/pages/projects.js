import React from "react";
import Img from "gatsby-image";
import { Link, graphql, useStaticQuery } from "gatsby";
import Navbar from "../components/Navbar";
import PageLayout from "../components/PageLayout";
import Footer from "../components/Footer";
import "./projects.css";

const ProjectTile = ({ title, excerpt, featuredImage, href }) => {
  return (
    <div className="project">
      <Link to={href}>
        <Img fluid={featuredImage.childImageSharp.fluid} className="project-thumbnail"/>
        <h2>{title}</h2>
        <p>{excerpt}</p>
      </Link>
    </div>
  );
};

const ProjectPage = () => {
  // TODO: Wrap into useProjects
  const {
    projects: { edges: projects },
  } = useStaticQuery(graphql`
    query AllProjects {
      projects: allMarkdownRemark(
        sort: { fields: [frontmatter___subtitle], order: DESC }, 
        filter: { fileRelativePath: { regex: "//content/.*/" } }
      ) {
        edges {
          node {
            fileRelativePath
            frontmatter {
              title
              subtitle
              excerpt
              featuredImage {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  return (
    <div>
      <Navbar />
      <PageLayout title="Projects!">
        <div className="projects-container">
          {projects.map(
            ({
              node: {
                frontmatter: { title, subtitle, excerpt, featuredImage },
                fileRelativePath,
              },
            }) => (
              <ProjectTile
                title={title}
                subtitle={subtitle}
                excerpt={excerpt}
                featuredImage={featuredImage}
                href={fileRelativePath.match(/content(\/projects\/.*)\.md/)[1]}
              />
            )
          )}
        </div>
      </PageLayout>
      <Footer />
    </div>
  );
};

export default ProjectPage;
