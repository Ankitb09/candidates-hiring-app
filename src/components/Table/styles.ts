import styled from "styled-components";

export const TableContainer = styled.div`
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  margin-bottom: 50px;
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 14%);
  background-color: ${(props) => props.theme.palette.tableHeadingBg};
  color: ${(props) => props.theme.palette.textColor.primary};
  border-radius: 5px 5px 0 0;
`;

export const Th = styled.div<{ isSortable: boolean }>`
  padding: 12px;
  border-right: 1px solid ${(props) => props.theme.palette.borderColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:last-child {
    border-right: 0 none;
  }
`;

export const labelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
