import React, { useState, useEffect } from "react";
import styled from "styled-components";
import livegreenbutton from "../../Images2/livegreenbutton.svg";
import addblackbutton from "../../Images2/addblackbutton.svg";
import connectcard from "../../Images2/connectcard.svg";
import blackx from "../../Images2/blackx.svg";
import logogrid from "../../Images2/logogrid.png";
import BlurBackground2 from "../../Images2/BlurBackground2.png";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import facebooksigninbutton from "../../Images2/facebooksigninbutton.png";
import snapchatsigninbutton from "../../Images2/snapchatsigninbutton.png";
import tiktoksigninbutton from "../../Images2/tiktoksigninbutton.png";
import googlesigninbutton from "../../Images2/googlesigninbutton.png";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

export default function CampaignsConnect() {
  const [isShown, setIsShown] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const jsonArray = [
    {
      CampaignDate: "2/12/22",
      CampaignLetter: "S",
      CampaignSource: "SNAPCHAT",
      CampaignName: "Snapchat Easter Ads",
      CampaignBudget: "$960",
      CampaignTimeFrame: "Feb 3 - Mar 19",
    },
    {
      CampaignDate: "2/12/22",
      CampaignLetter: "S",
      CampaignSource: "SNAPCHAT",
      CampaignName: "Snapchat Stories Buy",
      CampaignBudget: "$8120",
      CampaignTimeFrame: "Feb 1 - Mar 31",
    },
    {
      CampaignDate: "1/11/22",
      CampaignLetter: "S",
      CampaignSource: "SNAPCHAT",
      CampaignName: "Snapchat Influencers",
      CampaignBudget: "$1210",
      CampaignTimeFrame: "Jan 9 - Jan 30",
    },
    {
      CampaignDate: "1/9/22",
      CampaignLetter: "G",
      CampaignSource: "GOOGLE ADS",
      CampaignName: "Search Campaign V1",
      CampaignBudget: "$2310",
      CampaignTimeFrame: "Jan 7 - Apr 17",
    },
    {
      CampaignDate: "1/9/22",
      CampaignLetter: "G",
      CampaignSource: "GOOGLE ADS",
      CampaignName: "Custom AdWords ",
      CampaignBudget: "$12160",
      CampaignTimeFrame: "Jan 3 - Apr 19",
    },
    {
      CampaignDate: "1/7/22",
      CampaignLetter: "T",
      CampaignSource: "TIKTOK",
      CampaignName: "TikTok Campaign One",
      CampaignBudget: "$4400",
      CampaignTimeFrame: "Jan 2 - Feb 6",
    },
  ];

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  useEffect(() => {
    console.log(showModal);
  }, [showModal]);

  //=============================================================================
  // ## Facebook
  //=============================================================================
  const responseFacebook = (response) => {
    console.log("I Worked");
    console.log(response);
    /*
    async function SendFacebookToken(accessToken) {
      console.log("Running Really Facebook Fast");
      console.log(accessToken);
      console.log("Running Really Facebook Fast");
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var raw = JSON.stringify({ accessToken: accessToken });
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      return await fetch(
        "http://localhost:5012/api/facebook/write/storetokendb",
        // @ts-ignore
        requestOptions
      ).then((response) => console.log(response));
    }
    SendFacebookToken("lol");
*/
  };
  const clickedFacebook = (response) => {
    console.log("I Have Been Clicked");
    console.log(response);
  };

  return (
    <div>
      {showModal ? (
        <MotionDiv
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.2 }}
        >
          <BlueBlur />
          <RectangleModal>
            <div onClick={() => setIsShown(false)}>
              <ClickIMG11 src={blackx} onClick={() => setShowModal(false)} />
            </div>
            <ContentWrapper>
              <MiddleVStack>
                <LargeBlackText>
                  Select a Marketing Channel to Connect With
                </LargeBlackText>
                <MediumGrayText>
                  We’ll have you sign in directly with your marketing accounts.
                  This is a one time process
                </MediumGrayText>
              </MiddleVStack>
            </ContentWrapper>
            <LogoGridWrapper>
              <LogoGridVStack>
                <FacebookLogin
                  appId="515364906844404"
                  autoLoad={false}
                  fields="name,email,picture"
                  onClick={clickedFacebook}
                  callback={responseFacebook}
                  render={(renderProps) => (
                    <LogoFormatFacebook
                      src={facebooksigninbutton}
                      onClick={renderProps.onClick}
                    />
                  )}
                />
                <LogoFormat src={snapchatsigninbutton} />
                <LogoFormat src={tiktoksigninbutton} />
                <LogoFormatGoogle src={googlesigninbutton} />
              </LogoGridVStack>
            </LogoGridWrapper>
          </RectangleModal>
        </MotionDiv>
      ) : (
        <div>
          <TitleRectangle>
            <TitleText>3rd Party Campaigns </TitleText>
          </TitleRectangle>
          <ClickIMG1 src={livegreenbutton} />
          <ClickIMG2
            src={addblackbutton}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            onClick={() => setShowModal(true)}
          />
          {isShown ? (
            <AddEventRectangle>
              <AddEventWrapper>
                <BoldEventText>Connect a Source</BoldEventText>
                <RegularEventText>
                  Create a connection with your external marketing channels and
                  Banabo
                </RegularEventText>
              </AddEventWrapper>
            </AddEventRectangle>
          ) : (
            <div> </div>
          )}
          <HStackWrapper>
            <ParentHStack>
              <ChildHStack1>
                <TheTitleText>Date Connected</TheTitleText>
                <TheTitleText>Source</TheTitleText>
              </ChildHStack1>
              <ChildHStack2>
                <TheTitleText>Campaign Name</TheTitleText>
                <TheTitleText>Budget</TheTitleText>
                <TheTitleText1>Time Frame</TheTitleText1>
              </ChildHStack2>
            </ParentHStack>
          </HStackWrapper>
          <VStack>
            <HStackWrapper2>
              <ParentHStack2>
                <ChildHStack1>
                  <RegularText>2/12/22</RegularText>
                  <InnerHStack1>
                    <GreenCircle>
                      <BlackLetter>F</BlackLetter>
                    </GreenCircle>
                    <CompanyNameText>SNAPCHAT</CompanyNameText>
                  </InnerHStack1>
                </ChildHStack1>
                <ChildHStack3>
                  <RegularText>Snapchat Easter Ads</RegularText>
                  <DarkGreenTextWrapper>
                    <DarkGreenText>$960</DarkGreenText>
                  </DarkGreenTextWrapper>
                  <TimeFrameWrapper>
                    <RegularText1>Feb 3 - Mar 19</RegularText1>
                  </TimeFrameWrapper>
                </ChildHStack3>
              </ParentHStack2>
              <LineWrapper>
                <SmallLine />
              </LineWrapper>
            </HStackWrapper2>
            <HStackWrapper2>
              <ParentHStack2>
                <ChildHStack1>
                  <RegularText>2/12/22</RegularText>
                  <InnerHStack2>
                    <GreenCircle>
                      <BlackLetter>F</BlackLetter>
                    </GreenCircle>
                    <CompanyNameText>SNAPCHAT</CompanyNameText>
                  </InnerHStack2>
                </ChildHStack1>
                <ChildHStack3>
                  <RegularText>Snapchat Stories Buy</RegularText>
                  <DarkGreenTextWrapper>
                    <DarkGreenText2>$8120</DarkGreenText2>
                  </DarkGreenTextWrapper>
                  <TimeFrameWrapper>
                    <RegularText2>Feb 1 - Mar 31</RegularText2>
                  </TimeFrameWrapper>
                </ChildHStack3>
              </ParentHStack2>
              <LineWrapper>
                <SmallLine />
              </LineWrapper>
            </HStackWrapper2>
            <HStackWrapper2>
              <ParentHStack3>
                <ChildHStack1>
                  <RegularText>1/11/22</RegularText>
                  <InnerHStack3>
                    <GreenCircle>
                      <BlackLetter>S</BlackLetter>
                    </GreenCircle>
                    <CompanyNameText>SNAPCHAT</CompanyNameText>
                  </InnerHStack3>
                </ChildHStack1>
                <ChildHStack3>
                  <RegularText>Snapchat Influencers</RegularText>
                  <DarkGreenTextWrapper>
                    <DarkGreenText3>$1210</DarkGreenText3>
                  </DarkGreenTextWrapper>
                  <TimeFrameWrapper>
                    <RegularText3>Jan 9 - Jan 30</RegularText3>
                  </TimeFrameWrapper>
                </ChildHStack3>
              </ParentHStack3>
              <LineWrapper>
                <SmallLine />
              </LineWrapper>
            </HStackWrapper2>
            <HStackWrapper2>
              <ParentHStack3>
                <ChildHStack1>
                  <RegularText>1/9/22</RegularText>
                  <InnerHStack4>
                    <GreenCircle>
                      <BlackLetter2>G</BlackLetter2>
                    </GreenCircle>
                    <CompanyNameText>GOOGLE ADS</CompanyNameText>
                  </InnerHStack4>
                </ChildHStack1>
                <ChildHStack3>
                  <RegularText>Search Campaign V1</RegularText>
                  <DarkGreenTextWrapper>
                    <DarkGreenText4>$4400</DarkGreenText4>
                  </DarkGreenTextWrapper>
                  <TimeFrameWrapper>
                    <RegularText4>Jan 7 - Apr 17</RegularText4>
                  </TimeFrameWrapper>
                </ChildHStack3>
              </ParentHStack3>
              <LineWrapper>
                <SmallLine />
              </LineWrapper>
            </HStackWrapper2>
            <HStackWrapper2>
              <ParentHStack3>
                <ChildHStack1>
                  <RegularText>1/9/22</RegularText>
                  <InnerHStack5>
                    <GreenCircle>
                      <BlackLetter2>G</BlackLetter2>
                    </GreenCircle>
                    <CompanyNameText>GOOGLE ADS</CompanyNameText>
                  </InnerHStack5>
                </ChildHStack1>
                <ChildHStack3>
                  <RegularText>Custom AdWords</RegularText>
                  <DarkGreenTextWrapper>
                    <DarkGreenText5>$2310</DarkGreenText5>
                  </DarkGreenTextWrapper>
                  <TimeFrameWrapper>
                    <RegularText5>Jan 3 - Apr 19</RegularText5>
                  </TimeFrameWrapper>
                </ChildHStack3>
              </ParentHStack3>
              <LineWrapper>
                <SmallLine />
              </LineWrapper>
            </HStackWrapper2>
            <HStackWrapper2>
              <ParentHStack3>
                <ChildHStack1>
                  <RegularText>1/7/22</RegularText>
                  <InnerHStack6>
                    <GreenCircle>
                      <BlackLetter>T</BlackLetter>
                    </GreenCircle>
                    <CompanyNameText>TIKTOK</CompanyNameText>
                  </InnerHStack6>
                </ChildHStack1>
                <ChildHStack3>
                  <RegularText>TikTok Campaign One</RegularText>
                  <DarkGreenTextWrapper>
                    <DarkGreenText6>$12160</DarkGreenText6>
                  </DarkGreenTextWrapper>
                  <TimeFrameWrapper>
                    <RegularText6>Jan 2 - Feb 6</RegularText6>
                  </TimeFrameWrapper>
                </ChildHStack3>
              </ParentHStack3>
              <LineWrapper>
                <SmallLine />
              </LineWrapper>
            </HStackWrapper2>
          </VStack>
          <LongBlueLine />
        </div>
      )}
    </div>
  );
}

