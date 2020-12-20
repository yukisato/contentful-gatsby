import React from "react"

import Layout from "../components/templates/Layout"
import SEO from "../components/molecules/SEO"
import { useIntl } from "gatsby-plugin-intl"
import { Container, Image } from "semantic-ui-react"
import profile from "../images/profile.png"

const About = () => {
  // const intl = useIntl()

  return (
    <Layout>
      <SEO title="About this blog" />

      <Container text>
        <Image src={profile} alt="Profile" size="small" floated="left" />
        <p>Hoge fuga</p>
      </Container>
    </Layout>
  )
}

export default About
