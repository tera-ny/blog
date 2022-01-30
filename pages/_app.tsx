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
                <Link href={item.ref}>
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
      <style jsx>{`
        .player {
          display: flex;
          gap: 12px;
          align-items: stretch;
          position: fixed;
          right: 12px;
          bottom: 20px;
          padding: 12px 12px;

          color: white;
          background-color: rgb(27, 27, 27);
          filter: drop-shadow(4px 4px 2px rgba(0, 0, 0, 0.2));
          will-change: filter;
          border-radius: 8px;
          height: 96px;
        }
        .content {
          width: 120px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          justify-content: flex-start;
          align-items: flex-start;
        }
        .caption {
          font-size: 10px;
        }
        .title {
          font-size: 14px;
        }
        .toggleButton {
          font-size: 12px;
          padding: 4px 8px;
          margin: 0;
          width: 54px;
          height: 24px;
        }
        .volumeWrapper {
          width: 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .volume {
          grid-column: 2/3;
          grid-row: 1/3;
          transform: rotate(270deg) translateX(-30px);
          width: 60px;
        }
        input[type="range"] {
          -webkit-appearance: none;
          appearance: none;
          cursor: pointer;
          outline: none;
          height: 12px;
          background: #f8ab38;
          border-radius: 10px;
          border: solid 3px #f8e7cd;
        }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 20px;
          -webkit-appearance: none;
          border-radius: 50%;
          height: 20px;
          cursor: ew-resize;
          background: white;
        }

        .container {
          min-height: 100vh;
          display: grid;
          grid-template-rows: 58px 1fr 1px auto;
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
      `}</style>
    </>
  );
};

export default MyApp;
