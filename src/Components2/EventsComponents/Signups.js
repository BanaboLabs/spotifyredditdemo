import React, { useState, useEffect } from "react";
import styled from "styled-components";
import eventpath1 from "../../Images2/eventpath1.png";
import eventpath2 from "../../Images2/eventpath2.png";
import eventpath3 from "../../Images2/eventpath3.png";
import eventpath4 from "../../Images2/eventpath4.png";
import eventpath5 from "../../Images2/eventpath5.png";
import eventpath6 from "../../Images2/eventpath6.png";
import eventpath7 from "../../Images2/eventpath7.png";
import eventpath8 from "../../Images2/eventpath8.png";
import whitefoghorizontal from "../../Images2/whitefoghorizontal.svg";
import horizontalscroll from "../../Images2/horizontalscroll.svg";
import verticalscroll from "../../Images2/verticalscroll.svg";
import Card1Purchases from "./Card1Purchases";
import Card2Purchases from "./Card2Purchases";
import Card1Signups from "./Card1Signups";
import purchaseline9 from "../../Images2/purchaseline9.svg";

export default function Signups() {
  return (
    <div>
      <VStack>
        <LargeRectangle>
          <VerticalWrapper>
            <PurchasePathText>SIGN UP PATHS</PurchasePathText>
            <PathHStack>
              <DateRectangle>
                <DateVStack>
                  <TheDate>Mar 14, 2022</TheDate>
                  <TheTime>1:53 PM</TheTime>
                </DateVStack>
              </DateRectangle>
              <LogoIMG src={eventpath8} />
            </PathHStack>
            <PathHStack>
              <DateRectangle>
                <DateVStack>
                  <TheDate>Mar 14, 2022</TheDate>
                  <TheTime>11:29 AM</TheTime>
                </DateVStack>
              </DateRectangle>
              <LogoIMG src={eventpath7} />
            </PathHStack>
            <PathHStack>
              <DateRectangle>
                <DateVStack>
                  <TheDate>Mar 14, 2022</TheDate>
                  <TheTime>6:27 AM</TheTime>
                </DateVStack>
              </DateRectangle>
              <LogoIMG src={eventpath6} />
            </PathHStack>
            <PathHStack>
              <DateRectangle>
                <DateVStack>
                  <TheDate>Mar 14, 2022</TheDate>
                  <TheTime>4:42 AM</TheTime>
                </DateVStack>
              </DateRectangle>
              <LogoIMG src={eventpath5} />
            </PathHStack>
            <PathHStack>
              <DateRectangle>
                <DateVStack>
                  <TheDate>Mar 14, 2022</TheDate>
                  <TheTime>3:31 AM</TheTime>
                </DateVStack>
              </DateRectangle>
              <LogoIMG src={eventpath4} />
            </PathHStack>
            <PathHStack>
              <DateRectangle>
                <DateVStack>
                  <TheDate>Mar 14, 2022</TheDate>
                  <TheTime>2:42 AM</TheTime>
                </DateVStack>
              </DateRectangle>
              <LogoIMG src={eventpath3} />
            </PathHStack>
            <PathHStack>
              <DateRectangle>
                <DateVStack>
                  <TheDate>Mar 14, 2022</TheDate>
                  <TheTime>1:32 AM</TheTime>
                </DateVStack>
              </DateRectangle>
              <LogoIMG src={eventpath2} />
            </PathHStack>
            <PathHStack>
              <DateRectangle>
                <DateVStack>
                  <TheDate>Mar 14, 2022</TheDate>
                  <TheTime>1:09 AM</TheTime>
                </DateVStack>
              </DateRectangle>
              <LogoIMG src={eventpath1} />
            </PathHStack>
          </VerticalWrapper>
        </LargeRectangle>
        <Card1Signups />
      </VStack>
      <WhiteFogHorizontal src={whitefoghorizontal} />
    </div>
  );
}

const VerticalWrapper = styled.div`
  display: grid;
  grid-gap: 22px;
  padding-left: 60px;
  padding-top: 40px;
`;

const HorizontalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const HorizontalScrollIMG = styled.img`
  z-index: 30;
  position: absolute;
  left: 474px;
  top: 525px;
  cursor: pointer;
`;

const VerticalScrollIMG = styled.img`
  z-index: 30;
  position: absolute;
  right: 446px;
  top: 137px;
  cursor: pointer;
`;

const LogoIMG = styled.img``;

const WhiteFogHorizontal = styled.img`
  z-index: 20;
  position: absolute;
  left: 464px;
  top: 442px;
`;

const DateRectangle = styled.div`
  width: 131px;
  height: 65px;
  background: #ffffff;
  /* Low */

  box-shadow: 2px 5px 20px #f1f1f1;
  border-radius: 4px;
`;

const PathHStack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 13px;
`;

const DateVStack = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 12px;
  padding-left: 12px;
  gap: 8px;
`;

const TheDate = styled.div`
  font-size: 18px;
  color: #252531;
  font-family: "ProximaNovaSemiBold";
`;

const TheTime = styled.div`
  font-size: 16px;
  color: #666678;
  font-family: "ProximaNovaSemiBold";
`;

const InsideVStack = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 60px;
  padding-top: 40px;
  gap: 14px;
`;

const PurchasePathText = styled.div`
  font-size: 16px;
  color: #88879b;
  font-family: "ProximaNovaSemiBold";
`;

const VStack = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 464px;
  top: 130px;
  gap: 40px;
`;

const HStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
`;

const LargeRectangle = styled.div`
  width: 1018px;
  height: 410px;

  background: #ffffff;
  /* La La La */
  box-shadow: 0px 11px 28.5px 6.5px #eceff4;
  border-radius: 10px;
  overflow-y: scroll;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    width: 12px;
    height: 0px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
  }
`;

const SmallRectangle = styled.div`
  width: 484px;
  height: 370px;

  background: #ffffff;
  /* La La La */

  box-shadow: 0px 11px 28.5px 6.5px #eceff4;
  border-radius: 10px;
`;
