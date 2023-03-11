import Image from "next/image";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import AnchorLink from "~/components/AnchorLink";
import Profile from "~/components/Profile";
import portfolio0 from "~/public/images/portfolio0.png";
import activity0 from "~/public/images/activity0.png";
import portfolio1 from "~/public/images/portfolio1.png";
import portfolio2 from "~/public/images/portfolio2.png";

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
          <Profile />
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
          <h2>Portfolio & Activity</h2>
          <section>
            <article className="portfolio">
              <AnchorLink href="https://www.ramblel.com/">
                <Image
                  src={portfolio0}
                  width={400}
                  height={250}
                  layout="responsive"
                  alt="ramblel.com"
                />
              </AnchorLink>
            </article>
            <article className="portfolio">
              <AnchorLink href="https://zenn.dev/tera_ny/articles/fe2f6da2954e76">
                <Image
                  src={activity0}
                  width={600}
                  height={315}
                  layout="responsive"
                  alt="GCPで完結する動画配信サービスの設計と実装"
                />
              </AnchorLink>
            </article>
            <article className="portfolio">
              <AnchorLink href="https://github.com/tera-ny/Raspberry-Juice">
                <Image
                  src={portfolio1}
                  width={600}
                  height={300}
                  layout="responsive"
                  alt="Raspberry Juice"
                />
              </AnchorLink>
            </article>
            <article className="portfolio">
              <AnchorLink href="https://github.com/tera-ny/couscous">
                <Image
                  src={portfolio2}
                  width={600}
                  height={300}
                  layout="responsive"
                  alt="couscous"
                />
              </AnchorLink>
            </article>
          </section>
        </div>
      </main>
      <style jsx>
        {`
        main {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 40px 20px;
          gap: 80px;
        }
        main > div {
          width: 100%;
          max-width: 1200px;
        }
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: flex-start;
        }
        
        .secondary {
          display: flex;
          flex-direction: column;
          justify-self: center;
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

        .portfolios > section {
          display: grid;
          padding-top: 40px;
          grid-template-columns: repeat(auto-fit, 250px);
          justify-content: center;
          align-items: flex-start;
          width: 100%;
          gap: 20px;
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
      `}
      </style>
    </>
  );
};

export default Index;
