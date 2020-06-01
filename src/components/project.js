import { graphql } from "gatsby";
import { useLocalRemarkForm } from "gatsby-tinacms-remark";
import React from "react";
import Navbar from "../components/Navbar";
import PageLayout from "../components/PageLayout";
import Footer from "../components/Footer";

const ProjectPage = ({ data: { markdownRemark } }) => {
  const [markdown] = useLocalRemarkForm(markdownRemark);
  return (
    <div>
      <Navbar />
      <PageLayout title={markdown.frontmatter.title}>
        <div dangerouslySetInnerHTML={{ __html: markdown.html }} />
      </PageLayout>
      <Footer />
    </div>
  );
};

export default ProjectPage;

export const query = graphql`
  query($filePath: String!) {
    markdownRemark(fileRelativePath: { eq: $filePath }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
