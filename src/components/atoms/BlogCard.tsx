import React from "react"
import { Card, Image } from "semantic-ui-react"
import { useIntl } from "gatsby-plugin-intl"

export type BlogCardProps = {
  slug: string
  title: string
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
        <Card.Meta>
          <span className="date">{updatedAt}</span>
        </Card.Meta>
      </Card.Content>
    </Card>
  )
}

export default BlogCard
