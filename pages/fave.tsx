import { NextPage } from "next";
import NextHead from "next/head";

const Page: NextPage = () => {
  return (
    <>
      <NextHead>
        <title>
          推し活
        </title>
        <meta name={"description"} content={"最近いいなと思っているクリエイター。"} />
      </NextHead>
      <main>
        <h2>推し活</h2>
        <div>
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/videoseries?list=PL3UyMWClxhTyk0CKmfP40BL46DMI-MZAb" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </main>
      <style jsx>{`
        main {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 40px;
          padding: 20px;
          box-sizing: border-box;
        }
        div {
          aspect-ratio: 16 / 9;
          width: 100%;
          max-width: 560px;
        }
        div iframe {
          width: 100%;
          height: 100%;
        }
        `}</style>
    </>
  );
};

export default Page;
