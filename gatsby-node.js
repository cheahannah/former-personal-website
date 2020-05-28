const path = require("path");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query AllProjects {
      projects: allMarkdownRemark(
        filter: { fileRelativePath: { regex: "//content/.*/" } }
      ) {
        edges {
          node {
            fileRelativePath
            frontmatter {
              title
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
