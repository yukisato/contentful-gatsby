import React from "react"

import Layout from "../components/templates/Layout"
import SEO from "../components/molecules/SEO"
import { Button, Container, Header, Icon, Segment } from "semantic-ui-react"
import { useIntl } from "gatsby-plugin-intl"

const NotFoundPage = () => {
  const intl = useIntl()

  return (
    <Layout>
      <SEO
        title="404: Not found"
        meta={[{ name: "robots", content: "noindex, nofollow" }]}
      />

      <Container text>
        <Segment placeholder>
          <Header icon>
            <h1>404: Not Found</h1>
            <Icon name="broken chain" />
            Sorry, there's no page in{" "}
            {intl.locale === "ja" ? "Japanese" : "English"}.
          </Header>
          <Button color="vk" as="a" href={`/${intl.locale}/blog/`}>
            GO BACK
          </Button>
        </Segment>
      </Container>
    </Layout>
  )
}

export default NotFoundPage