const LogoFormatFacebook = styled.img`
  height: 55px;
  width: auto;
  cursor: pointer;
`;

const LogoFormat = styled.img`
  height: 55px;
  width: auto;
`;

const LogoFormatGoogle = styled.img`
  height: 55px;
  width: auto;
  box-shadow: 0px 0px 15px 2px #eeeeee;
  border-radius: 10px;
`;

const LogoGridVStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-left: 20px;
`;

const LogoGridHStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

const MotionDiv = styled(motion.div)``;

const AddEventRectangle = styled.div`
  position: absolute;
  width: 285px;
  height: 79px;
  left: 560px;
  top: 245px;
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

const LogoGridWrapper = styled.div`
  position: absolute;
  padding-top: 35px;
  padding-left: 130px;
`;

const LogoGrid = styled.img`
  cursor: pointer;
`;

const ContentWrapper = styled.div`
  padding-left: 150px;
  padding-top: 55px;
`;

const ClickIMG11 = styled.img`
  cursor: pointer;
  position: absolute;
  padding-top: 20px;
  padding-left: 800px;
`;

const RectangleModal = styled.div`
  position: absolute;
  left: 500px;
  top: 120px;
  border-radius: 20px;
  width: 840px;
  height: 765px;
  background: linear-gradient(0deg, #ffffff, #ffffff),
    linear-gradient(0deg, #ffffff, #ffffff),
    linear-gradient(0deg, #ffffff, #ffffff), #ffffff;
  border-radius: 10px;
  z-index: 100;
`;

