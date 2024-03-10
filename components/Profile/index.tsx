import { FC } from "react";
import Image from "next/image";
import icon from "~/public/images/icon.png";
import * as styles from "./styles.css";

const Profile: FC = () => (
  <div className={styles.container}>
    <Image className={styles.image} src={icon} width={180} height={180} alt="icon" />
    <h1>haruta🐏</h1>
    <p>Web frontend & iOS Application Engineer</p>
  </div>
);

export default Profile;
