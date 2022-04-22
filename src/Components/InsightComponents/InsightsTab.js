/**********************
 * Component for switching between various Insight Components *
 **********************/

import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function InsightsTab(props) {
  const [current, setCurrent] = useState("CommonJourneys");

  // Based on the tabs being clicked on, this will change what the parent renders
  useEffect(() => {
    props.sendToParent(current); // This is the mounting part
  }, [current]);

  return (
    <Wrapper>
      <TabParent>
        <div onClick={() => setCurrent("CommonJourneys")}>
          {current == "CommonJourneys" ? (
            <TabBackground>
              <InsideWrapper highlighted={true}>Most Common</InsideWrapper>
            </TabBackground>
          ) : (
            <TabBackground hidebackground={true}>
              <InsideWrapper highlighted={false}>Most Common</InsideWrapper>
            </TabBackground>
          )}
        </div>
        <div onClick={() => setCurrent("LinkClicks")}>
          {current == "LinkClicks" ? (
            <TabBackground>
              <InsideWrapper highlighted={true}>Traffic Sources</InsideWrapper>
            </TabBackground>
          ) : (
            <TabBackground hidebackground={true}>
              <InsideWrapper highlighted={false}>Traffic Sources</InsideWrapper>
            </TabBackground>
          )}
        </div>
        <div onClick={() => setCurrent("SignUps")}>
          {current == "SignUps" ? (
            <TabBackground>
              <InsideWrapper highlighted={true}>Sign Ups</InsideWrapper>
            </TabBackground>
          ) : (
            <TabBackground hidebackground={true}>
              <InsideWrapper highlighted={false}>Sign Ups</InsideWrapper>
            </TabBackground>
          )}
        </div>
        <div onClick={() => setCurrent("Purchases")}>
          {current == "Purchases" ? (
            <TabBackground>
              <InsideWrapper highlighted={true}>Purchases</InsideWrapper>
            </TabBackground>
          ) : (
            <TabBackground hidebackground={true}>
              <InsideWrapper highlighted={false}>Purchases</InsideWrapper>
            </TabBackground>
          )}
        </div>
      </TabParent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background-size: cover;
  background-position: center;
  position: relative;
  background-color: transparent;
`;

const TabBackground = styled.div`
  background: #ffffff;
  box-sizing: ${(props) =>
    props.hidebackground ? "border-box" : "border-box"};
  box-shadow: ${(props) =>
    props.hidebackground
      ? "2px 5px 40px 0 rgb(0 0 0 / 8%)"
      : "2px 5px 40px 0 rgb(0 0 0 / 8%)"};
  border-radius: 10px;
  width: 165px;
  height: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InsideWrapper = styled.div`
  font-family: ${(props) =>
    props.highlighted ? "ProximaNovaSemiBold" : "ProximaNovaRegular"};
  font-size: 16px;
  line-height: 16px;
  color: #1d1d26;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const TabParent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 52px;
`;