const RegularText = styled.div`
  font-size: 16px;
  font-family: "ProximaNovaRegular";
  color: #6a6986;
`;

const RegularText1 = styled.div`
  font-size: 16px;
  font-family: "ProximaNovaRegular";
  color: #6a6986;
  padding-left: 5px;
`;

const RegularText2 = styled.div`
  font-size: 16px;
  font-family: "ProximaNovaRegular";
  color: #6a6986;
  padding-left: 1px;
`;

const RegularText3 = styled.div`
  font-size: 16px;
  font-family: "ProximaNovaRegular";
  color: #6a6986;
  padding-left: 7px;
`;

const RegularText4 = styled.div`
  font-size: 16px;
  font-family: "ProximaNovaRegular";
  color: #6a6986;
  padding-left: 11px;
`;

const RegularText5 = styled.div`
  font-size: 16px;
  font-family: "ProximaNovaRegular";
  color: #6a6986;
  padding-left: 32px;
`;

const RegularText6 = styled.div`
  font-size: 16px;
  font-family: "ProximaNovaRegular";
  color: #6a6986;
`;

const DarkGreenText2 = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 16px;
  color: #00786a;
  padding-left: 5px;
`;

const DarkGreenText3 = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 16px;
  color: #00786a;
  padding-left: 11px;
`;

