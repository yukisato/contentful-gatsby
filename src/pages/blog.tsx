import React from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "../components/templates/Layout"
import SEO from "../components/molecules/SEO"
import BlogCard, { BlogCardProps } from "../components/atoms/BlogCard"
import { Container, Grid, Header, Label, Segment } from "semantic-ui-react"
import { useIntl } from "gatsby-plugin-intl"

export type BlogData = {
  allContentfulBlog: {
    nodes: BlogCardProps[]
  }
  allContentfulTag: {
    edges: {
      node: { slug: string; name: string }
    }[]
  }
}

const Blog: React.FC<PageProps<BlogData>> = ({ data }) => {
  const intl = useIntl()
  const blogs = data.allContentfulBlog.nodes
  const tagNodes = data.allContentfulTag.edges
  const title =
    intl.locale === "ja"
      ? `すべての記事 (${blogs.length}件)`
      : `All articles (${blogs.length})`

  return (
    <Layout>
      <SEO title={title} />

      <Container>
        <Header as="h1">{title}</Header>
        <Segment>
          {tagNodes.map(({ node: tag }) => (
            <Label
              key={tag.slug}
              as="a"
              href={`/${intl.locale}/blog/tag/${tag.slug}`}
              size="large"
              color="teal"
              circular
            >
              {tag.name}
            </Label>
          ))}
        </Segment>
        <Grid style={{ marginTop: "2em" }} stackable columns={2}>
          {blogs.map(blog => (
            <Grid.Column key={blog.slug}>
              <BlogCard {...blog} />
            </Grid.Column>
          ))}
        </Grid>
      </Container>
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
    allContentfulTag(filter: { node_locale: { eq: $language } }) {
      edges {
        node {
          slug
          name
        }
      }
    }
  }
`

export default Blog
