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

  await Promise.all(
    result.data.allContentfulBlog.edges.map(edge => {
      const { slug } = edge.node

      createPage({
        path: `/blog/${slug}`,
        component: path.join(__dirname, "src/components/pages/BlogPost.tsx"),
        context: { slug, nullValue: null },
      })
    })
  )
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

  await Promise.all(
    result.data.allContentfulTag.edges.map(edge => {
      const { slug, name } = edge.node

      createPage({
        path: `/blog/tag/${slug}`,
        component: path.join(__dirname, "src/components/pages/Tag.tsx"),
        context: { slug, tagName: name, nullValue: null },
      })
    })
  )
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  return Promise.all(
    [createBlogPages, createTagPages].map(async callback =>
      callback(graphql, createPage)
    )
  )
}
