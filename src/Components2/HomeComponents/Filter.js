import React, { useState, useEffect } from "react";
import styled from "styled-components";
import sidearrowright from "../../Images2/sidearrowright.svg";
import sidearrowleft from "../../Images2/sidearrowleft.svg";
import days1 from "../../Images2/days1.svg";
import days2 from "../../Images2/days2.svg";
import days3 from "../../Images2/days3.svg";
import days4 from "../../Images2/days4.svg";
import blackx from "../../Images2/blackx.svg";

export default function Filter(props) {
  const [clicked, setClicked] = useState(false);

  const [blurActive, setBlurActive] = useState(false);
  const [startOrEnd, setStartOrEnd] = useState(1);
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);

  useEffect(() => {
    props.sendToParent1(clicked); // This is the mounting part
  }, [clicked]);

  useEffect(() => {
    props.sendToParent11(done); // This is the mounting part
  }, [done]);

  return (
    <div>
      {blurActive == true ? (
        <BlueBlur>
          <ModalRectangle>
            <div onClick={() => setDone(!done)}>
              <ClickImg1 src={blackx} onClick={() => setBlurActive(false)} />
            </div>
            <HStackLine />
            <div>
              {step == 3 ? (
                <div onClick={() => setDone(!done)}>
                  <SubmitButton2 onClick={() => setBlurActive(false)}>
                    <SubmitText2>Submit</SubmitText2>
                  </SubmitButton2>
                </div>
              ) : (
                <SubmitButton>
                  <SubmitText>Submit</SubmitText>
                </SubmitButton>
              )}
            </div>

            <HStackInfinite>
              <VStack5 onClick={() => setStep(2)}>
                <div>
                  {startOrEnd == 1 ? (
                    <TextRectangle1>
                      <BoldHeadingText>Start Date</BoldHeadingText>
                    </TextRectangle1>
                  ) : (
                    <TextRectangle2>
                      <BoldHeadingText>End Date</BoldHeadingText>
                    </TextRectangle2>
                  )}
                </div>
                <HStack6>
                  <ClickImg src={sidearrowleft} />
                  <MonthText>February 2022</MonthText>
                  <ClickImg src={sidearrowright} />
                </HStack6>
                <HStack10>
                  <MonthyText>Su</MonthyText>
                  <MonthyText>Mo</MonthyText>
                  <MonthyText>Tu</MonthyText>
                  <MonthyText>We</MonthyText>
                  <MonthyText>Th</MonthyText>
                  <MonthyText>Fr</MonthyText>
                  <MonthyText>Sa</MonthyText>
                </HStack10>
                <div>
                  {step == 1 ? (
                    <ClickImg src={days1} />
                  ) : step == 2 ? (
                    <ClickImg src={days2} />
                  ) : (
                    <ClickImg src={days3} />
                  )}
                </div>
              </VStack5>
              <VStack5 onClick={() => setStep(3)}>
                <div>
                  {startOrEnd == 2 ? (
                    <TextRectangle1>
                      <BoldHeadingText>End Date</BoldHeadingText>
                    </TextRectangle1>
                  ) : (
                    <TextRectangle2>
                      <BoldHeadingText>End Date</BoldHeadingText>
                    </TextRectangle2>
                  )}
                </div>
                <HStack6>
                  <ClickImg src={sidearrowleft} />
                  <MonthText>March 2022</MonthText>
                  <ClickImg src={sidearrowright} />
                </HStack6>
                <HStack10>
                  <MonthyText>Su</MonthyText>
                  <MonthyText>Mo</MonthyText>
                  <MonthyText>Tu</MonthyText>
                  <MonthyText>We</MonthyText>
                  <MonthyText>Th</MonthyText>
                  <MonthyText>Fr</MonthyText>
                  <MonthyText>Sa</MonthyText>
                </HStack10>
                <div>
                  {step == 1 || step == 2 ? (
                    <ClickImg src={days1} />
                  ) : (
                    <ClickImg src={days4} />
                  )}
                </div>
              </VStack5>
            </HStackInfinite>
          </ModalRectangle>
        </BlueBlur>
      ) : (
        <Outline>
          <Wrapper>
            <VStack>
              <HStack>
                <BoldText1>Today</BoldText1>
                <BlueCircle>
                  <BoldText2>T</BoldText2>
                </BlueCircle>
              </HStack>
              <Line />
              <HStack>
                <RegularText1>Last 7 Days</RegularText1>
                <BlueCircle>
                  <BoldText2>W</BoldText2>
                </BlueCircle>
              </HStack>
              <HStack>
                <RegularText1>Last 30 Days</RegularText1>
                <BlueCircle>
                  <BoldText2>S</BoldText2>
                </BlueCircle>
              </HStack>
              <Line />
              <HStack>
                <RegularText1>Month to Date</RegularText1>
                <BlueCircle>
                  <BoldText2>M</BoldText2>
                </BlueCircle>
              </HStack>
              <HStack>
                <RegularText1>Last month</RegularText1>
                <BlueCircle>
                  <BoldText2>L</BoldText2>
                </BlueCircle>
              </HStack>
              <Line />
              <HStack>
                <RegularText1>Last 6 months</RegularText1>
                <BlueCircle>
                  <BoldText2>Y</BoldText2>
                </BlueCircle>
              </HStack>
              <HStack>
                <RegularText1>Last 12 months</RegularText1>
                <BlueCircle>
                  <BoldText2>X</BoldText2>
                </BlueCircle>
              </HStack>
              <Line />
              <HStack onClick={() => setBlurActive(!blurActive)}>
                <RegularText1>Custom Range</RegularText1>
                <BlueCircle>
                  <BoldText2>C</BoldText2>
                </BlueCircle>
              </HStack>
            </VStack>
          </Wrapper>
        </Outline>
      )}
    </div>
  );
}

