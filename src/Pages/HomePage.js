/**********************
 * The Main Application *
 - Contains SideTabBar + Component
 **********************/

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SideTabBar from "../Components/SideTabBar";
import InsightsParent from "../Components/InsightComponents/InsightsParent";
import ParentLink from "../Components/LinkComponents/ParentLinkComponent";
import Cookies from "universal-cookie";
import PixelParent from "../Components/PixelComponents/PixelParent";
import thebackground from "../Images/thebackground.svg";
import tutorialbackground from "../Images/tutorialbackground.png";
import Tutorial from "../Components/Tutorial";

export default function HomePage() {
  // Decides which of the four surfaces (components to populate
  // The state changes based on the SideTabBar being clicked on
  // SideTabBar (click) -> HomePage (state changes)
  const [isParentData, setIsParentData] = useState("Pixel");
  const [isParentData3, setIsParentData3] = useState(false);
  // In Charge of Cookies and checking if user is logged in
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const cookies = new Cookies();

  useEffect(() => {
    setTimeout(function () {
      if (cookies.get("showCount") == 1) {
        setIsParentData3(true);
      }
      if (cookies.get("showCount") != 1) {
        setIsParentData3(false);
      }
    }, 100);
  }, []);

  useEffect(() => {
    setTimeout(function () {
      var token = "lol";
      if (cookies.get("bearerToken") !== undefined) {
        token = cookies.get("bearerToken");
      }
      if (token !== "lol") {
        setisLoggedIn(true);
      }
    }, 100);
  }, []);

  // If the user is not logged in
  if (isLoggedIn == false) {
    return (
      <TheWrapper>
        <TheContentWrapper>
          <Text>Can't access without sign up or login</Text>
          <Text2>If you are logged in, please refresh the page</Text2>
        </TheContentWrapper>
      </TheWrapper>
    );
    // If its the users first time logging in
  } else if (isParentData3 == true) {
    return (
      <Wrapper2>
        <ContentWrapper2>
          <ContentWrapperSmall>
            <Tutorial toChild={isParentData3} sendToParent={setIsParentData3} />
          </ContentWrapperSmall>
        </ContentWrapper2>
      </Wrapper2>
    );
  } else {
    // If sidebartab is set to Link
    switch (isParentData) {
      case "Link":
        return (
          <Wrapper>
            <ContentWrapper>
              <SideTabBar
                toChild={isParentData}
                sendToParent={setIsParentData}
              />
              <ParentLink />
            </ContentWrapper>
          </Wrapper>
        );
      case "Insights":
        // If sidebartab is set to Insights
        return (
          <Wrapper>
            <ContentWrapper>
              <SideTabBar
                toChild={isParentData}
                sendToParent={setIsParentData}
              />
              <InsightsParent />
            </ContentWrapper>
          </Wrapper>
        );
      // If sidebartab is set to Pixel
      case "Pixel":
        return (
          <Wrapper>
            <ContentWrapper>
              <SideTabBar
                toChild={isParentData}
                sendToParent={setIsParentData}
              />
              <PixelParent />
            </ContentWrapper>
          </Wrapper>
        );
    }
  }
}

const Wrapper = styled.div`
  background: url(${thebackground});
  min-height: 100vh;
  min-width: 100vh;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow-y: hidden;
  overflow-x: hidden;
`;

const Wrapper2 = styled.div`
  background: url(${tutorialbackground});
  min-height: 100vh;
  min-width: 100vh;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow-y: hidden;
  overflow-x: hidden;
`;

const ContentWrapper2 = styled.div``;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 36px;
`;

const ContentWrapperSmall = styled.div`
  position: fixed;
  top: 8%;
  right: 26%;
`;

const TheWrapper = styled.div`
  background-color: #252531;
  min-height: 100vh;
  min-width: 100vh;
  background-size: cover;
  background-position: center;
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
