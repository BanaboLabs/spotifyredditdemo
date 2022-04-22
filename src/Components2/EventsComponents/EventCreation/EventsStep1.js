import React, { useState, useEffect } from "react";
import styled from "styled-components";
import blackx from "../../../Images2/blackx.svg";
import eventimage1 from "../../../Images2/eventimage1.svg";
import eventimage2 from "../../../Images2/eventimage2.svg";
import urlbutton from "../../../Images2/urlbutton.svg";
import elementsbutton from "../../../Images2/elementsbutton.svg";
import WebElements from "./WebElements";
import graybackarrow from "../../../Images2/graybackarrow.svg";
import clickeventcard2 from "../../../Images2/clickeventcard2.svg";
import graytriangle from "../../../Images2/graytrianglenew.svg";
import savebutton from "../../../Images2/savebutton.svg";
import BlurBackground1 from "../../../Images2/BlurBackground1.png";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import TheClickEventCard from "../../../Images2/theclickeventcard.svg";

// first step in creating those custom events

export default function EventsStep1(props) {
  const [show, setShow] = useState(true);
  const [webElementsScreen, setWebElementsScreen] = useState(false);
  const [urlEventsScreen, setUrlEventsScreen] = useState(false);
  const [isParentData2, setIsParentData2] = useState(false);
  const [element1Clicked, setElement1Clicked] = useState(false);
  const [number, setNumber] = useState(1);
  const [isParentData5, setIsParentData5] = useState(false);
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");

  const noRefresh = (event) => {
    event.preventDefault();
  };
  // Input Field handler
  const handleUserInput1 = (e) => {
    setInputValue1(e.target.value);
  };

  // Reset Input Field handler
  const resetInputField1 = () => {
    setInputValue1("");
  };

  const handleUserInput2 = (e) => {
    setInputValue2(e.target.value);
  };

  const resetInputField2 = () => {
    setInputValue2("");
  };

  const handleUserInput3 = (e) => {
    setInputValue3(e.target.value);
  };

  // Reset Input Field handler
  const resetInputField3 = () => {
    setInputValue3("");
  };

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  ///
  /// Connects WebElements to main
  useEffect(() => {
    props.sendToParent6(isParentData5); // This is the mounting part
  }, [isParentData5]);
  ///
  ///
  useEffect(() => {
    props.sendToParent1(show); // This is the mounting part
  }, [show]);

  useEffect(() => {
    if (isParentData2 == true) {
      console.log("We have liftoff");
      // Will Need to Add Something Here
    }
  }, [isParentData2]);

  return (
    <div>
      {webElementsScreen == true ? (
        <MotionDiv>
          <BlueBlur>
            <WebElements
              toChild2={isParentData2}
              sendToParent2={setIsParentData2}
              toChild5={isParentData5}
              sendToParent5={setIsParentData5}
            />
          </BlueBlur>
        </MotionDiv>
      ) : (
        <BlueBlur>
          <ModalRectangle>
            <div>
              {urlEventsScreen == false ? (
                <div>
                  <ClickImg src={blackx} onClick={() => setShow(!show)} />
                  <LargeVStack>
                    <MiddleVStack>
                      <LargeBlackText>
                        Create events to track conversions
                      </LargeBlackText>
                      <MediumGrayText>
                        Events are actions a website visitor takes to achieve a
                        business goal, like viewing content, adding an item to a
                        cart, or making a purchase
                      </MediumGrayText>
                    </MiddleVStack>
                    <PictureHStack>
                      <EventIMG src={eventimage1} />
                      <EventIMG src={eventimage2} />
                    </PictureHStack>
                  </LargeVStack>
                  <BottomHStack>
                    <MajorStack1>
                      <VStack1>
                        <SmallBlackText>URL events</SmallBlackText>
                        <SmallGrayText>
                          Track every time someone visits a specific webpage,
                          like a product details page or an order confirmation
                          page.
                        </SmallGrayText>
                      </VStack1>
                    </MajorStack1>
                    <MajorStack2>
                      <VStack1>
                        <SmallBlackText>Click events</SmallBlackText>
                        <SmallGrayText>
                          Track every time someone clicks on a webpage element,
                          like an add to cart button or a form submission button
                        </SmallGrayText>
                      </VStack1>
                    </MajorStack2>
                  </BottomHStack>
                  <BottomButton1
                    src={urlbutton}
                    onClick={() => setUrlEventsScreen(!urlEventsScreen)}
                  />
                  <BottomButton2
                    src={elementsbutton}
                    onClick={() => setWebElementsScreen(!webElementsScreen)}
                  />
                </div>
              ) : (
                <div>
                  <ClickImg5
                    src={graybackarrow}
                    onClick={() => setUrlEventsScreen(!urlEventsScreen)}
                  />
                  <LargeVStack>
                    <MiddleVStack>
                      <LargeBlackText>URL Events</LargeBlackText>
                      <MediumGrayText5>
                        The event will be triggered every time a visitor reaches
                        both destination urls
                      </MediumGrayText5>
                    </MiddleVStack>
                  </LargeVStack>
                  <ClickEventCard5 src={TheClickEventCard} />
                  <TopText5>ENTER URL KEYWORDS</TopText5>

                  <form onSubmit={noRefresh}>
                    <EventNameText5>EVENT NAME</EventNameText5>
                    <Input1
                      placeholder="Ex: Sign Up"
                      value={inputValue1}
                      onChange={handleUserInput1}
                    />
                    <TheBlueLine5 />
                    <EventNameText6>DESTINATION URL 1</EventNameText6>
                    <Input2
                      placeholder="Ex: https://nike.com/loyaltyprogram/signup"
                      value={inputValue2}
                      onChange={handleUserInput2}
                    />
                    <TheBlueLine6 />
                    <EventNameText7>DESTINATION URL 2</EventNameText7>
                    <Input3
                      placeholder="Ex: https://nike.com/loyaltyprogram/confirm"
                      value={inputValue3}
                      onChange={handleUserInput3}
                    />
                    <TheBlueLine7 />
                    <SaveButton5
                      src={savebutton}
                      onClick={() => setShow(!show)}
                    />
                  </form>
                </div>
              )}
            </div>
          </ModalRectangle>
        </BlueBlur>
      )}
    </div>
  );
}

