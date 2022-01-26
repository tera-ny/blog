import Link from "next/link";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>teranyan/Contact me</title>
        <meta property="og:title" content="teranyan/Contact me" />
        <meta property="og:description" content="🐏" />
        <meta property="og:locale" content="ja" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/ogp-icon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@0x746572616e79" />
      </Head>
      <div className="container">
        <header>
          <Link href={"/"}>
            <a>
              <span>About Me</span>
            </a>
          </Link>
          <span>Contact</span>
        </header>
        <main>
          <section>
            <h3>Portfolio</h3>
            <Link href={"https://github.com/tera-ny"}>
              <a target={"_blank"} rel="noreferrer noopener">
                Github @tera-ny
              </a>
            </Link>
            <Link href={"https://zenn.dev/tera_ny"}>
              <a target={"_blank"} rel="noreferrer noopener">
                Zenn @tera_ny
              </a>
            </Link>
          </section>
          <section>
            <h3>SNS</h3>
            <Link href={"https://twitter.com/0x746572616e79"}>
              <a target={"_blank"} rel="noreferrer noopener">
                Twitter @0x746572616e79
              </a>
            </Link>
          </section>
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
          font-size: 20px;
        }

        footer {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          font-weight: 300;
        }

        main {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 80px;
        }

        main > section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
        }

        section a {
          font-size: 18px;
        }

        h1,
        h2,
        h3 {
          font-weight: 500;
        }
        h3 {
          font-size: 24px;
        }
        a {
          color: #000000;
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
          hr {
            margin: 0 12px;
          }
        }
      `}</style>
    </>
  );
};

export default Contact;
