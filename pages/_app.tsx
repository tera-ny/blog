import Profile from "~/components/organisms/Profile";
import Head from "~/components/organisms/Head";
import Header from "~/components/organisms/Header";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { AppProps } from "next/app";
import * as React from "react";

const Contents = styled.div`
  max-width: 1000px;
  width: 90%;
  margin: 0px auto;
`;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Noto Sans JP"
  }
  h1 {
    font-size: 25px;
    padding-top: 17px;
    padding-bottom: 20px;
  }
  h2 {
    font-size: 20px;
    padding-top: 15px;
    padding-bottom: 18px;
  }
  p {
    font-size: 16px;
    line-height: 25px;
    margin: 1em 0px;
    white-space: pre;
  }
`;

const Main = styled.main`
  padding-bottom: 30px;
  word-wrap: break-word;
`;

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Head />
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
