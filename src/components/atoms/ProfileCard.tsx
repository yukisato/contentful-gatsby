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
        <Card.Header>{intl.formatMessage({ id: "profile.name" })}</Card.Header>
        <Card.Meta>{intl.formatMessage({ id: "profile.position" })}</Card.Meta>
        <Card.Description>
          <p>
            大学卒業後にWeb開発者として8年半勤務。30歳でカナダに渡り現地企業での就職を果たし、3年後に永住権を取得。
          </p>
          <p>
            2020年に現地企業を対象としたWebコンサルティンググループ JP Web
            Solutions を立ち上げ、フリーランス開発者を束ねて。
          </p>
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

export default ProfileCard
