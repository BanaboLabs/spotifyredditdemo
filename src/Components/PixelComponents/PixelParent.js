//######//
// This Parent has two child components, a left and a right side //
//######//

import React from "react";
import styled from "styled-components";
import PixelFullLeftSide from "./PixelFullLeftSide";
import PixelFullRightSide from "./PixelFullRightSide";

export default function PixelParent() {
  return (
    <TheRectangle>
      <BigWrapper>
        <BigSpacer />
        <HorizontalWrapper>
          <PixelFullLeftSide />
          <PixelFullRightSide />
        </HorizontalWrapper>
      </BigWrapper>
    </TheRectangle>
  );
}

const TheRectangle = styled.div`
  position: relative;
  min-height: 100vh;
  max-height: 100vh;
  min-width: 200%;
  background: #ffffff;
  border-radius: 40px;
`;

const BigWrapper = styled.div`
  padding-top: 80px;
  padding-left: 200px;
  @media (max-height: 900px) {
    padding-top: 60px;
    padding-left: 110px;
  }
`;

const BigSpacer = styled.div`
  padding-bottom: 20px;
`;

const HorizontalWrapper = styled.div`
  display: flex;
  flex-direction: 20px;
  gap: 70px;
`;
