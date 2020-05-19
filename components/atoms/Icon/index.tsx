import styled from "styled-components";

const Icon = styled.img`
  border-radius: 30px;
  width: 60px;
  height: 60px;
`;

export default () => {
  return <Icon src="/assets/icon.png" />;
};
