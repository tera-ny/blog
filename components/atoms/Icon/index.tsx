import styled from "styled-components";

export default (props: { size: number }) => {
  const Icon = styled.img`
    border-radius: ${props.size / 2}px;
    width: ${props.size}px;
    height: ${props.size}px;
  `;
  return <Icon src="/assets/icon.png" />;
};
