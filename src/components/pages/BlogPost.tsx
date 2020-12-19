import React from "react"
import Layout from "../templates/Layout"
import { graphql, PageProps } from "gatsby"
import SEO from "../molecules/SEO"
import { Container, Header, Icon, Image, Label } from "semantic-ui-react"
import { useIntl } from "gatsby-plugin-intl"

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
  const intl = useIntl()
  const { title, updatedAt, description = `` } = data.contentfulBlog
  const thumbnailURL =
    data.contentfulBlog.thumbnail?.file?.url ?? "fallback.jpg"
  const tags = data.contentfulBlog.tags ?? []

  if (!data.contentfulBlog.title) return <Layout>404</Layout>

  return (
    <Layout>
      <SEO title={title} description={description} />
      <Image width="100%" src={thumbnailURL} alt="Title Image" />
      <Header as="h1">{data.contentfulBlog.title}</Header>
      <Label.Group tag>
        {tags.map(tag => (
          <Label as="a" href={`/blog/tag/${tag.slug}`}>
            {tag.name}
          </Label>
        ))}
      </Label.Group>
      {description}
      <Label>
        <Icon name="clock outline" />
        {intl.formatDate(updatedAt)}
      </Label>
      <div
        dangerouslySetInnerHTML={{
          __html: data.contentfulBlog.content.childMarkdownRemark.html,
        }}
      />
    </Layout>
  )
}

export const query = graphql`
  query($language: String, $slug: String) {
    contentfulBlog(node_locale: { eq: $language }, slug: { eq: $slug }) {
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
