import { FC } from "react";
import Image from "next/image";

const Profile: FC = () => (
  <>
    <div className="imageWrapper">
      <Image src="/images/icon.png" layout="fill" alt="icon" />
    </div>
    <h1>teranyan</h1>
    <p>Web front & iOS Engineer</p>
  </>
);

export default Profile;
