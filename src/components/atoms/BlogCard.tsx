import React from "react"
import { Card, Icon, Image, Label } from "semantic-ui-react"
import { useIntl } from "gatsby-plugin-intl"

export type BlogCardProps = {
  slug: string
  title: string
  description: string
  thumbnail?: {
    file?: {
      url?: string
    }
  }
  updatedAt: string
}

const BlogCard: React.FC<BlogCardProps> = ({
  slug,
  title,
  description,
  updatedAt,
  thumbnail = null,
}) => {
  const intl = useIntl()
  const thumbnailURL = thumbnail?.file?.url

  return (
    <Card href={`/${intl.locale}/blog/${slug}`} fluid>
      {thumbnailURL ? (
        <Image src={thumbnailURL} alt={title} wrapped ui={false} />
      ) : (
        ""
      )}

      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          {intl.formatDate(updatedAt, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
    </Card>
  )
}

export default BlogCard
