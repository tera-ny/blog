import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Template } from "~/components/template/contact";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
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
        <meta property="og:image" content="https://teranyan.tokyo/images/ogp-icon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@0x746572616e79" />
      </Head>

      <Template />
    </>
  );
};

export default Contact;
