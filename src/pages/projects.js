import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Navbar from "../components/Navbar";
import PageLayout from "../components/PageLayout";
import Footer from "../components/Footer";
import "./projects.css";

const ProjectTile = ({ title, subtitle, href }) => {
  return (
    <div className="project">
      <Link to={href}>
        <div className="project-thumbnail" />
        <h1>{title}</h1>
        <p>{subtitle}</p>
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
        filter: { fileRelativePath: { regex: "//content/.*/" } }
      ) {
        edges {
          node {
            fileRelativePath
            frontmatter {
              title
              subtitle
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
                frontmatter: { title, subtitle },
                fileRelativePath,
              },
            }) => (
              <ProjectTile
                title={title}
                subtitle={subtitle}
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
