const path = require("path")

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
      component: path.resolve("./src/pages/BlogPost.tsx"),
      context: {
        slug: slug,
      },
    })
  })
}