const ClickEventCard5 = styled.img`
  position: absolute;
  left: 76px;
  top: 143px;
`;

const MotionDiv = styled(motion.div)``;

const BlueBlur = styled.div`
  position: absolute;
  left: 0px;
  bottom: 500px;
  background-image: url(${BlurBackground1});
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

const Input1 = styled.input`
  position: absolute;
  left: 165px;
  top: 284px;
  border: none;
  width: 300px;
  color: #666678;
  font-size: 16px;
  line-height: 19px;
  font-family: "ProximaNovaSemiBold";
  background-color: transparent;
  :focus {
    outline: none;
  }
`;

const Input2 = styled.input`
  position: absolute;
  left: 165px;
  top: 390px;
  border: none;
  width: 340px;
  color: #666678;
  font-size: 16px;
  line-height: 19px;
  font-family: "ProximaNovaSemiBold";
  background-color: transparent;
  :focus {
    outline: none;
  }
`;

const Input3 = styled.input`
  position: absolute;
  left: 164px;
  top: 490px;
  border: none;
  width: 340px;
  color: #666678;
  font-size: 16px;
  line-height: 19px;
  font-family: "ProximaNovaSemiBold";
  background-color: transparent;
  :focus {
    outline: none;
  }
`;

const TheBlueLine5 = styled.div`
  position: absolute;
  width: 330px;
  height: 2px;
  left: 167px;
  top: 306px;
  background: #e4f2ff;
`;

const TheBlueLine6 = styled.div`
  position: absolute;
  width: 330px;
  height: 2px;
  left: 167px;
  top: 413px;
  background: #e4f2ff;
`;

const TheBlueLine7 = styled.div`
  position: absolute;
  width: 330px;
  height: 2px;
  left: 165px;
  top: 515px;
  background: #e4f2ff;
`;

const EventNameText5 = styled.div`
  position: absolute;
  left: 167px;
  top: 256px;
  font-size: 13px;
  color: #9392a6;
  font-family: "ProximaNovaSemiBold";
`;

const EventNameText6 = styled.div`
  position: absolute;
  left: 167px;
  top: 361px;
  font-size: 13px;
  color: #9392a6;
  font-family: "ProximaNovaSemiBold";
`;

const EventNameText7 = styled.div`
  position: absolute;
  left: 167px;
  top: 461px;
  font-size: 13px;
  color: #9392a6;
  font-family: "ProximaNovaSemiBold";
`;

const MajorStack1 = styled.div`
  position: absolute;
  left: 10px;
  top: -40px;
`;

const VStack1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MajorStack2 = styled.div`
  position: absolute;
  left: 410px;
  top: -40px;
