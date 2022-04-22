import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Iframe from "react-iframe";
import blackx from "../../Images2/blackx.svg";
import _flatten from "lodash/flatten";

export default function Tooling() {
  const [goBack, setGoBack] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <Wrapper>
      <BlueBlur>
        <PositionDiv>
          <Rectangle3 />
          <InsideRectangle>
            <BlackX src={blackx} />
          </InsideRectangle>
          <NoClick>
            <Iframe
              url="https://www.banabo.io"
              width="2000px"
              height="1540px"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"
            >
              {" "}
            </Iframe>
          </NoClick>
        </PositionDiv>
      </BlueBlur>
    </Wrapper>
  );
}

const TopLine = styled.div`
  z-index: 30;
`;

const Wrapper = styled.div`
  overflow-y: hidden;
`;

const NoClick = styled.div`
  pointer-events: none;
`;

const BlackX = styled.img`
  padding-top: 15px;
  padding-left: 14px;
  cursor: pointer;
  z-index: 30;
`;

const PositionDiv2 = styled.div`
  z-index: 200;
  position: absolute;
  right: 0px;
  bottom: 0px;
`;

const WhiteText = styled.div`
  font-size: 50px;
  line-height: 61px;
  font-family: "ProximaNovaBold";
  color: #ffffff;
`;

const Rectangle3 = styled.div`
  position: absolute;
  left: 1680px;
  top: 120px;
  width: 200px;
  height: 44px;
  background: #332c58;
  border-radius: 10px;
  z-index: 20;
`;

const Rectangle4 = styled.div`
  position: absolute;
  left: 1280px;
  top: 40px;
  width: 200px;
  height: 44px;
  background: #332c58;
  border-radius: 10px;
  z-index: 20;
`;

const InsideRectangle = styled.div`
  position: absolute;
  left: 1900px;
  top: 120px;
  width: 42px;
  height: 42px;
  background: #ffffff;
  border-radius: 10px;
  z-index: 20;
`;

const Rectangle1 = styled.div`
  position: absolute;
  width: 2000px;
  height: 60px;
  left: 80px;
  top: 44px;
  background: #ffffff;
  display: flex;
  justify-content: right;
  align-items: center;
  cursor: pointer;
  z-index: 50;
  padding-right: 10px;
`;

const PositionDiv = styled.div`
  z-index: 100;
  position: absolute;
  right: 0px;
  bottom: 0px;
`;

const BlueBlur = styled.div`
  position: absolute;
  left: 0px;
  bottom: 500px;
  background: rgba(45, 102, 159, 0.7);
  backdrop-filter: blur(20px);
  height: 2000px;
  width: 2000px;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow-y: hidden;
  overflow-x: hidden;
  z-index: 50;
  /* Note: backdrop-filter has minimal browser support */
`;
