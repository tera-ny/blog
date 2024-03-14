import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import AnchorLink from "~/components/anchor-link";

import portfolio0 from "~/medias/portfolio0.webp"
import portfolio1 from "~/medias/portfolio1.webp"
import portfolio2 from "~/medias/portfolio2.webp"
import activity0 from "~/medias/activity0.webp"
import icon from "~/medias/icon.webp"

import * as styles from "./styles.css";

export default component$(() => {
  return (
    <main class={styles.main}>
    <div class={styles.container}>
    <div class={styles.profile}>
      <img class={styles.image} src={icon} width={180} height={180} alt="icon" />
      <h1>haruta🐏</h1>
      <p>Web frontend & iOS Application Engineer</p>
    </div>
      <div class={styles.secondary}>
        <p>iOSアプリメインで時々Webフロントエンドを書いています。デザインも少し。</p>
        <h3 class={styles.subTitle}>Skill-set</h3>
        <section class={styles.section}>
          <h4>languages:</h4>
          <p>Swift, Typescript, Javascript, Python, Ruby</p>
        </section>
        <section class={styles.section}>
          <h4>keywords:</h4>
          <p>
            Swift UI, UIKit, RxSwift, React.js, Next.js, qwik, vanilla-extract, Django, FastAPI,
            Ruby on Rails, AWS, GCP
          </p>
        </section>
      </div>
    </div>
    <div class={styles.portfolioContainer}>
      <h2 class={styles.title}>Portfolio & Activity</h2>
      <section class={styles.portfolios}>
        <article class={styles.portfolio}>
          <AnchorLink href="https://ramblel.vercel.app">
            <img src={portfolio0} alt="ramblel.vercel.app" width={234} height={146.25} />
          </AnchorLink>
        </article>
        <article class={styles.portfolio}>
          <AnchorLink href="https://zenn.dev/tera_ny/articles/fe2f6da2954e76">
            <img
              src={activity0}
              alt="GCPで完結する動画配信サービスの設計と実装"
              width={234}
              height={117}
            />
          </AnchorLink>
        </article>
        <article class={styles.portfolio}>
          <AnchorLink href="https://github.com/tera-ny/Raspberry-Juice">
            <img src={portfolio1} alt="Raspberry Juice" width={234} height={117} />
          </AnchorLink>
        </article>
        <article class={styles.portfolio}>
          <AnchorLink href="https://github.com/tera-ny/couscous">
            <img src={portfolio2} alt="couscous" width={234} height={117} />
          </AnchorLink>
        </article>
      </section>
    </div>
  </main>
  );
});

export const head: DocumentHead = {
  title: "haruta's homepage",
  meta: [
    {
      property: "og:title",
      content: "haruta's homepage",
    },
    {
      property: "og:description",
      content: "🐏",
    },
    {
      property: "og:locale",
      content: "ja",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:image",
      content: "https://teranyan.me/ogp-icon.webp",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:site",
      content: "@0x746572616e79",
    },
  ],
};
