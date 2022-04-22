import React, { useState, useEffect } from "react";
import styled from "styled-components";
import graph from "../../Images2/graph.svg";
import stick from "../../Images2/stick.svg";
import orange from "../../Images2/orange.svg";
import pink from "../../Images2/pink.svg";
import purple from "../../Images2/purple.svg";
import red from "../../Images2/red.svg";
import blue from "../../Images2/blue.svg";
import blacksimplearrow from "../../Images2/blacksimplearrow.svg";
import TabHighlighted2 from "../../Images2/tabhighlighted2.svg";
import TabHighlightedClear2 from "../../Images2/tabhighlightedclear2.svg";

export default function TopRightCard() {
  const [toggleActive1, setToggleActive1] = useState(false);
  const [toggleActive2, setToggleActive2] = useState(false);
  const [highlight1, setHighlight1] = useState("Custom");
  const [highlight2, setHighlight2] = useState("Revenue");
  const [total, setTotal] = useState("$837k");
  const [firstSpotName, setFirstSpotName] = useState("Instagram");
  const [secondSpotName, setSecondSpotName] = useState("Facebook");
  const [thirdSpotName, setThirdSpotName] = useState("LinkedIn");
  const [fourthSpotName, setFourthSpotName] = useState("Google SEO");
  const [fifthSpotName, setFifthSpotName] = useState("YouTube");
  const [firstSpotAmount, setFirstSpotAmount] = useState("$554k");
  const [secondSpotAmount, setSecondSpotAmount] = useState("$91k");
  const [thirdSpotAmount, setThirdSpotAmount] = useState("$53k");
  const [fourthSpotAmount, setFourthSpotAmount] = useState("$17k");
  const [fifthSpotAmount, setFifthSpotAmount] = useState("$9k");

  useEffect(() => {
    if (highlight2 == "Revenue") {
      setTotal("$837k");
    }
    if (highlight2 == "Purchase") {
      setTotal("989");
    }
  }, [highlight1, highlight2]);

  useEffect(() => {
    if (highlight1 == "Custom" && highlight2 == "Revenue") {
      setFirstSpotName("Instagram");
      setFirstSpotAmount("$554.5k");
      setSecondSpotName("Facebook");
      setSecondSpotAmount("$91.2k");
      setThirdSpotName("LinkedIn");
      setThirdSpotAmount("$53.1k");
      setFourthSpotName("Google SEO");
      setFourthSpotAmount("$17.6k");
      setFifthSpotName("YouTube");
      setFifthSpotAmount("$9.4k");
    }
    if (highlight1 == "First-Touch" && highlight2 == "Revenue") {
      setFirstSpotName("Hacker News");
      setFirstSpotAmount("$396.1k");
      setSecondSpotName("Facebook");
      setSecondSpotAmount("$41.2k");
      setThirdSpotName("LinkedIn");
      setThirdSpotAmount("$36.4k");
      setFourthSpotName("Google SEO");
      setFourthSpotAmount("$12.7k");
      setFifthSpotName("YouTube");
      setFifthSpotAmount("$11.1k");
    }
    if (highlight1 == "Last-Touch" && highlight2 == "Revenue") {
      setFirstSpotName("YouTube");
      setFirstSpotAmount("$161.9k");
      setSecondSpotName("Facebook");
      setSecondSpotAmount("$41.5k");
      setThirdSpotName("LinkedIn");
      setThirdSpotAmount("$37.8k");
      setFourthSpotName("Twitter");
      setFourthSpotAmount("$22.4k");
      setFifthSpotName("Instagram");
      setFifthSpotAmount("$14.1k");
    }
    if (highlight1 == "Linear" && highlight2 == "Revenue") {
      setFirstSpotName("Facebook");
      setFirstSpotAmount("$163.1k");
      setSecondSpotName("LinkedIn");
      setSecondSpotAmount("$21.2k");
      setThirdSpotName("Snapchat");
      setThirdSpotAmount("$11.5k");
      setFourthSpotName("Twitter");
      setFourthSpotAmount("$9.4k");
      setFifthSpotName("Twitter");
      setFifthSpotAmount("$1.3k");
    }
    if (highlight1 == "U-Shaped" && highlight2 == "Revenue") {
      setFirstSpotName("TikTok");
      setFirstSpotAmount("$114.3k");
      setSecondSpotName("Facebook");
      setSecondSpotAmount("$24.2k");
      setThirdSpotName("LinkedIn");
      setThirdSpotAmount("$11.8k");
      setFourthSpotName("Snapchat");
      setFourthSpotAmount("$8.8k");
      setFifthSpotName("Instagram");
      setFifthSpotAmount("$7.3k");
    }
    /////////////

    if (highlight1 == "Custom" && highlight2 == "Purchase") {
      setFirstSpotName("Instagram");
      setFirstSpotAmount("478.4");
      setSecondSpotName("Facebook");
      setSecondSpotAmount("123.2");
      setThirdSpotName("LinkedIn");
      setThirdSpotAmount("97.5");
      setFourthSpotName("Google SEO");
      setFourthSpotAmount("91.1");
      setFifthSpotName("YouTube");
      setFifthSpotAmount("82.7");
    }
    if (highlight1 == "First-Touch" && highlight2 == "Purchase") {
      setFirstSpotName("Hacker News");
      setFirstSpotAmount("381");
      setSecondSpotName("Facebook");
      setSecondSpotAmount("174");
      setThirdSpotName("LinkedIn");
      setThirdSpotAmount("136");
      setFourthSpotName("Google SEO");
      setFourthSpotAmount("75");
      setFifthSpotName("YouTube");
      setFifthSpotAmount("27");
    }
    if (highlight1 == "Last-Touch" && highlight2 == "Purchase") {
      setFirstSpotName("YouTube");
      setFirstSpotAmount("425");
      setSecondSpotName("Facebook");
      setSecondSpotAmount("212");
      setThirdSpotName("LinkedIn");
      setThirdSpotAmount("121");
      setFourthSpotName("Twitter");
      setFourthSpotAmount("109");
      setFifthSpotName("Instagram");
      setFifthSpotAmount("101");
    }
    if (highlight1 == "Linear" && highlight2 == "Purchase") {
      setFirstSpotName("Facebook");
      setFirstSpotAmount("317.2");
      setSecondSpotName("LinkedIn");
      setSecondSpotAmount("123.9");
      setThirdSpotName("Snapchat");
      setThirdSpotAmount("78.5");
      setFourthSpotName("Twitter");
      setFourthSpotAmount("56.3");
      setFifthSpotName("Twitter");
      setFifthSpotAmount("15.1");
    }
    if (highlight1 == "U-Shaped" && highlight2 == "Purchase") {
      setFirstSpotName("TikTok");
      setFirstSpotAmount("490.9");
      setSecondSpotName("Facebook");
      setSecondSpotAmount("289.7");
      setThirdSpotName("LinkedIn");
      setThirdSpotAmount("128.5");
      setFourthSpotName("Snapchat");
      setFourthSpotAmount("99.7");
      setFifthSpotName("Instagram");
      setFifthSpotAmount("78.4");
    }
  }, [highlight1, highlight2]);

  return (
    <CardParameter>
      <HStack3>
        <AttributionTitle>ATTRIBUTION</AttributionTitle>
        <HStack4 toggleActive1={toggleActive1}>
          <GrayButtonBackground1>
            <HStack6 onClick={() => setToggleActive1(!toggleActive1)}>
              <BoldBlackText2>{highlight1}</BoldBlackText2>
              <BlackSimpleArrow1
                toggleActive1={toggleActive1}
                src={blacksimplearrow}
              />
            </HStack6>
          </GrayButtonBackground1>
          {toggleActive1 == true ? (
            <ToggleRectangle1>
              <VStackModal>
                <BlueBackground>
                  <ModalBlackSemiBold>Models</ModalBlackSemiBold>
                </BlueBackground>
                <div onClick={() => setHighlight1("Custom")}>
                  {highlight1 == "Custom" ? (
                    <TabHighlighted22>
                      <ModalGraySemiBold
                        onClick={() => setToggleActive1(!toggleActive1)}
                      >
                        Custom
                      </ModalGraySemiBold>
                    </TabHighlighted22>
                  ) : (
                    <TabHighlightedClear22>
                      <ModalGrayRegular
                        onClick={() => setToggleActive1(!toggleActive1)}
                      >
                        Custom
                      </ModalGrayRegular>
                    </TabHighlightedClear22>
                  )}
                </div>
                <div onClick={() => setHighlight1("First-Touch")}>
                  {highlight1 == "First-Touch" ? (
                    <TabHighlighted22>
                      <ModalGraySemiBold
                        onClick={() => setToggleActive1(!toggleActive1)}
                      >
                        First-Touch
                      </ModalGraySemiBold>
                    </TabHighlighted22>
                  ) : (
                    <TabHighlightedClear22>
                      <ModalGrayRegular
                        onClick={() => setToggleActive1(!toggleActive1)}
                      >
                        First-Touch
                      </ModalGrayRegular>
                    </TabHighlightedClear22>
                  )}
                </div>
                <div onClick={() => setHighlight1("Last-Touch")}>
                  {highlight1 == "Last-Touch" ? (
                    <TabHighlighted22>
                      <ModalGraySemiBold
                        onClick={() => setToggleActive1(!toggleActive1)}
                      >
                        Last-Touch
                      </ModalGraySemiBold>
                    </TabHighlighted22>
                  ) : (
                    <TabHighlightedClear22>
                      <ModalGrayRegular
                        onClick={() => setToggleActive1(!toggleActive1)}
                      >
                        Last-Touch
                      </ModalGrayRegular>
                    </TabHighlightedClear22>
                  )}
                </div>
                <div onClick={() => setHighlight1("Linear")}>
                  {highlight1 == "Linear" ? (
                    <TabHighlighted22>
                      <ModalGraySemiBold
                        onClick={() => setToggleActive1(!toggleActive1)}
                      >
                        Linear
                      </ModalGraySemiBold>
                    </TabHighlighted22>
                  ) : (
                    <TabHighlightedClear22>
                      <ModalGrayRegular
                        onClick={() => setToggleActive1(!toggleActive1)}
                      >
                        Linear
                      </ModalGrayRegular>
                    </TabHighlightedClear22>
                  )}
                </div>
                <div onClick={() => setHighlight1("U-Shaped")}>
                  {highlight1 == "U-Shaped" ? (
                    <TabHighlighted22>
                      <ModalGraySemiBold
                        onClick={() => setToggleActive1(!toggleActive1)}
                      >
                        U-Shaped
                      </ModalGraySemiBold>
                    </TabHighlighted22>
                  ) : (
                    <TabHighlightedClear22>
                      <ModalGrayRegular
                        onClick={() => setToggleActive1(!toggleActive1)}
                      >
                        U-Shaped
                      </ModalGrayRegular>
                    </TabHighlightedClear22>
                  )}
                </div>
              </VStackModal>
            </ToggleRectangle1>
          ) : (
            <div> </div>
          )}
          <GrayButtonBackground2>
            <HStack6 onClick={() => setToggleActive2(!toggleActive2)}>
              <BoldBlackText2>{highlight2}</BoldBlackText2>
              <BlackSimpleArrow2
                toggleActive2={toggleActive2}
                src={blacksimplearrow}
              />
            </HStack6>
          </GrayButtonBackground2>
          {toggleActive2 == true ? (
            <ToggleRectangle2>
              <VStackModal>
                <BlueBackground>
                  <ModalBlackSemiBold>Events</ModalBlackSemiBold>
                </BlueBackground>
                <div onClick={() => setHighlight2("Revenue")}>
                  {highlight2 == "Revenue" ? (
                    <TabHighlighted22>
                      <ModalGraySemiBold
                        onClick={() => setToggleActive2(!toggleActive2)}
                      >
                        Revenue
                      </ModalGraySemiBold>
                    </TabHighlighted22>
                  ) : (
                    <TabHighlightedClear22>
                      <ModalGrayRegular
                        onClick={() => setToggleActive2(!toggleActive2)}
                      >
                        Revenue
                      </ModalGrayRegular>
                    </TabHighlightedClear22>
                  )}
                </div>
                <div onClick={() => setHighlight2("Purchase")}>
                  {highlight2 == "Purchase" ? (
                    <TabHighlighted22>
                      <ModalGraySemiBold
                        onClick={() => setToggleActive2(!toggleActive2)}
                      >
                        Purchase
                      </ModalGraySemiBold>
                    </TabHighlighted22>
                  ) : (
                    <TabHighlightedClear22>
                      <ModalGrayRegular
                        onClick={() => setToggleActive2(!toggleActive2)}
                      >
                        Purchase
                      </ModalGrayRegular>
                    </TabHighlightedClear22>
                  )}
                </div>
                <div onClick={() => setHighlight2("Sign Up")}>
                  {highlight2 == "Sign Up" ? (
                    <TabHighlighted22>
                      <ModalGraySemiBold
                        onClick={() => setToggleActive2(!toggleActive2)}
                      >
                        Sign Up
                      </ModalGraySemiBold>
                    </TabHighlighted22>
                  ) : (
                    <TabHighlightedClear22>
                      <ModalGrayRegular
                        onClick={() => setToggleActive2(!toggleActive2)}
                      >
                        Sign Up
                      </ModalGrayRegular>
                    </TabHighlightedClear22>
                  )}
                </div>
                <div onClick={() => setHighlight2("Add To Cart")}>
                  {highlight2 == "Add To Cart" ? (
                    <TabHighlighted22>
                      <ModalGraySemiBold
                        onClick={() => setToggleActive2(!toggleActive2)}
                      >
                        Add To Cart
                      </ModalGraySemiBold>
                    </TabHighlighted22>
                  ) : (
                    <TabHighlightedClear22>
                      <ModalGrayRegular
                        onClick={() => setToggleActive2(!toggleActive2)}
                      >
                        Add To Cart
                      </ModalGrayRegular>
                    </TabHighlightedClear22>
                  )}
                </div>
                <div onClick={() => setHighlight2("Start Trial")}>
                  {highlight2 == "Start Trial" ? (
                    <TabHighlighted22>
                      <ModalGraySemiBold
                        onClick={() => setToggleActive2(!toggleActive2)}
                      >
                        Start Trial
                      </ModalGraySemiBold>
                    </TabHighlighted22>
                  ) : (
                    <TabHighlightedClear22>
                      <ModalGrayRegular
                        onClick={() => setToggleActive2(!toggleActive2)}
                      >
                        Start Trial
                      </ModalGrayRegular>
                    </TabHighlightedClear22>
                  )}
                </div>
              </VStackModal>
            </ToggleRectangle2>
          ) : (
            <div> </div>
          )}
          <VerticalLine />
          <BoldBlackText highlight2={highlight2}>{total}</BoldBlackText>
          <TotalText>Total</TotalText>
        </HStack4>
      </HStack3>
      <GraphIMG src={graph} />
      <StickIMG src={stick} />
      <InsideCard>
        <VStackCustom>
          <HStack>
            <TextGray1>Top 5</TextGray1>
            <BlueCircle1>
              <ModalBlackSemiBold11>Mar 14</ModalBlackSemiBold11>
            </BlueCircle1>
          </HStack>
          <Spacer />
          <HStack2>
            <MiniHStack>
              <ColorIMG src={blue} />
              <GrayPlainText>{firstSpotName}</GrayPlainText>
            </MiniHStack>
            <BlackPlainText>{firstSpotAmount}</BlackPlainText>
          </HStack2>
          <HStack2>
            <MiniHStack>
              <ColorIMG src={red} />
              <GrayPlainText>{secondSpotName}</GrayPlainText>
            </MiniHStack>
            <BlackPlainText>{secondSpotAmount}</BlackPlainText>
          </HStack2>
          <HStack2>
            <MiniHStack>
              <ColorIMG src={purple} />
              <GrayPlainText>{thirdSpotName}</GrayPlainText>
            </MiniHStack>
            <BlackPlainText>{thirdSpotAmount}</BlackPlainText>
          </HStack2>
          <HStack2>
            <MiniHStack>
              <ColorIMG src={orange} />
              <GrayPlainText>{fourthSpotName}</GrayPlainText>
            </MiniHStack>
            <BlackPlainText>{fourthSpotAmount}</BlackPlainText>
          </HStack2>
          <HStack2>
            <MiniHStack>
              <ColorIMG src={pink} />
              <GrayPlainText>{fifthSpotName}</GrayPlainText>
            </MiniHStack>
            <BlackPlainText>{fifthSpotAmount}</BlackPlainText>
          </HStack2>
        </VStackCustom>
      </InsideCard>
    </CardParameter>
  );
}

