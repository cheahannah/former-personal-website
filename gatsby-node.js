const path = require("path");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
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
              featuredImage{
                childImageSharp{
                  fluid(maxWidth: 800){
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            html
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.error(result.errors);
    throw new Error("f");
  }

  result.data.projects.edges.forEach(
    ({ node: { fileRelativePath, frontmatter, html } }) => {
      const [_, slug] = fileRelativePath.match(/content\/projects\/(.*)\.md/);
      createPage({
        path: `/projects/${slug}`,
        component: path.resolve("src/components/project.js"),
        context: {
          meta: frontmatter,
          content: html,
          filePath: fileRelativePath,
        },
      });
    }
  );
};
