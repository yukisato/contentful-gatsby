const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allContentfulBlog {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  result.data.allContentfulBlog.edges.forEach(edge => {
    const { slug } = edge.node

    createPage({
      path: `/blog/${slug}`,
      component: path.join(__dirname, "src/components/pages/BlogPost.tsx"),
      context: { slug },
    })
  })
}
