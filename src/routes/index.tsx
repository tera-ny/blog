import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import AnchorLink from "~/components/anchor-link";

import portfolio0 from "~/medias/portfolio0.webp"
import portfolio1 from "~/medias/portfolio1.webp"
import portfolio2 from "~/medias/portfolio2.webp"
import activity0 from "~/medias/activity0.webp"
import icon from "~/medias/icon.webp"

import * as styles from "~/components/page/styles.css";

export default component$(() => {
  return (
    <main class={styles.main}>
      <div class={styles.container}>
        <div class={styles.profile}>
          <img class={styles.image} src={icon} width={180} height={180} alt="icon" />
          <h1>haruta🐏</h1>
          <p>Web frontend & iOS Application Engineer</p>
          <p>Cookpad Inc. 2024/04~</p>
        </div>
        <div class={styles.secondary}>
          <p>iOSアプリメインで時々Webフロントエンドを書いています。デザインも少し。</p>
          <h3 class={styles.subTitle}>Skill-set</h3>
          <div class={styles.secondaryItems}>
            <h4>languages:</h4>
            <p>Swift, Typescript, Javascript, Python, Ruby</p>
          </div>
          <div class={styles.secondaryItems}>
            <h4>keywords:</h4>
            <p>
              Swift UI, UIKit, RxSwift, React.js, Next.js, qwik, vanilla-extract, Django, FastAPI,
              Ruby on Rails, AWS, GCP
            </p>
          </div>
        </div>
      </div>
      <section class={styles.section}>
        <h2 class={styles.title}>History</h2>
        <ul class={styles.histories}>
          <li class={styles.history}>2024/04~: Cookpad Inc. Software engineer</li>
          <li class={styles.history}>2019/06~2024/03: Cookpad Inc. Software engineering interns</li>
          <li class={styles.history}>2019/04~2024/03: Faculty of Information Networking for Innovation and Design, Toyo University</li>
        </ul>
      </section>
      <section class={styles.section}>
        <h2 class={styles.title}>Portfolio & Activity</h2>
        <div class={styles.portfolios}>
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
        </div>
      </section>
    </main>
  );
});

export const head: DocumentHead = {
  title: "haruta - teranyan.me",
  meta: [
    {
      property: "og:title",
      content: "haruta - teranyan.me",
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
      content: "https://teranyan.me/ogp-icon.jpg",
    },
    {
      name: "twitter:card",
      content: "summary",
    },
    {
      name: "twitter:site",
      content: "@0x746572616e79",
    },
  ],
};
