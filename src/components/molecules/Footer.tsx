import React from "react"
import { Container, Divider, Icon, List, Segment } from "semantic-ui-react"

const Footer: React.FC = () => (
  <Segment
    inverted
    vertical
    style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
  >
    <Container textAlign="center">
      <a href="https://github.com/yukisato" target="_blank">
        <Icon color="teal" inverted name="github" size="big" />
      </a>
      <a href="https://twitter.com/yukisato_dev" target="_blank">
        <Icon color="teal" inverted name="twitter" size="big" />
      </a>
      <a href="https://www.linkedin.com/in/yuki-sato/" target="_blank">
        <Icon color="teal" inverted name="linkedin" size="big" />
      </a>
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
      Yuki Sato All Rights Reserved.
    </Container>
  </Segment>
)

export default Footer
