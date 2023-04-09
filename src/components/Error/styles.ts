import styled from "styled-components";

export const ErrorContainer = styled.div`
  border-radius: 5px;
  width: 100%;
  border: 1px solid ${(props) => props.theme.palette.error.main};
  background-color: #f8d7da;
  padding: 15px;
  align-items: center;
  display: flex;

  button {
    font-weight: 400;
    cursor: pointer;
    text-align: center;
    border: 1px solid transparent;
    padding: 10px;
    border-radius: 5px;
    color: #fff;
    background-color: ${(props) => props.theme.palette.error.main};
    border-color: ${(props) => props.theme.palette.error.main};
    margin-left: 10px;
  }
`;
