import { FC } from "react";
import Image from "next/image";
import icon from "~/public/images/icon.png";

const Profile: FC = () => (
  <>
    <div className="container">
      <div className="imageWrapper">
        <Image src={icon} layout="fill" alt="icon" width={240} height={240} />
      </div>
      <h1>teranyan</h1>
      <p>Web front & iOS Engineer</p>
    </div>
    <style jsx>
      {`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        .imageWrapper {
          position: relative;
          max-width: 240px;
          width: 100%;
          aspect-ratio: 1/1;
          border-radius: 50%;
          overflow: hidden;
        }
    `}
    </style>
  </>
);

export default Profile;