`;

const BackgroundRectangle1 = styled.div`
  width: 365px;
  height: 92px;

  background: #ffffff;
  /* Low */

  box-shadow: 2px 5px 20px #f1f1f1;
  border-radius: 10px;
  z-index: 120;
  background: linear-gradient(0deg, #ffffff, #ffffff),
    linear-gradient(0deg, #ffffff, #ffffff),
    linear-gradient(0deg, #ffffff, #ffffff), #ffffff;
  border-radius: 10px;
  box-shadow: 2px 5px 20px #f1f1f1;
`;

const BackgroundRectangle2 = styled.div`
  width: 365px;
  height: 92px;
  z-index: 120;
  background: #ffffff;
  /* Low */

  box-shadow: 2px 5px 20px #f1f1f1;
  border-radius: 10px;

  background: linear-gradient(0deg, #ffffff, #ffffff),
    linear-gradient(0deg, #ffffff, #ffffff),
    linear-gradient(0deg, #ffffff, #ffffff), #ffffff;
  border-radius: 10px;
  box-shadow: 2px 5px 20px #f1f1f1;
`;

const BackgroundRectangle3 = styled.div`
  width: 365px;
  height: 92px;
  z-index: 20;
  background: #ffffff;
  /* Low */
  box-shadow: 2px 5px 20px #f1f1f1;
  border-radius: 10px;

  background: linear-gradient(0deg, #ffffff, #ffffff),
    linear-gradient(0deg, #ffffff, #ffffff),
    linear-gradient(0deg, #ffffff, #ffffff), #ffffff;
  border-radius: 10px;
  box-shadow: 2px 5px 20px #f1f1f1;
`;

const TopText5 = styled.div`
  position: absolute;
  left: 150px;
  top: 192px;
  width: 200px;
  color: #666678;
  font-size: 18px;
  font-family: "ProximaNovaSemiBold";
`;

const SaveButton5 = styled.img`
  position: absolute;
  left: 130px;
  top: 540px;
  cursor: pointer;
`;

const EventNameText25 = styled.div`
  position: absolute;
  right: 178px;
  top: 720px;
  font-size: 13px;
  color: #9392a6;
  font-family: "ProximaNovaSemiBold";
`;

const EventFieldText25 = styled.div`
  position: absolute;
  right: 256px;
  top: 740px;
  font-size: 18px;
  color: #666678;
  font-family: "ProximaNovaSemiBold";
`;

const TheBlueLine25 = styled.div`
  position: absolute;
  width: 200px;
  height: 2px;
  right: 80px;
  top: 760px;
  background: #e4f2ff;
`;

const BlueCircle5 = styled.div`
  position: absolute;
  width: 22px;
  height: 22px;
  right: 82px;
  top: 736px;
  border-radius: 60px;
  background: #e4f2ff;
  transform: rotate(-179.95deg);
`;

const GrayTriangle5 = styled.img`
  position: absolute;
  right: 87px;
  top: 742px;
  cursor: pointer;
`;

const AbsolutePositioning5 = styled.div`
  position: absolute;
  left: 160px;
  top: 610px;
`;

const RectangleMain5 = styled.div`
  position: absolute;
  width: 1496px;
  height: 880px;
  left: 140px;
  top: 580px;

  background: linear-gradient(0deg, #ffffff, #ffffff),
    linear-gradient(0deg, #ffffff, #ffffff),
    linear-gradient(0deg, #ffffff, #ffffff), #ffffff;
  border-radius: 10px;
`;

const RectangleTop5 = styled.div`
  position: absolute;
  width: 184px;
  height: 36px;
  left: 140px;
  top: 560px;
  z-index: 10;
  background: #ffffff;
  border-radius: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
`;

const URLText5 = styled.div`
  font-size: 14px;
  font-family: "ProximaNovaSemiBold";
  color: #666678;
  padding-top: 11px;
  padding-left: 20px;
`;

//

const ClickImg5 = styled.img`
  cursor: pointer;
  position: absolute;
  right: 880px;
  top: 20px;
`;

const MediumGrayText5 = styled.div`
  font-family: "ProximaNovaRegular";
  font-size: 16px;
  color: #9a99a9;
  width: 600px;
  line-height: 19px;
`;

////////

const BottomButton1 = styled.img`
  position: absolute;
  left: 108px;
  top: 555px;
  cursor: pointer;
`;

const BottomButton2 = styled.img`
  position: absolute;
  right: 224px;
  top: 555px;
  cursor: pointer;
`;

const SmallBlackText = styled.div`
  font-size: 16px;
  color: #252531;
  font-family: "ProximaNovaSemiBold";
`;

const SmallGrayText = styled.div`
  font-size: 14px;
  color: #666678;
  font-family: "ProximaNovaRegular";
  width: 250px;
  line-height: 17px;
`;

const BottomVStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const BottomHStack = styled.div`
  position: absolute;
  left: 100px;
  bottom: 200px;
  display: flex;
  flex-direction: row;
  gap: 240px;
`;

const LargeVStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 110px;
  padding-top: 80px;
`;

const PictureHStack = styled.div`
  position: absolute;
  top: 160px;
  left: 90px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding-top: 10px;
`;

const EventIMG = styled.img``;

const LargeBlackText = styled.div`
  font-family: "ProximaNovaSemiBold";
  color: #252531;
  font-size: 26px;
`;

const MediumGrayText = styled.div`
  font-family: "ProximaNovaRegular";
  font-size: 16px;
  color: #9a99a9;
  width: 500px;
  line-height: 19px;
`;

const MiddleVStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const ClickImg = styled.img`
  cursor: pointer;
  position: absolute;
  right: 25px;
  top: 20px;
`;

const ModalRectangle = styled.div`
  position: absolute;
  width: 910px;
  height: 685px;
  left: 600px;
  top: 600px;

  background: #ffffff;
  border-radius: 20px;
`;
