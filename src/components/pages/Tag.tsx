import React from "react"
import { graphql, PageProps } from "gatsby"
import { Container, Grid, Header } from "semantic-ui-react"

import BlogCard from "../atoms/BlogCard"
import SEO from "../molecules/SEO"
import Layout from "../templates/Layout"
import { BlogDataType } from "../../pages/blog"
import { useIntl } from "gatsby-plugin-intl"

type TagPageContext = {
  slug: string
  tagName: string
}

const Tag: React.FC<PageProps<BlogDataType, TagPageContext>> = ({
  data,
  pageContext,
}) => {
  const intl = useIntl()
  const blogs = data.allContentfulBlog.nodes
  const title =
    intl.locale === "ja"
      ? `"${pageContext.tagName}" にタグ付けされた記事 (${blogs.length}件)`
      : `Articles with "${pageContext.tagName}" tag (${blogs.length})`

  return (
    <Layout>
      <SEO title={title} />

      <Container>
        <Header as="h1">{title}</Header>

        <Grid style={{ marginTop: "2em" }} stackable>
          {blogs.map(blog => (
            <Grid.Column key={blog.slug} width={8}>
              <BlogCard {...blog} />
            </Grid.Column>
          ))}
        </Grid>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($language: String, $slug: String, $nullValue: String) {
    allContentfulBlog(
      filter: {
        title: { ne: $nullValue }
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
