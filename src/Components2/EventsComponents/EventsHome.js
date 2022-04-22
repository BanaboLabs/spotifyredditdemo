import React, { useState, useLayoutEffect } from "react";
import styled from "styled-components";
import Tooling from "./Tooling";
import eventbutton from "../../Images2/eventbutton.svg";
import Filter2 from "../HomeComponents/Filter2";
import WhiteArrow1 from "../../Images2/whitearrow.svg";
import Purchases from "./Purchases";
import Signups from "./Signups";
import EventsStep1 from "./EventCreation/EventsStep1";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

export default function EventsHome() {
  const [toggleActive, setToggleActive] = useState(false);
  const [filterActive, setFilterActive] = useState(true);
  const [Screen, setScreen] = useState(1);
  const [isShown, setIsShown] = useState(false);
  const [eventsProcessOn, setEventsProcessOn] = useState(false);
  const [isParentData1, setIsParentData1] = useState(false);
  const [isParentData6, setIsParentData6] = useState(false);

  // Connects to WebElements Child
  useLayoutEffect(() => {
    if (isParentData6 == true) {
      console.log("I am a pirate");
      setEventsProcessOn(false);
      setIsShown(!isShown);
    }
  }, [isParentData6]);
  //
  useLayoutEffect(() => {
    setFilterActive(!filterActive);
    console.log("wentoff1");
  }, [toggleActive]);

  useLayoutEffect(() => {
    if (isParentData1 == false) {
      setEventsProcessOn(false);
      console.log("wentoff2");
    }
  }, [isParentData1]);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // STOP HERE

  return (
    <div>
      <Wrapper>
        {eventsProcessOn == true ? (
          <EventsStepOneWrapper
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.35 }}
            eventsProcessOn={eventsProcessOn}
          >
            <EventsStep1
              toChild1={isParentData1}
              sendToParent1={setIsParentData1}
              toChild6={isParentData6}
              sendToParent6={setIsParentData6}
            />
          </EventsStepOneWrapper>
        ) : (
          <VStack>
            <HStack>
              {Screen == 1 ? (
                <DarkText>Purchases</DarkText>
              ) : (
                <LightText onClick={() => setScreen(1)}>Purchases</LightText>
              )}
              {Screen == 1 ? (
                <LightText onClick={() => setScreen(2)}>Sign Ups</LightText>
              ) : (
                <DarkText>Sign Ups</DarkText>
              )}
            </HStack>
            <MainLine />
            {Screen == 1 ? <LittleLine1 /> : <LittleLine2 />}
            <HStack2>
              <div
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
              >
                {isShown ? (
                  <div>
                    <EventButton
                      src={eventbutton}
                      onClick={() => setEventsProcessOn(true)}
                    />
                    <AddEventRectangle>
                      <AddEventWrapper>
                        <BoldEventText>Add an event</BoldEventText>
                        <RegularEventText>
                          Create a new conversion event and map a visitor’s
                          touchpoints through that event
                        </RegularEventText>
                      </AddEventWrapper>
                    </AddEventRectangle>
                  </div>
                ) : (
                  <EventButton src={eventbutton} />
                )}
              </div>
              <Button2>
                <HStack3 onClick={() => setToggleActive(!toggleActive)}>
                  <WhiteText>Today</WhiteText>
                  <WhiteArrow src={WhiteArrow1} toggleActive={toggleActive} />
                </HStack3>
                {filterActive ? <Filter2 /> : <div></div>}
              </Button2>
            </HStack2>
            {Screen == 1 ? <Purchases /> : <Signups />}
          </VStack>
        )}
      </Wrapper>
    </div>
  );
}

const EventsStepOneWrapper = styled(motion.div)``;

// opacity: ${(props) => (props.eventsProcessOn ? "1" : "0")};

const Wrapper = styled.div``;

const BoldEventText = styled.div`
  font-size: 16px;
  line-height: 19px;
  color: #252531;
  text-shadow: 2px 5px 20px #f1f1f1;
  font-family: "ProximaNovaSemiBold";
`;

const RegularEventText = styled.div`
  color: #88879b;
  font-size: 14px;
  line-height: 17px;
  font-family: "ProximaNovaRegular";
  text-shadow: 2px 5px 20px #f1f1f1;
`;

const AddEventRectangle = styled.div`
  position: absolute;
  width: 285px;
  height: 79px;
  left: 1311px;
  top: 60px;
  background: #ffffff;
  /* Low */
  z-index: 100;
  box-shadow: 2px 5px 20px #f1f1f1;
  border-radius: 10px;
`;

const AddEventWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 12px;
  padding-left: 12px;
  gap: 6px;
`;

const WhiteText = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 18px;
  line-height: 22px;

  color: #ffffff;
`;

const HStack3 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 10px;
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

const MainLine = styled.div`
  width: 739px;
  height: 3px;
  background: #d7eeff;
  position: absolute;
  left: 464px;
  top: 100px;
`;

const Button2 = styled.div`
  position: absolute;
  width: 167px;
  height: 40px;
  left: 1312px;
  top: 65px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #26a4ff;
  /* Banabo No Hover */

  box-shadow: 2px 5px 100px 5px #ededef;
  border-radius: 20px;
`;

const EventButton = styled.img`
  position: absolute;
  left: 1220px;
  top: 43px;
  cursor: pointer;
`;

const HStack2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const LittleLine1 = styled.div`
  width: 84px;
  height: 3.2px;
  background: #1e9efb;
  position: absolute;
  left: 464px;
  top: 100px;
`;

const LittleLine2 = styled.div`
  width: 84px;
  height: 3.2px;
  background: #1e9efb;
  position: absolute;
  left: 555px;
  top: 100px;
`;

const VStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
`;

const LightText = styled.div`
  font-family: "ProximaNovaSemiBold";
  color: #9392a6;
  font-size: 16px;
  cursor: pointer;
`;

const DarkText = styled.div`
  font-family: "ProximaNovaSemiBold";
  color: #2f2f2f;
  font-size: 16px;
  cursor: pointer;
`;

const HStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  font-size: 16px;
  line-height: 19px;
  color: #2f2f2f;
  position: absolute;
  left: 469px;
  top: 72px;
`;

const Button = styled.div`
  position: absolute;
  width: 109px;
  height: 34px;
  left: 941px;
  top: 369px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  /* Low */
  box-shadow: 2px 5px 20px #f1f1f1;
  border-radius: 10px;
`;

/*

<div>
      {screen == 1 ? (
        <Button onClick={() => setScreen(2)}>Click Me</Button>
      ) : (
        <Tooling />
      )}
    </div>

*/
