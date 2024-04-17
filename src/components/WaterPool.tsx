import styled from "styled-components";
import { Button } from "./Button";

export const WaterPool = styled.div`
  background-color: blue;
  padding: 20px;
  & ${Button} {
    background-color: green;
  }
`