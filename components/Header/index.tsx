import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import * as styles from "./styles.css";

interface Props {
  contents: { title: string; ref: string }[];
}

const Header: FC<Props> = ({ contents }) => {
  const router = useRouter();
  return (
    <header className={styles.header}>
      {contents.map((item, index) =>
        item.ref === router.pathname ? (
          <span key={index}>{item.title}</span>
        ) : (
          <Link key={index} href={item.ref} className={styles.link}>
            <span>{item.title}</span>
          </Link>
        )
      )}
    </header>
  );
};

export default Header;
