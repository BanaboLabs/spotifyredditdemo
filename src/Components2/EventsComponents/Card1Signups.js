import React, { useState, useEffect } from "react";
import styled from "styled-components";
import blacksimplearrow from "../../Images2/blacksimplearrow.svg";
import purchasesdata1 from "../../Images2/PurchasesData1.svg";
import purchasesdata2 from "../../Images2/PurchasesData2.svg";
import purchasesdata3 from "../../Images2/PurchasesData3.svg";
import purchasesdata4 from "../../Images2/PurchasesData4.svg";
import purchasesdata5 from "../../Images2/PurchasesData5.svg";
import purchasesdata6 from "../../Images2/PurchasesData6.svg";
import purchasesdata7 from "../../Images2/PurchasesData7.svg";
import TabHighlighted2 from "../../Images2/tabhighlighted2.svg";
import TabHighlightedClear2 from "../../Images2/tabhighlightedclear2.svg";
import instagram from "../../Images2/instagramlogonew.png";
import bing from "../../Images2/binglogonew.png";
import facebook from "../../Images2/facebooklogonew.png";
import google from "../../Images2/googlelogonew.png";
import hackernews from "../../Images2/hackernewslogonew.png";
import tiktok from "../../Images2/tiktoklogonew.png";
import linkedin from "../../Images2/linkedinlogonew.png";
import whitefoghorizontal from "../../Images2/whitefoghorizontal.svg";

// Purchases Breakdown

export default function Card1Signups(props) {
  const [toggleActive1, setToggleActive1] = useState(false);
  const [toggleActive2, setToggleActive2] = useState(false);
  const [highlight1, setHighlight1] = useState("Custom");
  const [highlight2, setHighlight2] = useState("Purchases");
  const [isShown, setIsShown] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [total, setTotal] = useState("2.4k");

  return (
    <SmallRectangle>
      <ParentVStack>
        <TopHStack>
          <TitleText>SIGN UPS PER TRAFFIC SOURCE</TitleText>
          <MiniHStack>
            <VStackNew>
              <ToggleRectangle>
                <InsideRectangleWrapper>
                  <RectangleText>{highlight1}</RectangleText>
                  <BlackSimpleArrow1
                    toggleActive1={toggleActive1}
                    src={blacksimplearrow}
                    onClick={() => setToggleActive1(!toggleActive1)}
                  />
                </InsideRectangleWrapper>
              </ToggleRectangle>
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
            </VStackNew>
          </MiniHStack>
        </TopHStack>
        <MegaDiv>
          <HStack1>
            <BoldText1>Sources</BoldText1>
            <SemiBoldText1>Amount</SemiBoldText1>
          </HStack1>
          <Line1 />
          <VStack1>
            <HStack151>
              {isShown ? (
                <AreaWrapper1>
                  <GrayRectangle1>
                    <HStack151 onClick={() => setClicked(!clicked)}>
                      <HStack21>
                        <CompanyLogo1 src={google} />
                        <GrayText2>Google SEO</GrayText2>
                      </HStack21>
                      <ShadowRectangle1>
                        <DarkText1>1.2k</DarkText1>
                      </ShadowRectangle1>
                    </HStack151>
                  </GrayRectangle1>
                </AreaWrapper1>
              ) : (
                <div>
                  <HStack151>
                    <HStack21>
                      <CompanyLogo1 src={google} />
                      <GrayText2>Google SEO</GrayText2>
                    </HStack21>
                    <ShadowRectangle1>
                      <DarkText1>1.2k</DarkText1>
                    </ShadowRectangle1>
                  </HStack151>
                </div>
              )}
            </HStack151>
            <HStack151>
              <HStack21>
                <CompanyLogo1 src={instagram} />
                <GrayText2>Instagram</GrayText2>
              </HStack21>
              <ShadowRectangle1>
                <DarkText1>723</DarkText1>
              </ShadowRectangle1>
            </HStack151>
            <HStack151>
              <HStack21>
                <CompanyLogo1 src={facebook} />
                <GrayText2>Facebook</GrayText2>
              </HStack21>
              <ShadowRectangle1>
                <DarkText1>457</DarkText1>
              </ShadowRectangle1>
            </HStack151>
            <HStack151>
              <HStack21>
                <CompanyLogo1 src={google} />
                <GrayText2>Google Direct Search</GrayText2>
              </HStack21>
              <ShadowRectangle1>
                <DarkText1>49</DarkText1>
              </ShadowRectangle1>
            </HStack151>
            <HStack151>
              <HStack21>
                <CompanyLogo1 src={linkedin} />
                <GrayText2>LinkedIn</GrayText2>
              </HStack21>
              <ShadowRectangle1>
                <DarkText1>22</DarkText1>
              </ShadowRectangle1>
            </HStack151>
          </VStack1>
        </MegaDiv>
      </ParentVStack>
      <VerticalLine1 />
      <BoldBlackText1 highlight2={highlight2}>{total}</BoldBlackText1>
      <TotalText1>Total</TotalText1>
      <WhiteFogHorizontal src={whitefoghorizontal} />
    </SmallRectangle>
  );
}

