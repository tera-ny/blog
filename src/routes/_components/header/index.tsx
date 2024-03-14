import { component$ } from "@builder.io/qwik";
import * as styles from "./styles.css";
import { Link, useLocation } from "@builder.io/qwik-city";

interface Props {
  contents: { title: string; ref: string }[];
}

export default component$<Props>(({ contents }) => {
  const location = useLocation();
  return (
    <header class={styles.header}>
      {contents.map((item, index) =>
        item.ref === location.url.pathname ? (
          <span key={index}>{item.title}</span>
        ) : (
          <Link key={index} href={item.ref} class={styles.link}>
            <span>{item.title}</span>
          </Link>
        )
      )}
    </header>
  );
});

