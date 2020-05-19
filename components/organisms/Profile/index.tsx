import Icon from "~/components/atoms/Icon";
import styled from "styled-components";

const Introduction = styled.p`
  font-family: "Noto Sans JP";
  color: rgba(0, 0, 0, 0.76);
  margin: 0px;
  font-size: 15px;
`;

const iconSize = 60;
const titleFontSize = 22;
const titleHeight = titleFontSize * (3 / 2);
const titleBottomMargin = 10;
const titleTopMargin = iconSize - titleBottomMargin - titleHeight;

const Title = styled.h2`
  margin-bottom: ${titleBottomMargin}px;
  margin-top: ${titleTopMargin}px;
  font-family: "Noto Sans JP";
  font-size: ${titleFontSize}px;
  color: rgba(0, 0, 0, 0.84);
`;

const BlockContent = styled.div`
  display: inline-block;
  vertical-align: top;
`;

export default () => {
  return (
    <div>
      <BlockContent>
        <Icon size={iconSize} />
      </BlockContent>
      <BlockContent>
        <div>
          <Title>プロフィール</Title>
          <Introduction>
            Teranyan
            <br />
            Twitter: <a href="https://twitter.com/tera_ny">@tera_ny</a>
            <br />
            Github: <a href="https://github.com/g4zeru">@g4zeru</a>
            <br />
          </Introduction>
        </div>
      </BlockContent>
    </div>
  );
};
