import { AppProps } from "next/app";
import { NextPage } from "next";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
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
          font-family: "Rubik", sans-serif;
          margin: 0;
        }
      `}</style>
    </>
  );
};

export default MyApp;
