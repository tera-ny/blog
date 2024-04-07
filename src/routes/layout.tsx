import { component$, Slot} from "@builder.io/qwik";

import Header from "~/components/header";

import * as styles from "~/components/page/layout.css";

const contents = [
  { title: "About Me", ref: "/" },
  {
    title: "Contact",
    ref: "/contact"
  }
];

export default component$(() => {
  return (
    <div class={styles.container}>
      <Header contents={contents} />
      <Slot />
      <hr class={styles.hr} />
      <footer class={styles.footer}>
        <p>©2024 teranyan</p>
      </footer>
    </div>
  );
});
