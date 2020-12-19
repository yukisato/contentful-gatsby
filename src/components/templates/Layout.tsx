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

const FixedMenuLayout = ({ children }) => {
  const intl = useIntl()
  const title = intl.formatMessage({ id: "blog.title" })

  return (
    <div>
      <Menu fixed="top" inverted>
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

      <Container text style={{ marginTop: "5em" }}>
        {children}
      </Container>

      <Segment
        inverted
        vertical
        style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
      >
        <Container textAlign="center">
          <Icon color="teal" inverted name="github" size="big" />
          <Icon color="teal" inverted name="twitter" size="big" />
          <Icon
            color="teal"
            inverted
            name="linkedin"
            size="big"
            href="https://www.linkedin.com/in/yuki-sato/"
          />

          <Divider inverted section />

          <List horizontal inverted divided link size="small">
            <List.Item as="a" href="#">
              Site Map
            </List.Item>
            <List.Item as="a" href="#">
              Contact Us
            </List.Item>
            <List.Item as="a" href="#">
              Terms and Conditions
            </List.Item>
            <List.Item as="a" href="#">
              Privacy Policy
            </List.Item>
          </List>
        </Container>
      </Segment>
    </div>
  )
}

export default FixedMenuLayout
