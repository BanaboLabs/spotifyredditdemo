import React, { useState, useEffect } from "react";
import styled from "styled-components";
import livegreenbutton from "../../Images2/livegreenbutton.svg";
import addblackbutton from "../../Images2/addblackbutton.svg";
import connectcard from "../../Images2/connectcard.svg";
import blackx from "../../Images2/blackx.svg";
import logogrid from "../../Images2/logogrid.png";
import BlurBackground2 from "../../Images2/BlurBackground2.png";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import facebooksigninbutton from "../../Images2/facebookbuttonprod.png";
import googlesigninbutton from "../../Images2/googlebuttonprod.png";
import tiktoksigninbutton from "../../Images2/tiktokbuttonprod.png";
import redditsigninbutton from "../../Images2/redditbuttonprod.png";
import spotifysigninbutton from "../../Images2/spotifybuttonprod.png";
import lightningon from "../../Images2/lightningon.svg";
import lightningoff from "../../Images2/lightningoff.svg";

export default function CampaignsConnect() {
  const [isShown, setIsShown] = useState(false);
  const [showModal, setShowModal] = useState(false);

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

  const facebook_client_id = "333005582148546"; // Banabo - API APP ID
  const facebook_redirect_uri = "https://app.banabo.io/campaigns/connect";
  const facebook_state = "foobarfacebook";
  const facebook_scope = "ads_management";

  const google_client_id =
    "914021793896-ri83q4agqaag5tglc98h11tkcf7t9ai1.apps.googleusercontent.com";
  const google_redirect_uri = "https://app.banabo.io/campaigns/connect/";
  const google_state = "foobargoogle";
  const google_access_type = "offline";
  const google_scope = "email%20profile%20openid";
  const google_response_type = "code";

  const reddit_client_id = "iQwcHNSmzi17tdHSL4_80w"; // Banabo - API APP ID
  const reddit_redirect_uri = "https://app.banabo.io/campaigns/connect/";
  const reddit_state = "foobarreddit";
  const reddit_response_type = "code";
  const reddit_scope = "adsconversions";
  const reddit_duration = "permanent";

  const tiktok_client_id = "7089266317793984514"; // Banabo - API APP ID
  const tiktok_state = "foobartiktok";

  const spotify_client_id = "61d64c8895de42a68a7cd283c51ac037"; // Banabo - API APP ID
  const spotify_redirect_uri = "https://webapp.banabo.io/";
  const spotify_state = "foobarspotify";
  const spotify_response_type = "code";
  const spotify_scope = "streaming";
  return (
    <PaddingDiv>
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
                  We’ll have you sign in directly with your <br /> advertising
                  accounts. This is a one time process.
                </MediumGrayText>
              </MiddleVStack>
            </ContentWrapper>
            <LogoGridWrapper>
              <LogoGridVStack>
                <TheMajorHStack>
                  <LogoFormat
                    src={spotifysigninbutton}
                    onClick={() =>
                      window.open(
                        `https://accounts.spotify.com/authorize/?response_type=${spotify_response_type}&client_id=${spotify_client_id}&redirect_uri=${spotify_redirect_uri}&state=${spotify_state}&scope=${spotify_scope}`,
                        "_self"
                      )
                    }
                  />
                  <ShadowImgNone src={lightningoff} />
                </TheMajorHStack>
                <TheMajorHStack>
                  <LogoFormat
                    src={redditsigninbutton}
                    onClick={() =>
                      window.open(
                        `https://www.reddit.com/api/v1/authorize?response_type=${reddit_response_type}&client_id=${reddit_client_id}&redirect_uri=${reddit_redirect_uri}&state=${reddit_state}&scope=${reddit_scope}&duration=${reddit_duration}`,
                        "_self"
                      )
                    }
                  />
                  <ShadowImgNone src={lightningoff} />
                </TheMajorHStack>
                <TheMajorHStack>
                  <LogoFormat
                    src={tiktoksigninbutton}
                    onClick={() =>
                      window.open(
                        `https://ads.tiktok.com/marketing_api/auth?app_id=${tiktok_client_id}&state=${tiktok_state}&redirect_uri=https%3A%2F%2Fapp.banabo.io%2Fcampaigns%2Fconnect&rid=mtp6b07ttm`,
                        "_self"
                      )
                    }
                  />
                  <ShadowImgNone src={lightningoff} />
                </TheMajorHStack>
                <TheMajorHStack>
                  <LogoFormat
                    src={facebooksigninbutton}
                    onClick={() =>
                      window.open(
                        `https://www.facebook.com/v13.0/dialog/oauth?client_id=${facebook_client_id}&redirect_uri=${facebook_redirect_uri}&state=${facebook_state}&scope=${facebook_scope}`,
                        "_self"
                      )
                    }
                  />
                  <ShadowImg src={lightningon} />
                </TheMajorHStack>
                <TheMajorHStack>
                  <LogoFormat1
                    src={googlesigninbutton}
                    onClick={() =>
                      window.open(
                        `https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?nonce=12345&access_type=${google_access_type}&client_id=${google_client_id}&scope=${google_scope}&redirect_uri=${google_redirect_uri}&state=${google_state}&response_type=${google_response_type}`,
                        "_self"
                      )
                    }
                  />
                  <ShadowImg src={lightningon} />
                </TheMajorHStack>
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
              <ParentishStack>
                <ChildHStack2>
                  <TheTitleText>Campaign Name</TheTitleText>
                  <TheTitleText>Budget</TheTitleText>
                </ChildHStack2>
                <TheTitleText1>Time Frame</TheTitleText1>
              </ParentishStack>
            </ParentHStack>
          </HStackWrapper>
          <VStack>
            <HStackWrapper2>
              <ParentHStack2>
                <ChildHStack1>
                  <RegularText>3/24/22</RegularText>
                  <InnerHStack1>
                    <GreenCircle>
                      <BlackLetter>F</BlackLetter>
                    </GreenCircle>
                    <CompanyNameText>FACEBOOK</CompanyNameText>
                  </InnerHStack1>
                </ChildHStack1>
                <ChildHStack3>
                  <TheTextWrapper>
                    <RegularText>San Francisco Ad Buys</RegularText>
                  </TheTextWrapper>
                  <DarkGreenTextWrapper>
                    <DarkGreenText>$300</DarkGreenText>
                  </DarkGreenTextWrapper>
                  <TimeFrameWrapper>
                    <RegularText>Apr 24 - Apr 30</RegularText>
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
                  <RegularText>3/22/22</RegularText>
                  <InnerHStack2>
                    <GreenCircle>
                      <BlackLetter>F</BlackLetter>
                    </GreenCircle>
                    <CompanyNameText>FACEBOOK</CompanyNameText>
                  </InnerHStack2>
                </ChildHStack1>
                <ChildHStack3>
                  <TheTextWrapper>
                    <RegularText>Software Focused Ads</RegularText>
                  </TheTextWrapper>
                  <DarkGreenTextWrapper>
                    <DarkGreenText>$740</DarkGreenText>
                  </DarkGreenTextWrapper>
                  <TimeFrameWrapper>
                    <RegularText>Apr 23 - Apr 30</RegularText>
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
                  <RegularText>3/21/22</RegularText>
                  <InnerHStack3>
                    <GreenCircle>
                      <BlackLetter>F</BlackLetter>
                    </GreenCircle>
                    <CompanyNameText>FACEBOOK</CompanyNameText>
                  </InnerHStack3>
                </ChildHStack1>
                <ChildHStack3>
                  <TheTextWrapper>
                    <RegularText>Facebook Campaign V1</RegularText>
                  </TheTextWrapper>
                  <DarkGreenTextWrapper>
                    <DarkGreenText>$790</DarkGreenText>
                  </DarkGreenTextWrapper>
                  <TimeFrameWrapper>
                    <RegularText>Apr 20 - Apr 30</RegularText>
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
                  <RegularText>3/19/22</RegularText>
                  <InnerHStack4>
                    <GreenCircle>
                      <BlackLetter2>G</BlackLetter2>
                    </GreenCircle>
                    <CompanyNameText>GOOGLE ADS</CompanyNameText>
                  </InnerHStack4>
                </ChildHStack1>
                <ChildHStack3>
                  <TheTextWrapper>
                    <RegularText>The Wave Campaign</RegularText>
                  </TheTextWrapper>
                  <DarkGreenTextWrapper>
                    <DarkGreenText>$860</DarkGreenText>
                  </DarkGreenTextWrapper>
                  <TimeFrameWrapper>
                    <RegularText>Apr 18 - Apr 30</RegularText>
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
                  <RegularText>3/14/22</RegularText>
                  <InnerHStack5>
                    <GreenCircle>
                      <BlackLetter2>G</BlackLetter2>
                    </GreenCircle>
                    <CompanyNameText>GOOGLE ADS</CompanyNameText>
                  </InnerHStack5>
                </ChildHStack1>
                <ChildHStack3>
                  <TheTextWrapper>
                    <RegularText>Banabo Basic Ads</RegularText>
                  </TheTextWrapper>
                  <DarkGreenTextWrapper>
                    <DarkGreenText>$970</DarkGreenText>
                  </DarkGreenTextWrapper>
                  <TimeFrameWrapper>
                    <RegularText>Apr 13 - Apr 30</RegularText>
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
                  <RegularText>3/12/22</RegularText>
                  <InnerHStack6>
                    <GreenCircle>
                      <BlackLetter>G</BlackLetter>
                    </GreenCircle>
                    <CompanyNameText>GOOGLE ADS</CompanyNameText>
                  </InnerHStack6>
                </ChildHStack1>
                <ChildHStack3>
                  <TheTextWrapper>
                    <RegularText>Ad Campaign V1</RegularText>
                  </TheTextWrapper>
                  <DarkGreenTextWrapper>
                    <DarkGreenText>$700</DarkGreenText>
                  </DarkGreenTextWrapper>
                  <TimeFrameWrapper>
                    <RegularText>Apr 12 - Apr 30</RegularText>
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
    </PaddingDiv>
  );
}