const Spacer = styled.div`
  padding-top: 1px;
`;

const GraphIMG = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
`;

const BlackSimpleArrow1 = styled.img`
  cursor: pointer;
  transition-property: transform;
  transition-duration: 0.1s;
  transform: ${(props) =>
    props.toggleActive1 ? "rotate(180deg)" : "rotate(0deg)"};
`;

const BlackSimpleArrow2 = styled.img`
  cursor: pointer;
  transition-property: transform;
  transition-duration: 0.1s;
  transform: ${(props) =>
    props.toggleActive2 ? "rotate(180deg)" : "rotate(0deg)"};
`;

const StickIMG = styled.img`
  position: absolute;
  right: 20px;
  bottom: -60px;
`;

const CardParameter = styled.div`
  position: absolute;
  width: 572px;
  height: 410px;
  left: 912px;
  top: 105px;

  background: #ffffff;
  /* La La La */

  box-shadow: 0px 11px 28.5px 6.5px #eceff4;
  border-radius: 10px;
`;

const InsideCard = styled.div`
  width: 200px;
  height: 180px;
  position: absolute;
  right: 36px;
  bottom: 155px;
  z-index: 0;
  background: #ffffff;
  box-shadow: 2px 5px 20px #f1f1f1;
  border-radius: 4px;
  display: ${(props) => (props.toggleActive2 ? "none" : "null")};
