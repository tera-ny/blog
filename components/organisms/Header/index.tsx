import styled from "styled-components";
import Link from "next/link";
import { device } from "~/components/utils/deviceStyle";

const HeaderContents = styled.div`
  width: 100%;
  position: relative;
  padding: 20px 0px;
`;
const Title = styled.h1`
  font-family: "Noto Sans JP";
  text-align: center;
  @media ${device.desktop} {
    font-size: 50px;
  }

  @media ${device.laptop} {
    font-size: 40px;
  }

  @media ${device.mobileL} {
    font-size: 30px;
  }
`;

const TopLink = styled.a`
  color: rgba(0, 0, 0, 0.84);
  text-decoration: none;
  cursor: pointer;
`;

export default () => {
  return (
    <HeaderContents>
      <Title>
        <Link href="/">
          <TopLink>
            <b>てらにゃんの備忘録</b>
          </TopLink>
        </Link>
      </Title>
    </HeaderContents>
  );
};