const SubmitButton = styled.div`
  position: absolute;
  width: 167px;
  height: 40px;
  background: rgba(36, 163, 255, 0.3);
  border-radius: 12px;
  position: absolute;
  bottom: 30px;
  right: 60px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const SubmitText = styled.div`
  padding-top: 10px;
  font-size: 20px;
  font-family: "ProximaNovaSemiBold";
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
`;

const SubmitButton2 = styled.div`
  position: absolute;
  width: 167px;
  height: 40px;
  background: #24a3ff;
  border-radius: 12px;
  position: absolute;
  bottom: 30px;
  right: 60px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const SubmitText2 = styled.div`
  padding-top: 10px;
  font-size: 20px;
  font-family: "ProximaNovaSemiBold";
  color: #ffffff;
  cursor: pointer;
`;

const TextRectangle1 = styled.div`
  display: flex;
  width: 154px;
  height: 55px;
  background: #ffffff;
  justify-content: center;
  align-items: center;

  /* Banabo No Hover */

  box-shadow: 2px 5px 100px 5px #ededef;
  border-radius: 20px;
`;

const TextRectangle2 = styled.div`
  display: flex;
  width: 154px;
  height: 55px;
  background: #ffffff;
  justify-content: center;
  align-items: center;

  /* Banabo No Hover */
`;

const ClickImg = styled.img`
  cursor: pointer;
`;

const ClickImg1 = styled.img`
  cursor: pointer;
  position: absolute;
  padding-top: 20px;
  padding-left: 420px;
`;

const HStackInfinite = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 120px;
`;

const HStack10 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const MonthyText = styled.div`
  font-size: 12px;
  color: #666678;
  font-family: "ProximaNovaRegular";
`;

const DayText = styled.div`
  font-size: 12px;
  color: #252531;
  font-family: "ProximaNovaRegular";
`;

const HStack6 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 65px;
  padding-top: 20px;
`;

const MonthText = styled.div`
  font-size: 16px;
  font-family: "ProximaNovaBold";
  color: #252531;
`;

const ModalRectangle = styled.div`
  position: absolute;
  width: 937px;
  height: 596px;
  left: 460px;
  top: 600px;

  background: #ffffff;
  border-radius: 20px;
`;

const HStack5 = styled.div`
  display: flex;
  flex-direction: top;
  gap: 380px;
  justify-content: center;
  align-items: center;
  padding-top: 70px;
`;

const VStack5 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-top: 60px;
  padding-right: 30px;
`;

const HStackLine = styled.div`
  width: 737px;
  height: 2px;
  position: absolute;
  left: 100px;
  top: 130px;
  background: #e4f2ff;
  padding-left: 500px;
`;

const Outline = styled.div`
  position: absolute;
  width: 219px;
  height: 330px;
  top: 50px;
  left: 30px;
  background: #ffffff;
  /* Banabo Yes Hover */
  box-shadow: 2px 5px 100px 5px #d8d8da;
  border-radius: 6px;
  z-index: 10;
`;

const BlueBlur = styled.div`
  position: absolute;
  left: -1320px;
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

const BoldHeadingText = styled.div`
  font-family: "ProximaNovaBold";
  font-size: 20px;
  line-height: 24px;
  color: #252531;
`;

const Wrapper = styled.div`
  padding-top: 10px;
  padding-left: 30px;
  padding-right: 20px;
`;

const VStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const HStack = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;

  :hover {
    background: rgba(238, 238, 238, 0.6);
  }
`;

const Line = styled.div`
  width: 150px;
  height: 2px;
  background: #e4f2ff;
`;

const RegularText1 = styled.div`
  font-size: 14px;
  color: #252531;
  font-family: "ProximaNovaRegular";
  padding-top: 4px;
  cursor: pointer;
`;

const BoldText1 = styled.div`
  font-size: 14px;
  color: #252531;
  font-family: "ProximaNovaBold";
  padding-top: 4px;
  cursor: pointer;
`;

const BoldText2 = styled.div`
  font-size: 14px;
  color: #252531;
  font-family: "ProximaNovaBold";
  margin-top: 5px;
  cursor: pointer;
`;

const BlueCircle = styled.div`
  width: 23px;
  height: 23px;
  background: #e4f2ff;
  border-radius: 60px;
  justify-content: center;
  align-items: center;
`;
