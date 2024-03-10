import AnchorLink from "~/components/AnchorLink";
import Image from "next/image";
import Profile from "~/components/Profile";

import portfolio0 from "~/public/images/portfolio0.png";
import activity0 from "~/public/images/activity0.png";
import portfolio1 from "~/public/images/portfolio1.png";
import portfolio2 from "~/public/images/portfolio2.png";

import * as styles from "./styles.css";

export const Template = () => {
  return (
    <main className={styles.main}>
      <h2 className={styles.title}>Profile</h2>
      <div className={styles.container}>
        <Profile />
        <div className={styles.secondary}>
          <h3 className={styles.subTitle}>Skill-set</h3>
          <section className={styles.section}>
            <h4>languages:</h4>
            <p>Swift, Typescript, Python</p>
          </section>
          <section className={styles.section}>
            <h4>tools,libraries:</h4>
            <p>Swift UI, RxSwift, React.js, Next.js, Django, MySQL</p>
          </section>
          <section className={styles.section}>
            <h4>others:</h4>
            <p>Firebase, Google Cloud Platform, Vercel, Git, Github, figma</p>
          </section>
        </div>
      </div>
      <div className={styles.portfolioContainer}>
        <h2 className={styles.title}>Portfolio & Activity</h2>
        <section className={styles.portfolios}>
          <article className={styles.portfolio}>
            <AnchorLink href="https://ramblel.vercel.app">
              <Image src={portfolio0} alt="ramblel.vercel.app" width={234} height={146.25} />
            </AnchorLink>
          </article>
          <article className={styles.portfolio}>
            <AnchorLink href="https://zenn.dev/tera_ny/articles/fe2f6da2954e76">
              <Image
                src={activity0}
                alt="GCPで完結する動画配信サービスの設計と実装"
                width={234}
                height={117}
              />
            </AnchorLink>
          </article>
          <article className={styles.portfolio}>
            <AnchorLink href="https://github.com/tera-ny/Raspberry-Juice">
              <Image src={portfolio1} alt="Raspberry Juice" width={234} height={117} />
            </AnchorLink>
          </article>
          <article className={styles.portfolio}>
            <AnchorLink href="https://github.com/tera-ny/couscous">
              <Image src={portfolio2} alt="couscous" width={234} height={117} />
            </AnchorLink>
          </article>
        </section>
      </div>
    </main>
  );
};
