import React from "react"
import {
  Container,
  Divider,
  Icon,
  List,
  Menu,
  Segment,
} from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import { graphql, useStaticQuery } from "gatsby"
import LanguageDropdown from "../atoms/LanguageDropdown"
import { Link, useIntl } from "gatsby-plugin-intl"
import Footer from "../molecules/Footer"
import Header from "../molecules/Header"

const FixedMenuLayout = ({ children }) => {
  const intl = useIntl()

  return (
    <div>
      <Header />

      <Container style={{ marginTop: "7em" }} fluid>
        {children}
      </Container>

      <Footer />
    </div>
  )
}

export default FixedMenuLayout
