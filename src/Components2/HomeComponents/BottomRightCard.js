import React, { useState, useEffect } from "react";
import styled from "styled-components";
import InsideBottomRight1 from "../HomeComponents/InsideBottomRight1";
import InsideBottomRight2 from "../HomeComponents/InsideBottomRight2";
import graybackarrow from "../../Images2/graybackarrow.svg";

export default function BottomRightCard() {
  const [screen1, setScreen1] = useState(true);
  const [isParentData1, setIsParentData1] = useState(false);

  useEffect(() => {
    if (isParentData1 == true) {
      setScreen1(false);
    }
  }, [isParentData1]);

  return (
    <CardParameter>
      {screen1 == true ? (
        <div></div>
      ) : (
        <ArrowIMG onClick={() => setScreen1(true)} src={graybackarrow} />
      )}
      <Wrapper>
        <Title>EVENTS</Title>
        {screen1 == true ? (
          <InsideBottomRight1
            toChild1={isParentData1}
            sendToParent1={setIsParentData1}
          />
        ) : (
          <InsideBottomRight2 />
        )}
      </Wrapper>
    </CardParameter>
  );
}

const CardParameter = styled.div`
  position: absolute;
  width: 486px;
  height: 385px;
  left: 998px;
  top: 560px;

  background: #ffffff;
  /* La La La */

  box-shadow: 0px 11px 28.5px 6.5px #eceff4;
  border-radius: 10px;
`;

const ArrowIMG = styled.img`
  position: absolute;
  top: 15px;
  left: 15px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  padding-left: 53px;
  padding-top: 34px;
`;

const Title = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 16px;
  line-height: 19px;
  color: #88879b;
  padding-bottom: 35px;
`;
