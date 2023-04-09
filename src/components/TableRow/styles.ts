import styled from "styled-components";

export const RowWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 14%);
  overflow-wrap: break-word;

  &:nth-child(odd) {
    background-color: #f8f6ff;
    color: #000;
  }
  &:hover {
    background-color: #d7d4d4;
  }
`;

export const Td = styled.div`
  padding: 12px;
  border-right: 1px solid ${(props) => props.theme.palette.borderColor};

  &:last-child {
    border-right: 0 none;
  }
`;
