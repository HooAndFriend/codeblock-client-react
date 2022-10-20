import styled from "styled-components"
import { Color } from "../assets/Color"

export default function UserPageLeft() {
  return (
    <OutBox>
      <InBox></InBox>
    </OutBox>
  )
}

const OutBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1060px;
  height: 1000px;
  background-color: ${Color.green};
  float: left;
`
const InBox = styled.div`
  width: 500px;
  height: 500px;
  border: 15px solid black;
  border-radius: 40px;
  border-color: white;
`