const ChildHStack2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 122px;
  padding-left: 5px;
`;

const ParentishStack = styled.div`
  display: flex;
  gap: 65px;
`;

const TheTextWrapper = styled.div`
  display: flex;
  width: 180px;
  align-items: left;
  justify-content: left;
  text-align: left;
`;

const DarkGreenTextWrapper = styled.div`
  display: flex;
  width: 60px;
  align-items: left;
  justify-content: left;
  text-align: left;
`;

const DarkGreenText = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 16px;
  color: #00786a;
`;

const TimeFrameWrapper = styled.div`
  display: flex;
  width: 200px;
  align-items: left;
  justify-content: left;
  text-align: left;
`;

const ShadowImg = styled.img`
  box-shadow: 2px 5px 40px #eeeeee;
  border-radius: 10px;
  height: 60px;
  width: auto;
`;

const ShadowImgNone = styled.img`
  height: 60px;
  width: auto;
`;

const TheMajorHStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 35px;
`;

const PaddingDiv = styled.div``;

const LogoFormatFacebook = styled.img`
  height: 55px;
  width: auto;
  cursor: pointer;
`;

const LogoFormat = styled.img`
  height: 60px;
  width: auto;
  cursor: pointer;
`;

const LogoFormat1 = styled.img`
  height: 60px;
  width: auto;
  box-shadow: 2px 5px 20px #e8e8e8;
  border-radius: 10px;
  cursor: pointer;
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
  padding-top: 20px;
  gap: 35px;
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
  padding-left: 700px;
`;

const RectangleModal = styled.div`
  position: absolute;
  left: 570px;
  top: 90px;
  border-radius: 20px;
  width: 746px;
  height: 800px;
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

const ChildHStack3 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 62px;
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
  font-family: "ProximaNovaBold";
  color: #252531;
  font-size: 42px;
  width: 500px;
  line-height: 51px;
`;

const MediumGrayText = styled.div`
  font-family: "ProximaNovaRegular";
  font-size: 21px;
  color: #9a99a9;
  width: 500px;
  line-height: 26px;
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
