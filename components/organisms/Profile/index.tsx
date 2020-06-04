import Icon from "~/components/atoms/Icon";
import styled from "styled-components";

const Introduction = styled.p`
  font-family: "Noto Sans JP";
  color: rgba(0, 0, 0, 0.76);
  font-size: 15px;
  margin: 0px;
  padding-left: 5px;
`;

const SectionTitle = styled.h3`
  margin-bottom: 5px;
  margin-top: 10px;
  font-family: "Noto Sans JP";
  font-size: 19px;
  color: rgba(0, 0, 0, 0.84);
`;

const Block = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const ProfileWrapper = styled.div`
  padding-bottom: 30px;
`;

export default () => {
  return (
    <ProfileWrapper>
      <SectionTitle>プロフィール</SectionTitle>
      <div>
        <Block>
          <Icon />
        </Block>
        <Block>
          <b>てらにゃん</b>
        </Block>
        <p>
          19歳学生。よく書くプログラミング言語はSwift,
          Typescript。業務委託のお仕事はお断りさせていただいています。インターン、アルバイトのお誘いは大歓迎です！
        </p>
      </div>
      <SectionTitle>Contact me</SectionTitle>
      <Introduction>
        Twitter:{" "}
        <a
          href="https://twitter.com/tera_ny"
          target="_blank"
          rel="noopener noreferrer"
        >
          @tera_ny
        </a>
        <br />
        Github:{" "}
        <a
          href="https://github.com/g4zeru"
          target="_blank"
          rel="noopener noreferrer"
        >
          @g4zeru
        </a>
        <br />
      </Introduction>
    </ProfileWrapper>
  );
};
