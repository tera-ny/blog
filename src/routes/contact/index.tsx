import AnchorLink from "~/components/anchor-link";
import * as styles from "./styles.css";
import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <main class={styles.main}>
      <section class={styles.section}>
        <h3 class={styles.sectionTitle}>Activities</h3>
        <AnchorLink href="https://github.com/tera-ny">Github @tera-ny</AnchorLink>
        <AnchorLink href="https://zenn.dev/tera_ny">Zenn @tera_ny</AnchorLink>
      </section>
      <section class={styles.section}>
        <h3 class={styles.sectionTitle}>SNS</h3>
        <AnchorLink href="https://twitter.com/0x746572616e79">Twitter @0x746572616e79</AnchorLink>
        <AnchorLink href="https://instagram.com/0x746572616e79">
          Instagram @0x746572616e79
        </AnchorLink>
      </section>
    </main>
  );
});
