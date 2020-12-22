import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import { Card, Image } from "semantic-ui-react"

import profile from "../../images/profile.jpg"

const ProfileCard: React.FC = () => {
  const intl = useIntl()

  return (
    <Card fluid>
      <Card.Content>
        <Image
          src={profile}
          alt="Profile"
          floated="left"
          size="mini"
          circular
        />
        <Card.Header>
          {intl.locale === "ja" ? "Yuki Sato" : "Yuki Sato"}
        </Card.Header>
        <Card.Meta>
          {intl.locale === "ja" ? "Web Developer" : "Backend Developer"}
        </Card.Meta>
        <Card.Description>
          {intl.locale === "ja" ? (
            <>
              <p>バンクーバーでバックエンドデベロッパーをしています。</p>
              <p>
                また現地でWebコンサルティンググループ{" "}
                <a href="https://jpweb.ca/" target="_blank">
                  JP Web Solutions
                </a>{" "}
                の代表として現地企業のビジネスサポートを行なっています。
              </p>
            </>
          ) : (
            <>
              <p>Developer who loves techs and challengings in Canada.</p>
              <p>
                Also run a local web consulting group{" "}
                <a href="https://jpweb.ca/" target="_blank">
                  JP Web Solutions
                </a>{" "}
                (*Japanse site)
              </p>
              <p>
                I write articles for outputting my learnings to memorize. I'm
                glad if they help you as references.
              </p>
            </>
          )}
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

export default ProfileCard
