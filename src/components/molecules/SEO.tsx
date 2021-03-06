/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"

export type SEOProps = {
  description?: string
  meta?: { name: string; content: string }[]
  title: string
}

const SEO: React.FC<SEOProps> = ({ description = ``, meta = [], title }) => {
  const intl = useIntl()
  const defaultTitle = intl.formatMessage({ id: "blog.title" })
  const defaultDescription = intl.formatMessage({ id: "blog.description" })
  const metaDescription = description || defaultDescription

  return (
    <Helmet
      htmlAttributes={{
        lang: intl.locale,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: "yukisato" || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

export default SEO
