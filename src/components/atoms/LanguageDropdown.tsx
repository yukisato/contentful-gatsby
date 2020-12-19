import React from "react"
import { IntlContextConsumer, changeLocale, useIntl } from "gatsby-plugin-intl"
import { Dropdown } from "semantic-ui-react"

const LanguageDropdown: React.FC = () => {
  const intl = useIntl()

  return (
    <Dropdown item simple text={"lang: " + intl.locale} position>
      <Dropdown.Menu>
        <IntlContextConsumer>
          {({ languages, language: currentLocale }) =>
            languages.map(language => (
              <Dropdown.Item
                key={language}
                onClick={() => changeLocale(language)}
                active={currentLocale === language}
              >
                {language}
              </Dropdown.Item>
            ))
          }
        </IntlContextConsumer>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default LanguageDropdown
