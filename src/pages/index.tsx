import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/templates/Layout"
import SEO from "../components/molecules/SEO"
import { useIntl } from "gatsby-plugin-intl"

const IndexPage = ({ data }) => {
  const intl = useIntl()

  return (
    <Layout>
      <SEO title="Home" />
      <h1>{intl.formatMessage({ id: "hello" })}</h1>
      <h2>{intl.formatMessage({ id: "posts" })}</h2>
      <ul>
        {data.allContentfulBlog.nodes.map(post => (
          <li key={post.contentful_id}>
            <Link to={`/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export const query = graphql`
  query ContentfulBlogPost($language: String) {
    allContentfulBlog(filter: { node_locale: { eq: $language } }) {
      nodes {
        title
        slug
        node_locale
      }
    }
  }
`

export default IndexPage
