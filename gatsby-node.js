const path = require("path")

// exports.onCreateWebpackConfig = ({ actions }) => {
//   actions.setWebpackConfig({
//     resolve: {
//       alias: {
//         "../../theme.config$": path.join(
//           __dirname,
//           "src/semantic/theme.config"
//         ),
//       },
//     },
//   })
// }

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  result.data.allContentfulBlogPost.edges.forEach(edge => {
    const slug = edge.node.slug

    createPage({
      path: slug,
      component: path.join(__dirname, "src/pages/BlogPost.tsx"),
      context: {
        slug: slug,
      },
    })
  })
}
