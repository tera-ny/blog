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
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/videoseries?list=PL3UyMWClxhTyk0CKmfP40BL46DMI-MZAb"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          >
          </iframe>
        </div>
        <iframe
          allow="autoplay *; encrypted-media *;"
          frameBorder="0"
          height="450"
          style={{
            width: "100%",
            maxWidth: "560px",
            overflow: "hidden",
            background: "transparent",
          }}
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.music.apple.com/profile/teranyanhttps://embed.music.apple.com/jp/playlist/%E3%83%95%E3%82%A7%E3%82%A4%E3%83%90%E3%83%AA%E3%83%83%E3%83%88-%E3%83%9F%E3%83%83%E3%82%AF%E3%82%B9/pl.pm-d5779e520ff52d7fd4c4c4a054b0e761"
        >
        </iframe>
      </main>
      <style jsx>
        {`
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
        `}
      </style>
    </>
  );
};

export default Page;