const WhiteFogHorizontal = styled.img`
  z-index: 20;
  position: absolute;
  left: 0px;
  bottom: 10px;
`;

const BlueBackground = styled.div`
  width: 60px;
  height: 19px;
  background: #e4f2ff;
  border-radius: 4px;
`;

const ModalBlackSemiBold11 = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 14px;
  padding-top: 3px;
  padding-left: 10.5px;
  color: #666678;
`;

const VStackModal = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 14px;
  padding-left: 14px;
  width: 300px;
  gap: 7px;
`;

const VerticalLine1 = styled.div`
  position: absolute;
  right: 142px;
  bottom: 325px;
  width: 27.51px;
  height: 2.02px;
  background: #e4f2ff;
  transform: matrix(0, -1, 1, 0, 0, 0);
`;

const TotalText1 = styled.div`
  position: absolute;
  right: 114px;
  bottom: 319px;
  font-size: 14px;
  color: #a9a9b9;
  font-family: "ProximaNovaSemiBold";
`;

const BoldBlackText1 = styled.div`
  position: absolute;
  right: 63px;
  bottom: 315px;
  font-size: 18px;
  line-height: 22px;
  color: #252531;
  font-family: "ProximaNovaSemiBold";
`;

const MegaDiv = styled.div`
  padding-right: 100px;
`;

const CompanyLogo = styled.img`
  padding-left: 10px;
`;

const Wrapper1 = styled.div`
  position: absolute;
  left: 45px;
`;

const CompanyLogo1 = styled.img``;

const HackerNewsLogo1 = styled.img`
  padding-left: 10px;
  width: 26px;
`;

const HStack1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 804px;
  padding-bottom: 10px;
  padding-left: 0px;
`;

const BoldText1 = styled.div`
  font-family: "ProximaNovaBold";
  font-size: 16px;
  color: #666678;
`;

const SemiBoldText1 = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 16px;
  color: #666678;
`;

const Line1 = styled.div`
  position: absolute;
  left: 50px;
  width: 920px;
  height: 1px;
  background: #e4f2ff;
`;

const VStack1 = styled.div`
  padding-top: 18px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const HStack151 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 922px;
`;

const HStack21 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const GrayText1 = styled.div`
  font-size: 16px;
  line-height: 16px;
  color: #9a99a9;
  font-family: "ProximaNovaRegular";
  cursor: pointer;
`;

const GrayText2 = styled.div`
  font-size: 16px;
  line-height: 16px;
  color: #9a99a9;
  font-family: "ProximaNovaRegular";
`;

const ShadowRectangle1 = styled.div`
  width: 54px;
  height: 27px;
  background: #ffffff;
  box-shadow: 2px 5px 20px #f1f1f1;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const DarkText1 = styled.div`
  font-family: "ProximaNovaRegular";
  font-size: 15px;
  color: #666678;
  padding-top: 6px;
`;

const GrayRectangle1 = styled.div`
  width: 360px;
  height: 27px;
  background: rgba(238, 238, 238, 0.6);
  border-radius: 4px;
  padding-right: 50px;
`;

const AreaWrapper1 = styled.div``;

const ToggleRectangle1 = styled.div`
  position: absolute;
  bottom: 134px;
  right: 164px;
  width: 110px;
  height: 165px;
  background: #ffffff;
  z-index: 30;
  box-shadow: 2px 5px 100px 5px #ededef;
  border-radius: 10px;
