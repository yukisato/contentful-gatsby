import React from "react"
import Layout from "../components/templates/Layout"
import { graphql, PageProps } from "gatsby"

type AllContentfulBlogPost = {
  contentfulBlogPost: {
    title: string
    content: {
      childMarkdownRemark: {
        html: string
      }
    }
  }
}

const BlogPost: React.FC<PageProps<AllContentfulBlogPost>> = ({ data }) => (
  <Layout>
    <h1>{data.contentfulBlogPost.title}</h1>
    <div
      dangerouslySetInnerHTML={{
        __html: data.contentfulBlogPost.content.childMarkdownRemark.html,
      }}
    />
  </Layout>
)

export const query = graphql`
  query($slug: String, $language: String) {
    contentfulBlogPost(slug: { eq: $slug }, node_locale: { eq: $language }) {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default BlogPost
