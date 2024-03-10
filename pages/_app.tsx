import { AppProps } from "next/app";
import { NextPage } from "next";
import Header from "~/components/Header";

const contents = [
  { title: "About Me", ref: "/" },
  {
    title: "Contact",
    ref: "/contact"
  }
];

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <div className="container">
        <Header contents={contents} />
        <Component {...pageProps} />
        <hr />
        <footer>
          <p>©2022 teranyan</p>
        </footer>
      </div>
      <style jsx global>
        {`
          h1,
          h2,
          h3,
          h4,
          h5,
          p,
          a,
          img {
            margin: 0;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          p,
          html,
          body {
            font-family: "Rubik", "M PLUS Rounded 1c", sans-serif;
            margin: 0;
          }

          h1,
          h2,
          h3 {
            font-weight: 500;
          }
          h4 {
            font-weight: 300;
          }
          h1 {
            padding-top: 4px;
            font-size: 24px;
          }
          h2 {
            padding-top: 4px;
            padding-bottom: 0;
          }
          p {
            font-size: 14px;
            color: #494949;
          }
        `}
      </style>
      <style jsx>
        {`
          .container {
            min-height: 100vh;
            display: grid;
            grid-template-rows: 58px auto 1px 38px;
          }
          hr {
            margin: 0 28px;
          }
          footer {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 12px;
            font-weight: 300;
            padding: 12px;
            justify-content: space-around;
          }
          @media (max-width: 700px) {
            hr {
              margin: 0 12px;
            }
          }
        `}
      </style>
    </>
  );
};

export default MyApp;
