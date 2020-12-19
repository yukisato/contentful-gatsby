import React from "react"
import { graphql, PageProps } from "gatsby"
import { Header } from "semantic-ui-react"

import BlogCard from "../atoms/BlogCard"
import SEO from "../molecules/SEO"
import Layout from "../templates/Layout"
import { BlogDataType } from "../../pages/blog"

type TagPageContext = {
  slug: string
  tagName: string
}

const Tag: React.FC<PageProps<BlogDataType, TagPageContext>> = ({
  data,
  pageContext,
}) => {
  const blogs = data.allContentfulBlog.nodes

  return (
    <Layout>
      <SEO title="Blog" />
      <Header as="h1">
        ＃{pageContext.tagName} ({blogs.length})
      </Header>

      {blogs.map(blog => (
        <BlogCard {...blog} />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query($language: String, $slug: String) {
    allContentfulBlog(
      filter: {
        node_locale: { eq: $language }
        tags: { elemMatch: { slug: { eq: $slug } } }
      }
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

export default Tag
