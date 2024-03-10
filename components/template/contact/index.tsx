import AnchorLink from "~/components/AnchorLink";
import * as styles from "./styles.css";

export const Template = () => {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Activities</h3>
        <AnchorLink href="https://github.com/tera-ny">Github @tera-ny</AnchorLink>
        <AnchorLink href="https://zenn.dev/tera_ny">Zenn @tera_ny</AnchorLink>
      </section>
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>SNS</h3>
        <AnchorLink href="https://twitter.com/0x746572616e79">Twitter @0x746572616e79</AnchorLink>
        <AnchorLink href="https://instagram.com/0x746572616e79">
          Instagram @0x746572616e79
        </AnchorLink>
      </section>
    </main>
  );
};
