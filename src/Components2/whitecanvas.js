import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function WhiteCanvas() {
  return (
    <Wrapper>
      <div></div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  width: 89vw;
  height: 100vh;

  background: #ffffff;
  box-shadow: 2px 5px 40px #e7e7e7;
`;
