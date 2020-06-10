import React from "react";
import styled from "@emotion/styled";

export default function Condition({temp , condition}) {
  const Temp = styled.h2`
    font-family: "Fira Sans", sans-serif;
    font-size: 2rem;
  `

  const Condition = styled.h3`
    font-family: "Merriweather", sans-serif;
    font-size: 1.2rem;
  `
  return (
    <>
      <Temp>{temp} C</Temp>
      <Condition>{condition}</Condition>
    </>
  );
}
