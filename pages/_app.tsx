import { AppProps } from "next/app";
import { NextPage } from "next";
import Header from "~/components/Header";
import * as styles from "~/components/template/app/styles.css";

const contents = [
  { title: "About Me", ref: "/" },
  {
    title: "Contact",
    ref: "/contact"
  }
];

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className={styles.container}>
      <Header contents={contents} />
      <Component {...pageProps} />
      <hr className={styles.hr} />
      <footer className={styles.footer}>
        <p>©2024 teranyan</p>
      </footer>
    </div>
  );
};

export default MyApp;
