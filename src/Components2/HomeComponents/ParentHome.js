import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TopLeft from "../HomeComponents/TopLeftCard";
import BottomLeft from "../HomeComponents/BottomLeftCard";
import TopRight from "../HomeComponents/TopRightCard";
import BottomRight from "../HomeComponents/BottomRightCard";
import WhiteArrow1 from "../../Images2/whitearrow.svg";
import Filter from "./Filter";

export default function ParentHome(props) {
  const [toggleActive, setToggleActive] = useState(false);
  const [filterActive, setFilterActive] = useState(true);
  const [isParentData1, setIsParentData1] = useState(false);
  const [isGrandpaData1, setIsGrandpaData1] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isParentData11, setIsParentData11] = useState(false);
  const [clicked1, setClicked1] = useState(false);

  // const [filterModal, setFilterModal] = useState(false);

  useEffect(() => {
    console.log("fired1");
    if (isParentData1 == true) {
      setClicked1(!clicked1);
      console.log("yes");
      setFilterActive(!filterActive);
    }
  }, [isParentData1]);

  useEffect(() => {
    console.log("fired3");
    console.log("yesssir");

    setFilterActive(false);
  }, [isParentData11]);

  useEffect(() => {
    setFilterActive(false);
  }, [clicked1]);

  useEffect(() => {
    console.log("fired2");
    setFilterActive(!filterActive);
  }, [toggleActive]);

  return (
    <Wrapper>
      <Button>
        <HStack2 onClick={() => setToggleActive(!toggleActive)}>
          <WhiteText>Today</WhiteText>
          <WhiteArrow src={WhiteArrow1} toggleActive={toggleActive} />
        </HStack2>
        {filterActive ? (
          <Filter
            toChild1={isParentData1}
            sendToParent1={setIsParentData1}
            toChild11={isParentData11}
            sendToParent11={setIsParentData11}
          />
        ) : (
          <div></div>
        )}
      </Button>

      <VStack>
        <HStack>
          <TopLeft />
          <TopRight />
        </HStack>
        <HStack>
          <BottomLeft />
          <BottomRight />
        </HStack>
      </VStack>
    </Wrapper>
  );
}

const VStack = styled.div`
  display: flex;
  flex-direction: column;
`;

const HStack = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div``;

const Button = styled.div`
  position: absolute;
  width: 167px;
  height: 40px;
  left: 1312px;
  top: 40px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #26a4ff;
  /* Banabo No Hover */

  box-shadow: 2px 5px 100px 5px #ededef;
  border-radius: 20px;
`;

const WhiteText = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 18px;
  line-height: 22px;

  color: #ffffff;
`;

const WhiteArrow = styled.img`
  height: 20px;
  width: 20px;
  transition-property: transform;
  transition-duration: 0.1s;
  cursor: pointer;
  transform: ${(props) =>
    props.toggleActive ? "rotate(180deg)" : "rotate(0deg)"};
`;

const HStack2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  padding-left: 30px;
  padding-top: 10px;
`;