`;

const TextGray1 = styled.div`
  font-family: "ProximaNovaSemibold";
  font-size: 14px;
  padding-top: 4px;
  color: #666678;
`;

const VStackCustom = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  padding-left: 20px;
  width: 300px;
  gap: 7px;
`;

const MiniHStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding-top: 3px;
`;

const VStack = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 300px;
  gap: 7px;
`;

const VStackModal = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 14px;
  padding-left: 14px;
  width: 300px;
  gap: 7px;
`;

const HStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 58px;
`;

const HStack2 = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  gap: 0px;
  text-align: left;
`;

const BlueCircle1 = styled.div`
  background: #e4f2ff;
  border-radius: 4px;
  width: 60.42px;
  height: 20px;
  padding-right: 10px;
`;

const ColorIMG = styled.img``;

const GrayPlainText = styled.div`
  font-family: "ProximaNovaRegular";
  font-size: 14px;
  line-height: 15px;
  width: 90px;
  /* identical to box height */
  color: #666678;
`;

const BlackPlainText = styled.div`
  font-family: "ProximaNovaRegular";
  font-size: 14px;
  width: 100px;
  padding-top: 4px;
  /* identical to box height */
  color: #252531;
`;

const AttributionTitle = styled.div`
  position: absolute;
  left: 50px;
  top: 35px;
  height: 28px;
  font-family: "ProximaNovaSemiBold";
  font-size: 16px;
  line-height: 19px;
  color: #88879b;
