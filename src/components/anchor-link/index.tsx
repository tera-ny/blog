import { component$, Slot } from "@builder.io/qwik";
import * as styles from "./styles.css";

interface Props {
  href: string;
}
/**
 * 別タブで開くリンクコンポーネント
 * @param href 対象のURL
 * @param children クリック可能な内包するためのコンポーネント
 */
export default component$<Props>(({href}) => (
  <a href={href} class={styles.link} target="_blank" rel="noreferrer noopener">
    <Slot />
  </a>
));
