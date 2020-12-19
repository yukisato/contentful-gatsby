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
  const thumbnailURL = thumbnail?.file?.url ?? "fallback.jpg"

  return (
    <Card href={`/${intl.locale}/blog/${slug}`}>
      <Image src={thumbnailURL} wrapped ui={false} />

      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Description>{description}</Card.Description>
        <Card.Meta>
          <Icon name="clock outline" />
          <span className="date">{intl.formatDate(updatedAt)}</span>
        </Card.Meta>
      </Card.Content>
    </Card>
  )
}

export default BlogCard