`;

const GrayButtonBackground1 = styled.div`
  position: absolute;
  left: 190px;
  top: 30px;
  width: 108.95px;
  height: 28px;
  background: #eeeef4;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

const GrayButtonBackground2 = styled.div`
  position: absolute;
  left: 310px;
  top: 30px;
  height: 28px;
  width: 108.95px;
  background: #eeeef4;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

const VerticalLine = styled.div`
  position: absolute;
  right: 127px;
  top: 43px;
  width: 27.51px;
  height: 2.02px;
  background: #e4f2ff;
  transform: matrix(0, -1, 1, 0, 0, 0);
`;

const TotalText = styled.div`
  position: absolute;
  right: 100px;
  top: 36px;
  font-size: 14px;
  color: #a9a9b9;
  font-family: "ProximaNovaSemiBold";
`;

const BoldBlackText = styled.div`
  position: absolute;
  right: ${(props) => (props.highlight2 == "Purchase" ? "60px" : "40px")};
  top: 32px;
  font-size: 18px;
  line-height: 22px;
  color: #252531;
  font-family: "ProximaNovaSemiBold";
`;

const HStack3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding-top: 50px;
  padding-left: 50px;
`;

const HStack4 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const HStack6 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  gap: 9px;
`;

const BoldBlackText2 = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 15px;
  line-height: 18px;

  color: #252531;
`;

