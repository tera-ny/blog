import { FC } from "react";
import Image from "next/image";
import icon from "~/public/images/icon.png";
import * as styles from "./styles.css";

const Profile: FC = () => (
  <div className={styles.container}>
    <div className={styles.imageWrapper}>
      <Image src={icon} layout="fill" alt="icon" />
    </div>
    <h1>teranyan</h1>
    <p>Web front & iOS Engineer</p>
  </div>
);

export default Profile;
