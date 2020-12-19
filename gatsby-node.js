const path = require("path")

const createBlogPages = async (graphql, createPage) => {
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

const createTagPages = async (graphql, createPage) => {
  const result = await graphql(`
    query {
      allContentfulTag {
        edges {
          node {
            slug
            name
          }
        }
      }
    }
  `)

  result.data.allContentfulTag.edges.forEach(edge => {
    const { slug, name } = edge.node

    createPage({
      path: `/blog/tag/${slug}`,
      component: path.join(__dirname, "src/components/pages/Tag.tsx"),
      context: { slug, tagName: name },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  return Promise.all(
    [createBlogPages, createTagPages].map(async callback =>
      callback(graphql, createPage)
    )
  )
}
