import styled, { keyframes } from "styled-components";

const rotation = keyframes`
  from {
     transform: rotate(270deg);
    }
    to {
     transform: rotate(630deg);
    }
`;

export const LoadingOuter = styled.div`
  margin: 20px auto;
  background: ${(props) => props.theme.palette.tableHeadingBg};
  height: 100px;
  width: 100px;
  border-radius: 15px;
`;

export const LoadingMiddle = styled.div`
  height: 60px;
  width: 60px;
  margin: auto;
  position: relative;
  top: 20px;
  border-radius: 50%;
  background-image: linear-gradient(150deg, transparent 50%, #154e7d 50%),
    linear-gradient(90deg, #154e7d 50%, #fff 50%);
  transform-origin: 50% 50%;
  animation-timing-function: ease;
  animation: ${rotation} 1200ms infinite linear;
`;

export const LoadingInner = styled.div`
  background: ${(props) => props.theme.palette.tableHeadingBg};
  height: 48px;
  width: 48px;
  margin: auto;
  position: relative;
  top: 6px;
  border-radius: 50%;
`;
