import Image from "next/image";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>teranyan/Frontend engineer</title>
        <meta property="og:title" content="teranyan/Frontend engineer" />
        <meta property="og:description" content="🐏" />
        <meta property="og:locale" content="ja" />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://teranyan.tokyo/images/ogp-icon.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@0x746572616e79" />
      </Head>
      <main>
        <h2>Profile</h2>
        <div className="container">
          <div className="primary">
            <div className="imageWrapper">
              <Image src="/images/icon.png" layout="fill" />
            </div>
            <h1>teranyan</h1>
            <p>Web front & iOS Engineer</p>
          </div>
          <div className="secondary">
            <h3>Skill-set</h3>
            <section>
              <h4>languages:</h4>
              <p>Swift, Typescript, Python</p>
            </section>
            <section>
              <h4>tools,libraries:</h4>
              <p>Swift UI, RxSwift, React.js, Next.js, Django, MySQL</p>
            </section>
            <section>
              <h4>others:</h4>
              <p>Firebase, Google Cloud Platform, Vercel, Git, Github, figma</p>
            </section>
          </div>
        </div>
        <div className="portfolios">
          <h2>Portfolio</h2>
          <section>
            <div className="portfolio">
              <Link href={"https://www.ramblel.com/"}>
                <a target={"_blank"} rel="noreferrer noopener">
                  <Image
                    src={"/images/uzu_homepage.png"}
                    width={400}
                    height={250}
                    layout="responsive"
                  />
                  <h4>ramblel.com/</h4>
                </a>
              </Link>
            </div>
          </section>
        </div>
      </main>
      <style jsx>{`
        main {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px 12px;
          gap: 80px;
        }
        main > div {
          width: 100%;
          max-width: 1600px;
        }
        .container {
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
          width: 240px;
          aspect-ratio: 1/1;
        }
        .secondary {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .secondary > section {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        section > h3 {
          padding-left: 8px;
          color: #2e2e2e;
          font-size: 20px;
        }
        section > p {
          padding-left: 20px;
        }

        a {
          color: black;
        }

        .portfolios > section {
          display: grid;
          padding-top: 40px;
          grid-template-columns: repeat(auto-fit, 250px);
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .portfolios > h2 {
          text-align: center;
        }

        .portfolio {
          background-color: white;
          padding: 8px;
          filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2));
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
        @media (max-width: 700px) {
          .container {
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
            width: 100%;
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
          }
          section > h3 {
            font-weight: 300;
            padding-left: 0;
            color: #2e2e2e;
          }
          section > p {
            padding-left: 12px;
          }
        }
      `}</style>
    </>
  );
};

export default Index;
