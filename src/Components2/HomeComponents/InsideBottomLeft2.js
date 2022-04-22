import React, { useState, useEffect } from "react";
import styled from "styled-components";
import instagram from "../../Images2/instagram.svg";
import bing from "../../Images2/bing.svg";
import facebook from "../../Images2/facebook.svg";
import google from "../../Images2/google.svg";
import hackernews from "../../Images2/hackernews.svg";

export default function InsideBottomLeft2() {
  return (
    <div>
      <HStack>
        <BoldText>Keyword</BoldText>
        <SemiBoldText>Visitors</SemiBoldText>
      </HStack>
      <Line />
      <VStack>
        <HStack15>
          <div>
            <HStack15>
              <HStack2>
                <GrayText2>Nike</GrayText2>
              </HStack2>
              <ShadowRectangle>
                <DarkText>6.9k</DarkText>
              </ShadowRectangle>
            </HStack15>
          </div>
        </HStack15>
        <HStack15>
          <HStack2>
            <GrayText2>Nike Sports</GrayText2>
          </HStack2>
          <ShadowRectangle>
            <DarkText>2.4k</DarkText>
          </ShadowRectangle>
        </HStack15>
        <HStack15>
          <HStack2>
            <GrayText2>Sportswear</GrayText2>
          </HStack2>
          <ShadowRectangle>
            <DarkText>1.1k</DarkText>
          </ShadowRectangle>
        </HStack15>
        <HStack15>
          <HStack2>
            <GrayText2>Running Shoes</GrayText2>
          </HStack2>
          <ShadowRectangle>
            <DarkText>320</DarkText>
          </ShadowRectangle>
        </HStack15>
        <HStack15>
          <HStack2>
            <GrayText2>Air Jordan</GrayText2>
          </HStack2>
          <ShadowRectangle>
            <DarkText>141</DarkText>
          </ShadowRectangle>
        </HStack15>
      </VStack>{" "}
    </div>
  );
}

const GrayText2 = styled.div`
  font-size: 16px;
  line-height: 16px;
  color: #9a99a9;
  font-family: "ProximaNovaRegular";
`;

const HStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 253px;
  padding-bottom: 10px;
`;

const BoldText = styled.div`
  font-family: "ProximaNovaBold";
  font-size: 16px;
  color: #666678;
`;

const SemiBoldText = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 16px;
  color: #666678;
`;

const Line = styled.div`
  position: absolute;
  width: 373px;
  height: 1px;
  background: #e4f2ff;
`;

const VStack = styled.div`
  padding-top: 18px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const HStack15 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 372px;
`;

const HStack2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const CompanyLogo = styled.img`
  width: 20px;
  height: 20px;
`;

const GrayText = styled.div`
  font-size: 16px;
  line-height: 16px;
  color: #9a99a9;
  font-family: "ProximaNovaRegular";
  cursor: pointer;
`;

const ShadowRectangle = styled.div`
  width: 54px;
  height: 27px;
  background: #ffffff;
  box-shadow: 2px 5px 20px #f1f1f1;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const DarkText = styled.div`
  font-family: "ProximaNovaRegular";
  font-size: 15px;
  color: #666678;
  padding-top: 6px;
`;

const GrayRectangle = styled.div`
  width: 360px;
  height: 27px;
  background: rgba(238, 238, 238, 0.6);
  border-radius: 4px;
  padding-right: 50px;
`;
