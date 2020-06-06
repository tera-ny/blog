import Profile from "~/components/organisms/Profile";
import Head from "next/head";
import Header from "~/components/organisms/Header";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { AppProps } from "next/app";
import * as React from "react";
import json from "~/metaData.json";

const Contents = styled.div`
  max-width: 1000px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Noto Sans JP";
  }
  h1 {
    font-size: 25px;
    padding-top: 17px;
    padding-bottom: 20px;
    word-wrap: break-word;
  }
  h2 {
    font-size: 20px;
    padding-top: 15px;
    padding-bottom: 18px;
    word-wrap: break-word;
  }
  p {
    font-size: 16px;
    line-height: 25px;
    margin: 1em 0px;
    word-wrap: break-word;
  }
`;

const Main = styled.main`
  padding-bottom: 30px;
`;

const App = ({ Component, pageProps, router }: AppProps) => {
  const path = router.pathname;
  const metaDatas: { [key: string]: any } = json;
  const metaData = metaDatas[path];
  return (
    <React.Fragment>
      <GlobalStyle />
      <Head>
        <meta charSet="utf-8" />
        {metaData === undefined && path === "/" && (
          <React.Fragment>
            <title>てらにゃんの備忘録</title>
            <meta property="og:title" content="てらにゃんの備忘録" />
            <meta
              name="description"
              content="日々学んだことを書き留めておくためのテック&雑ブログ"
            />
            <meta
              property="og:description"
              content="日々学んだことを書き留めておくためのテック&雑ブログ"
            />
          </React.Fragment>
        )}
        {metaData !== undefined && (
          <React.Fragment>
            {metaData.title !== undefined && (
              <React.Fragment>
                <title>{metaData.title}</title>
                <meta property="og:title" content={metaData.title} />
              </React.Fragment>
            )}
            {metaData.description !== undefined && (
              <React.Fragment>
                <meta name="description" content={metaData.description} />
                <meta
                  property="og:description"
                  content={metaData.description}
                />
              </React.Fragment>
            )}
          </React.Fragment>
        )}
        <meta property="og:site_name" content="てらにゃんの備忘録" />
        <meta property="og:locale" content="ja_JP" />
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans+JP"
          rel="stylesheet"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@tera_ny" />
      </Head>
      <Header />
      <Contents>
        <Main>
          <Component {...pageProps} />
        </Main>
        <Profile />
      </Contents>
    </React.Fragment>
  );
};

export default App;
