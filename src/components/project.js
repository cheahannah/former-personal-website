import { graphql } from "gatsby";
import { useLocalRemarkForm } from "gatsby-tinacms-remark";
import React from "react";
import Navbar from "./Navbar";
import PageLayout from "./PageLayout";

const ProjectPage = ({ data: { markdownRemark } }) => {
  const [markdown] = useLocalRemarkForm(markdownRemark);
  return (
    <div>
      <Navbar />
      <PageLayout title={markdown.frontmatter.title}>
        <div dangerouslySetInnerHTML={{ __html: markdown.html }} />
      </PageLayout>
    </div>
  );
};

export default ProjectPage;

export const query = graphql`
  query($filePath: String!) {
    markdownRemark(fileRelativePath: { eq: $filePath }) {
      ...TinaRemark
      html
      frontmatter {
        title
      }
    }
  }
`;