const ToggleRectangle1 = styled.div`
  position: absolute;
  top: 68px;
  left: 191px;
  width: 110px;
  height: 165px;
  background: #ffffff;
  z-index: 30;
  box-shadow: 2px 5px 100px 5px #ededef;
  border-radius: 10px;
`;

const ToggleRectangle2 = styled.div`
  position: absolute;
  top: 68px;
  left: 311px;
  width: 110px;
  height: 165px;
  background: #ffffff;
  z-index: 30;
  box-shadow: 2px 5px 100px 5px #ededef;
  border-radius: 10px;
`;

const ModalBlackSemiBold = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 14px;
  padding-top: 3px;
  padding-left: 6px;
  color: #666678;
`;

const ModalBlackSemiBold11 = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 14px;
  padding-top: 3px;
  margin-left: 8.7px;
  color: #666678;
`;

const ModalGraySemiBold = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 14px;
  padding-top: 3px;
  padding-left: 6px;
  color: #666678;
`;

const ModalGrayRegular = styled.div`
  font-family: "ProximaNovaRegular";
  font-size: 14px;
  padding-top: 3px;
  padding-left: 6px;
  color: #666678;
`;

const BlueBackground = styled.div`
  width: 60px;
  height: 19px;
  background: #e4f2ff;
  border-radius: 4px;
`;

const TabHighlightedClear22 = styled.div`
  cursor: pointer;
`;

const TabHighlighted22 = styled.div`
  cursor: pointer;
`;
