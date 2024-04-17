import styled from "styled-components";
import { Button } from "./Button";

export const LavaPool = styled.div`
  background-color: red;
  padding: 20px;
  & ${Button} {
    background-color: black;
  }
`
