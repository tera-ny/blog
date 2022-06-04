import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import AnchorLink from "~/components/AnchorLink";

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
        <meta
          property="og:image"
          content="https://teranyan.tokyo/images/ogp-icon.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@0x746572616e79" />
      </Head>

      <main>
        <section>
          <h3>Activities</h3>
          <AnchorLink href="https://github.com/tera-ny">
            Github @tera-ny
          </AnchorLink>
          <AnchorLink href="https://zenn.dev/tera_ny">Zenn @tera_ny</AnchorLink>
        </section>
        <section>
          <h3>SNS</h3>
          <AnchorLink href="https://discord.com/invite/hXryf5PKAy">
            Twitter @0x746572616e79
          </AnchorLink>
          <AnchorLink href="https://discord.com/invite/hXryf5PKAy">
            Discord &quot;Anchor&quot; server @teranyan
          </AnchorLink>
        </section>
      </main>
      <style jsx>
        {`
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

        a {
          color: #000000;
        }
        a:hover {
          color: #f8ab38;
        }

        h1,
        h2,
        h3 {
          font-weight: 500;
        }
        h3 {
          font-size: 24px;
        }
      `}
      </style>
    </>
  );
};

export default Contact;
