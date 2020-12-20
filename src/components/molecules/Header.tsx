import { Link } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"
import React from "react"
import { Container, Menu, Segment } from "semantic-ui-react"
import LanguageDropdown from "../atoms/LanguageDropdown"

const Header = () => {
  const intl = useIntl()
  const title = intl.formatMessage({ id: "blog.title" })

  return (
    <Menu inverted borderless fixed="top" size="huge">
      <Container>
        <Menu.Item header>
          <Link to="/">{title}</Link>
        </Menu.Item>
        <Menu.Item active={true}>
          <Link to="/blog">Blog</Link>
        </Menu.Item>
        <Menu.Item as="a" href="/me">
          Me
        </Menu.Item>

        <Menu.Menu position="right">
          <LanguageDropdown />
        </Menu.Menu>
      </Container>
    </Menu>
  )
}

export default Header
