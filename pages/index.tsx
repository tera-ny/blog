import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Template } from "~/components/template/top";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
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
        <meta property="og:image" content="https://teranyan.tokyo/images/ogp-icon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@0x746572616e79" />
      </Head>
      <Template />
    </>
  );
};

export default Index;
