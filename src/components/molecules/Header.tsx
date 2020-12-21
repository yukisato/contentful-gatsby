import React from "react"
import { Link } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"
import { Container, Menu } from "semantic-ui-react"

import LanguageDropdown from "../atoms/LanguageDropdown"

// type HeaderPageContext = {
//   intl?: {
//     originalPath: string
//   }
// }

const Header: React.FC = () => {
  const intl = useIntl()
  const path = "/blog"

  return (
    <Menu inverted borderless fixed="top" size="huge">
      <Container>
        <Menu.Item header>
          <Link to={`/${intl.locale}/blog`}>
            {intl.formatMessage({ id: "blog.title" })}
          </Link>
        </Menu.Item>

        <Menu.Menu position="right">
          <LanguageDropdown />
        </Menu.Menu>
      </Container>
    </Menu>
  )
}

export default Header
