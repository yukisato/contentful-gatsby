import React from "react"
import Layout from "../templates/Layout"
import { graphql, PageProps } from "gatsby"
import SEO from "../molecules/SEO"
import {
  Container,
  Header,
  Icon,
  Image,
  Label,
  Segment,
} from "semantic-ui-react"
import { useIntl } from "gatsby-plugin-intl"
import profile from "../../images/profile.jpg"

type ContentfulBlog = {
  contentfulBlog: {
    title: string
    description?: string
    tags?: {
      name: string
      slug: string
    }[]
    thumbnail?: {
      file?: {
        url: string
      }
    }
    content: { childMarkdownRemark: { html: string } }
    createdAt: string
    updatedAt: string
  }
}

const BlogPost: React.FC<PageProps<ContentfulBlog>> = ({ data }) => {
  if (!data.contentfulBlog?.title) return <Layout>404</Layout>

  const intl = useIntl()
  const { title, updatedAt, description = `` } = data.contentfulBlog
  const thumbnailURL: string = data.contentfulBlog.thumbnail?.file?.url
  const tags = data.contentfulBlog.tags ?? []

  return (
    <Layout>
      <SEO title={title} description={description} />

      <Container text>
        {thumbnailURL ? (
          <Image
            style={{ marginBottom: "2em" }}
            fluid
            src={thumbnailURL}
            alt={title}
          />
        ) : (
          ""
        )}

        <Header as="h1">{data.contentfulBlog.title}</Header>

        <Label.Group>
          <Label>
            <Icon name="clock outline" />
            <time dateTime={updatedAt}>{intl.formatDate(updatedAt)}</time>
          </Label>

          {tags.map(tag => (
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
        </Label.Group>

        <Segment>
          <Image
            style={{ margin: "0em 1em" }}
            src={profile}
            alt="Profile"
            size="tiny"
            verticalAlign="middle"
            avatar
          />
          {description}
        </Segment>

        <div
          style={{ marginTop: "2em" }}
          dangerouslySetInnerHTML={{
            __html: data.contentfulBlog.content.childMarkdownRemark.html,
          }}
        />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($language: String, $slug: String, $nullValue: String) {
    contentfulBlog(
      title: { ne: $nullValue }
      node_locale: { eq: $language }
      slug: { eq: $slug }
    ) {
      title
      description
      thumbnail {
        file {
          url
        }
      }
      content {
        childMarkdownRemark {
          html
        }
      }
      tags {
        name
        slug
      }
      createdAt
      updatedAt
    }
  }
`

export default BlogPost
