/**********************
 * Parent Components for everything Insights *
 **********************/

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import InsightsTab from "./InsightsTab";
import InsightsFilter from "./InsightsFilter";
import ParentCommon from "./CommonParent/ParentCommon";
import ParentClicks from "./ClicksParent/ParentClicks";
import ParentSignUps from "./SignUpParent/ParentSignUp";
import ParentPurchases from "./PurchaseParent/ParentPurchase";

export default function InsightsParent() {
  // Used to determine which of the insights tabs are currently being displayed
  const [isParentData, setIsParentData] = useState("CommonJourneys");
  // Allows us to take the filter from the InsightsFilterjs component
  // and send to each of the child components to then query based on specific time parameters
  const [isParentData1, setIsParentData1] = useState(
    "2021-10-23T22:38:36.848Z"
  );

  const [isParentData2, setIsParentData2] = useState(
    "2021-10-30T22:38:01.968Z"
  );

  useEffect(() => {}, [isParentData1, isParentData2]);

  return (
    <ParentWrapper>
      <Rectangle>
        <BigWrapper>
          <ChildWrapper>
            <InsightsTab
              toChild={isParentData}
              sendToParent={setIsParentData}
            />
            <InsightsFilter
              toChild1={isParentData1}
              sendToParent1={setIsParentData1}
              toChild2={isParentData2}
              sendToParent2={setIsParentData2}
            />
          </ChildWrapper>
          <Spacer />
          <div>
            {isParentData == "CommonJourneys" ? (
              <ParentCommon enddate={isParentData1} startdate={isParentData2} />
            ) : isParentData == "LinkClicks" ? (
              <div>
                <ParentClicks
                  startdate={isParentData2}
                  enddate={isParentData1}
                />
              </div>
            ) : isParentData == "SignUps" ? (
              <div>
                <ParentSignUps
                  startdate={isParentData2}
                  enddate={isParentData1}
                />
              </div>
            ) : isParentData == "Purchases" ? (
              <div>
                <ParentPurchases
                  startdate={isParentData2}
                  enddate={isParentData1}
                />
              </div>
            ) : null}
          </div>
        </BigWrapper>
      </Rectangle>
    </ParentWrapper>
  );
}

const ChildWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  gap: 60px;
`;

const ParentWrapper = styled.div`
  background-size: cover;
  background-position: center;
  position: relative;
  background-color: transparent;
`;

const Spacer = styled.div`
  padding-bottom: 40px;
`;

const Rectangle = styled.div`
  position: relative;
  min-height: 100vh;
  max-height: 100vh;
  min-width: 200%;
  background: #ffffff;
  border-radius: 40px;
`;

const BigWrapper = styled.div`
  padding-top: 80px;
  padding-left: 200px;

  @media (max-height: 900px) {
    padding-top: 60px;
    padding-left: 110px;
  }
`;
