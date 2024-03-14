import { FC } from "react";
import icon from "~/public/images/icon.png";
import * as styles from "./styles.css";

const Profile: FC = () => (
  <div className={styles.container}>
    <img className={styles.image} src={icon.src} width={180} height={180} alt="icon" />
    <h1>haruta🐏</h1>
    <p>Web frontend & iOS Application Engineer</p>
  </div>
);

export default Profile;
