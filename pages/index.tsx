import Link from "next/link";
import * as React from "react";
import Image from "next/image";

export default () => {
  return (
    <>
      <div className="container">
        <header>
          <span>About Me</span>
          <Link href={"/contact"}>
            <a>
              <span>Contact</span>
            </a>
          </Link>
        </header>
        <main>
          <div className="primary">
            <div className="imageWrapper">
              <Image src="/images/icon.png" layout="fill" />
            </div>
            <h1>teranyan</h1>
            <p>Web front & iOS Engineer</p>
          </div>
          <div className="secondary">
            <h2>Skill-set</h2>
            <section>
              <h3>languages:</h3>
              <p>Swift, Typescript, Python</p>
            </section>
            <section>
              <h3>tools,libraries:</h3>
              <p>Swift UI, RxSwift, React.js, Next.js, Django, MySQL</p>
            </section>
            <section>
              <h3>others:</h3>
              <p>Firebase, Google Cloud Platform, Vercel, Git, Github, figma</p>
            </section>
          </div>
        </main>
        <hr />
        <footer>2022 teranyan</footer>
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-rows: 58px 1fr 1px 34px;
          min-height: 100vh;
        }
        header {
          padding: 34px 54px 0;
          display: flex;
          gap: 28px;
        }
        main {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
        }
        .primary {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        .imageWrapper {
          position: relative;
          max-width: 240px;
          width: 100%;
          aspect-ratio: 1/1;
        }
        .secondary {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .secondary > h2 {
          padding-bottom: 4px;
        }
        section {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        section > h3 {
          padding-left: 8px;
          color: #2e2e2e;
        }
        section > p {
          padding-left: 20px;
        }
        footer {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          font-weight: 300;
        }

        h1,
        h2,
        h3 {
          font-weight: 500;
        }
        h1 {
          padding-top: 4px;
          font-size: 24px;
        }
        p {
          font-size: 14px;
          color: #494949;
        }
        a {
          color: #696969;
        }
        a:hover {
          color: #f8ab38;
        }
        hr {
          margin: 0 28px;
        }
        @media (max-width: 700px) {
          header {
            padding: 20px 20px 12px;
          }
          main {
            flex-direction: column;
            padding: 0 12px;
            gap: 32px;
            text-align: center;
          }
          main > * {
            max-width: 400px;
          }
          .imageWrapper {
            max-width: unset;
          }
          .primary {
            width: 100%;
            justify-content: stretch;
            align-items: stretch;
          }
          .secondary {
            width: 100%;
            padding-bottom: 20px;
            gap: 32px;
          }
          .secondary > h2 {
            font-size: 20px;
            padding-bottom: 0;
          }
          section > h3 {
            font-weight: 300;
            padding-left: 0;
            color: #2e2e2e;
          }
          section > p {
            padding-left: 12px;
          }
          hr {
            margin: 0 12px;
          }
        }
      `}</style>
    </>
  );
};
