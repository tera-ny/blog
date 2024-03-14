import AnchorLink from "~/components/AnchorLink";
import Profile from "~/components/Profile";

import portfolio0 from "~/public/images/portfolio0.png";
import activity0 from "~/public/images/activity0.png";
import portfolio1 from "~/public/images/portfolio1.png";
import portfolio2 from "~/public/images/portfolio2.png";

import * as styles from "./styles.css";

export const Template = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Profile />
        <div className={styles.secondary}>
          <p>iOSアプリメインで時々Webフロントエンドを書いています。デザインも少し。</p>
          <h3 className={styles.subTitle}>Skill-set</h3>
          <section className={styles.section}>
            <h4>languages:</h4>
            <p>Swift, Typescript, Javascript, Python, Ruby</p>
          </section>
          <section className={styles.section}>
            <h4>keywords:</h4>
            <p>
              Swift UI, UIKit, RxSwift, React.js, Next.js, qwik, vanilla-extract, Django, FastAPI,
              Ruby on Rails, AWS, GCP
            </p>
          </section>
        </div>
      </div>
      <div className={styles.portfolioContainer}>
        <h2 className={styles.title}>Portfolio & Activity</h2>
        <section className={styles.portfolios}>
          <article className={styles.portfolio}>
            <AnchorLink href="https://ramblel.vercel.app">
              <img src={portfolio0.src} alt="ramblel.vercel.app" width={234} height={146.25} />
            </AnchorLink>
          </article>
          <article className={styles.portfolio}>
            <AnchorLink href="https://zenn.dev/tera_ny/articles/fe2f6da2954e76">
              <img
                src={activity0.src}
                alt="GCPで完結する動画配信サービスの設計と実装"
                width={234}
                height={117}
              />
            </AnchorLink>
          </article>
          <article className={styles.portfolio}>
            <AnchorLink href="https://github.com/tera-ny/Raspberry-Juice">
              <img src={portfolio1.src} alt="Raspberry Juice" width={234} height={117} />
            </AnchorLink>
          </article>
          <article className={styles.portfolio}>
            <AnchorLink href="https://github.com/tera-ny/couscous">
              <img src={portfolio2.src} alt="couscous" width={234} height={117} />
            </AnchorLink>
          </article>
        </section>
      </div>
    </main>
  );
};
