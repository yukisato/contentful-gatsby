import React from "react"

import Layout from "../components/templates/Layout"
import SEO from "../components/molecules/SEO"
import { Container } from "semantic-ui-react"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <Container text>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </Layout>
)

export default NotFoundPage
