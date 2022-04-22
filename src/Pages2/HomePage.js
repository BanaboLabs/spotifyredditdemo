/**********************
 * The Main Application *
 - Contains SideTabBar + Component
 **********************/

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import WhiteCanvas from "../Components2/whitecanvas";
import SideBar from "../Components2/sidebar";
import Home from "../Components2/HomeComponents/ParentHome";
import Events from "../Components2/EventsComponents/EventsHome";
import Campaigns from "../Components2/CampaignComponents/CampaignsHome";
import Cookies from "universal-cookie";

export default function HomePage(props) {
  const [isScreen, setIsScreen] = useState("Home");
  const [calendarActive, setCalendarActive] = useState(false);
  const [isGrandpaData1, setIsGrandpaData1] = useState(false);
  const [screen1, setScreen1] = useState(true);
  const [isParentData2, setIsParentData2] = useState(false);
  const [isParentData, setIsParentData] = useState("Campaigns");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const cookies = new Cookies();

  useEffect(() => {
    console.log("yessir");
  }, [isParentData2]);

  useEffect(() => {
    console.log("pokemon");
    console.log(isParentData);
  }, [isParentData]);

  useEffect(() => {
    const login = cookies.get("loginValid");
    if (login === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div>
      {isLoggedIn == false ? (
        <TheWrapper>
          <TheContentWrapper>
            <Text>Can't access without sign up or login</Text>
            <Text2>If you are logged in, please refresh the page</Text2>
          </TheContentWrapper>
        </TheWrapper>
      ) : (
        <Wrapper>
          <SubWrapper>
            <SideBar toChild={isParentData} sendToParent={setIsParentData} />
          </SubWrapper>
          <AlignDiv>
            <WhiteCanvas></WhiteCanvas>
            <div>
              {isParentData == "Home" ? (
                <Home />
              ) : isParentData == "Events" ? (
                <Events />
              ) : isParentData == "Campaigns" ? (
                <Campaigns />
              ) : (
                <div></div>
              )}
            </div>
          </AlignDiv>
        </Wrapper>
      )}
    </div>
  );
}

const TheWrapper = styled.div`
  background-color: #252531;
  min-height: 100vh;
  min-width: 100vh;
  background-size: cover;
  background-position: center;
  position: relative;
`;

const Wrapper = styled.div`
  background: #f7fbff;
  min-height: 100vh;
  min-width: 100vh;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow-y: hidden;
  overflow-x: hidden;
`;

const SubWrapper = styled.div`
  position: absolute;
  left: 0vw;
  top: 2vh;
`;

const AlignDiv = styled.div`
  display: flex;
  justify-content: right;
  align-items: right;
  position: relative;
`;

const TheContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
`;

const Text = styled.div`
  font-family: "ProximaNovaRegular";
  color: #ffffff;
  font-size: 32px;
  position: fixed;
  width: 60%;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

const Text2 = styled.div`
  font-family: "ProximaNovaRegular";
  color: #ffffff;
  font-size: 20px;
  position: fixed;
  width: 60%;
  top: 54%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;
