import AnchorLink from "~/components/anchor-link";
import * as styles from "./styles.css";
import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

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

export const head: DocumentHead = {
  title: "teranyan's homepage / contact",
  meta: [
    {
      property: "og:title",
      content: "teranyan's homepage / contact",
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
      content: "website",
    },
    {
      property: "og:image",
      content: "https://teranyan.tokyo/images/ogp-icon.png",
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
