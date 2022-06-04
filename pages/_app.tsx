import { AppProps } from "next/app";
import { NextPage } from "next";
import { Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <>
      <div className="container">
        <header>
          {[
            { title: "About Me", ref: "/" },
            { title: "Contact", ref: "/contact" },
          ].map((item, index) => (
            <Fragment key={index}>
              {item.ref === router.pathname && <span>{item.title}</span>}
              {item.ref !== router.pathname && (
                <Link href={item.ref} passHref>
                  <a>
                    <span>{item.title}</span>
                  </a>
                </Link>
              )}
            </Fragment>
          ))}
        </header>
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
          font-family: "Rubik", "M PLUS Rounded 1c",sans-serif;
          margin: 0;
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
        header {
          padding: 34px 54px 0;
          display: flex;
          gap: 28px;
          font-size: 20px;
        }
        a {
          color: #000000;
        }
        a:hover {
          color: #f8ab38;
        }
        @media (max-width: 700px) {
          header {
            padding: 20px 20px 12px;
          }
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