`;

const VStackNew = styled.div`
  display: flex;
  flex-direction: column;
`;

const BackgroundRectangle = styled.div`
  width: 51.42px;
  height: 23px;
  background: #ffffff;
  box-shadow: 2px 5px 20px #f1f1f1;
  border-radius: 4px;
`;

const InsideText = styled.div`
  font-size: 13px;
  color: #666678;
  font-family: "ProximaNovaRegular";
  padding-left: 14px;
  padding-top: 6px;
`;

const DataVStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-top: 10px;
`;

const DataParentHStack = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 380px;
`;

const LabelHStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 260px;
`;

const LabelFont = styled.div`
  font-size: 12px;
  color: #666678;
  font-family: "ProximaNovaBold";
`;

const BlueLine = styled.div`
  width: 347.88px;
  height: 1.3px;
  background: #e4f2ff;
`;

const ToggleRectangle = styled.div`
  width: 106.88px;
  height: 28px;
  background: #eeeef4;
  border-radius: 8px;
`;

const ArrowIMG = styled.img`
  cursor: pointer;
`;

const InsideRectangleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 7px;
  padding-left: 4px;
  gap: 3px;
  justify-content: center;
  align-items: center;
`;

const RectangleText = styled.div`
  color: #252531;
  font-size: 15px;
  font-family: "ProximaNovaSemibold";
`;

const BoldBlackText = styled.div`
  font-family: "ProximaNovaSemibold";
  color: #252531;
  font-size: 18px;
`;

const VerticalLine = styled.div`
  width: 27.51px;
  height: 2.02px;

  background: #e4f2ff;
  transform: matrix(0, -1, 1, 0, 0, 0);
`;

const MiniHStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1px;
  align-items: center;
  justify-content: center;
`;

const TitleText = styled.div`
  font-size: 16px;
  font-family: "ProximaNovaSemiBold";
  color: #88879b;
  width: 300px;
  line-height: 19px;
`;

const ParentVStack = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  padding-left: 50px;
  gap: 20px;
`;

const InfoStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const TopHStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 392px;
  align-items: center;
`;

const SmallRectangle = styled.div`
  width: 1020px;
  height: 370px;

  background: #ffffff;
  /* La La La */

  box-shadow: 0px 11px 28.5px 6.5px #eceff4;
  border-radius: 10px;
`;

///////

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
  width: 187.64px;
  height: 157px;
  position: absolute;
  right: 36px;
  bottom: 155px;
  z-index: 1;
  background: #ffffff;
  box-shadow: 2px 5px 20px #f1f1f1;
  border-radius: 4px;
  display: ${(props) => (props.toggleActive2 ? "none" : "null")};
`;

const TextGray = styled.div`
  font-family: "ProximaNovaSemibold";
  font-size: 14px;
  color: #666678;
`;

const VStack = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 300px;
  gap: 7px;
`;

const HStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 76px;
`;

const HStack2 = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  gap: 0px;
  text-align: left;
`;

const BlueCircle = styled.div`
  background: #e4f2ff;
  border-radius: 4px;
  width: 48.42px;
  height: 17px;
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
  /* identical to box height */
  color: #252531;
`;

const AttributionTitle = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 16px;
  line-height: 19px;
  color: #88879b;
`;

const GrayButtonBackground = styled.div`
  width: 108.95px;
  height: 28px;
  background: #eeeef4;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
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
  gap: 10px;
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

const ToggleRectangle2 = styled.div`
  position: absolute;
  top: 100px;
  left: 340px;
  width: 113px;
  height: 155px;
  background: #ffffff;
  z-index: 200px;
  /* Banabo No Hover */
  box-shadow: 2px 5px 100px 5px #ededef;
  border-radius: 10px;
`;

const ModalGraySemiBold = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 14px;
  padding-top: 3px;
  padding-left: 6px;
  color: #666678;
`;

const ModalBlackSemiBold = styled.div`
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

const TabHighlightedClear22 = styled.div`
  cursor: pointer;
`;

const TabHighlighted22 = styled.div`
  cursor: pointer;
`;
