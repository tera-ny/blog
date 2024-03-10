import { FC, PropsWithChildren } from "react";
import Link from "next/link";
import * as styles from "./styles.css";

interface Props {
  href: string;
}
/**
 * 別タブで開くリンクコンポーネント
 * @param href 対象のURL
 * @param children クリック可能な内包するためのコンポーネント
 */
const AnchorLink: FC<PropsWithChildren<Props>> = ({ href, children }) => (
  <Link href={href} className={styles.link} target="_blank" rel="noreferrer noopener">
    {children}
  </Link>
);

export default AnchorLink;
