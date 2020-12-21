import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import { Container, Divider, Header } from "semantic-ui-react"

import ProfileCard from "../components/atoms/ProfileCard"
import Layout from "../components/templates/Layout"
import SEO from "../components/molecules/SEO"

const About = () => {
  const intl = useIntl()

  return (
    <Layout>
      <SEO title="About this blog" />

      <Container text>
        <Header as="h1">About This Blog</Header>

        {intl.locale === "ja" ? (
          <>
            <p>
              このブログは私 Yuki
              が学んだ技術を共有したりアウトプットする場として開設しました。また、海外在住（カナダ）の技術者として、就労環境やコミュニティなどについても触れられたら良いかなと思っております。
            </p>
            <p>
              技術記事については「說明できないことは分からないことと同義」という気持ちで、アウトプットしている記事も極力わかりやすく書いているつもりです。
            </p>
            <p>
              たぶんブログをはじめるにあたっては
              Qiitaとか流行りのブログサービスに書くほうが手っ取り早いのでしょうが、このブログのデザインを制作することそのものや、あまりなじみがなかった技術
              (Gatsby, GraphQL, Contentfulなどの組み合わせ)
              を学ぶこともモチベーションとなり作成しました。
            </p>
            <p>
              最後に、本ブログに興味を持っていただきありがとうございます。記事があなたのお役に立てましたら幸いです。
            </p>
          </>
        ) : (
          <>
            <p>
              Hi, I'm Yuki. This blog is built for outputing my knowledge and
              tips. Also I write some about communities, work environment, and
              productivity. I hope this works well for you.
            </p>
            <p>
              Tech blogs are written with a telling of my favorite quote{" "}
              <q>
                "You do not really understand something unless you can explain
                it to your grandmother."
              </q>
              . So I write articles as plain as possible. I hope they help you
              and you like them.
            </p>
            <p>Sincinery,</p>
            <p>Yuki</p>
          </>
        )}

        <Divider inverted section />

        <ProfileCard />
      </Container>
    </Layout>
  )
}

export default About
