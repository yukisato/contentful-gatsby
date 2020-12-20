import React from "react"
import { Container, Divider, Icon, List, Segment } from "semantic-ui-react"

const Footer: React.FC = () => (
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
)

export default Footer