const DarkGreenText4 = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 16px;
  color: #00786a;
  padding-left: 15px;
`;

const DarkGreenText5 = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 16px;
  color: #00786a;
  padding-left: 37px;
`;

const DarkGreenText6 = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 16px;
  color: #00786a;
  padding-left: 5px;
`;

const ParentHStack3 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 534px;
`;

const BlackLetter2 = styled.div`
  font-size: 16px;
  color: #000000;
  font-family: "ProximaNovaSemiBold";
  padding-top: 7px;
  padding-left: 8px;
`;

const InnerHStack6 = styled.div`
  position: absolute;
  top: 315px;
  left: 195px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

const InnerHStack5 = styled.div`
  position: absolute;
  top: 250px;
  left: 195px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

const InnerHStack4 = styled.div`
  position: absolute;
  top: 185px;
  left: 195px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

const InnerHStack3 = styled.div`
  position: absolute;
  top: 120px;
  left: 195px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

const InnerHStack2 = styled.div`
  position: absolute;
  top: 55px;
  left: 195px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

const VStack = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 435px;
  top: 365px;
  gap: 26px;
`;

const HStackWrapper2 = styled.div``;

const DarkGreenTextWrapper = styled.div`
  width: 100px;
  justify-content: left;
`;

const DarkGreenText = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 16px;
  color: #00786a;
  padding-left: 8px;
`;

const TimeFrameWrapper = styled.div`
  width: 200px;
  justify-content: left;
`;

const ChildHStack3 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 62px;
`;

const ChildHStack2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 100px;
`;

const InnerHStack1 = styled.div`
  position: absolute;
  top: -6px;
  left: 195px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

const GreenCircle = styled.div`
  width: 28px;
  height: 28px;
  background: #54dfe6;
  border-radius: 60px;
`;

const ClickIMG2 = styled.img`
  cursor: pointer;
  position: absolute;
  left: 475px;
  top: 216px;
`;

const LargeBlackText = styled.div`
  font-family: "ProximaNovaSemiBold";
  color: #252531;
  font-size: 26px;
  width: 300px;
  line-height: 32px;
`;

const MediumGrayText = styled.div`
  font-family: "ProximaNovaRegular";
  font-size: 16px;
  color: #9a99a9;
  width: 340px;
  line-height: 19px;
`;

const MiddleVStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const BlueBlur = styled.div`
  position: absolute;
  left: 0px;
  bottom: 500px;
  background-image: url(${BlurBackground2});
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

const ConnectButton = styled.img`
  position: absolute;
  left: 540px;
  top: 242px;
  cursor: pointer;
  z-index: 20;
`;

const SmallLine = styled.div`
  width: 872px;
  height: 2px;
  background: #d7eeff;
  padding-left: 80px;
`;

const LineWrapper = styled.div`
  padding-top: 20px;
  padding-left: 198px;
`;

const CompanyNameText = styled.div`
  font-size: 16px;
  color: #6a6986;
  font-family: "ProximaNovaSemiBold";
`;

const BlackLetter = styled.div`
  font-size: 16px;
  color: #000000;
  font-family: "ProximaNovaSemiBold";
  padding-top: 8px;
  padding-left: 10px;
`;

////////

const TheTitleText = styled.div`
  color: #6a6986;
  font-size: 16px;
  font-family: "ProximaNovaSemiBold";
`;

const TheTitleText1 = styled.div`
  color: #6a6986;
  font-size: 16px;
  font-family: "ProximaNovaSemiBold";
  padding-left: 6px;
`;

const HStackWrapper = styled.div`
  position: absolute;
  left: 435px;
  top: 318px;
`;

const ParentHStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 330px;
`;

const ParentHStack2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 526px;
`;

const ChildHStack1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 80px;
`;

const LongBlueLine = styled.div`
  position: absolute;
  width: 1082px;
  height: 2px;
  left: 420px;
  top: 340px;
  background: #d7eeff;
`;

const ClickIMG1 = styled.img`
  position: absolute;
  left: 382px;
  top: 216px;
`;

const TitleRectangle = styled.div`
  position: absolute;
  width: 256px;
  height: 52px;
  left: 420px;
  top: 120px;
  background: #f0f0f5;
  border-radius: 14px;
`;

const TitleText = styled.div`
  color: #252531;
  font-size: 22px;
  font-family: "ProximaNovaRegular";
  padding-top: 15px;
  padding-left: 24px;
`;
