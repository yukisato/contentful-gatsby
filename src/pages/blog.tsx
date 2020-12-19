import React from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "../components/templates/Layout"
import SEO from "../components/molecules/SEO"
import BlogCard, { BlogCardProps } from "../components/atoms/BlogCard"
import { Header } from "semantic-ui-react"

export type BlogDataType = {
  allContentfulBlog: {
    nodes: BlogCardProps[]
  }
}

const Blog: React.FC<PageProps<BlogDataType>> = ({ data }) => {
  const blogs = data.allContentfulBlog.nodes

  return (
    <Layout>
      <SEO title="Blog" />
      <Header as="h1">Blog ({blogs.length})</Header>

      {blogs.map(blog => (
        <BlogCard {...blog} />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query($language: String) {
    allContentfulBlog(
      filter: { node_locale: { eq: $language } }
      sort: { order: DESC, fields: updatedAt }
    ) {
      nodes {
        title
        description
        thumbnail {
          file {
            url
          }
        }
        slug
        updatedAt
      }
    }
  }
`

export default Blog
