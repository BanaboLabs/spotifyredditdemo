import React, { useState, useEffect } from "react";
import styled from "styled-components";
import copybutton from "../../Images2/copybutton.svg";

export default function CampaignsSave() {
  const jsonArray = [
    {
      linkName: "Instagram Ads V1",
      linkDate: "2/21/2022",
      linkBudget: "$300",
      linkUrl: "https://www.nike.com/men/",
    },
    {
      linkName: "Facebook Stories Campaign",
      linkDate: "2/24/2022",
      linkBudget: "$187",
      linkUrl: "https://www.nike.com/shoes/",
    },
    {
      linkName: "Product Hunt Launch",
      linkDate: "02/27/2022",
      linkBudget: "$0",
      linkUrl: "https://www.nike.com/shirts/",
    },
  ];

  /*
const persons = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
]; */

  return (
    <Rectangle>
      <InsideWrapper>
        <TextTitle>SAVED LINKS</TextTitle>
        {jsonArray.map((item) => (
          <InsideRectangle>
            <InsideRectangleWrapper>
              <HStack1>
                <BlackBoldText>{item.linkName}</BlackBoldText>
                <DarkerGrayText>{item.linkDate}</DarkerGrayText>
              </HStack1>
              <LightGrayColoredText>{item.linkBudget}</LightGrayColoredText>
              <BlueLine />
              <HStack1>
                <LinkText>
                  {item.linkUrl +
                    "?b=" +
                    String(Math.floor(1000 + Math.random() * 9000))}
                </LinkText>
                <CopyButton
                  src={copybutton}
                  onClick={() =>
                    navigator.clipboard.writeText(
                      item.linkUrl +
                        "?b=" +
                        String(Math.floor(1000 + Math.random() * 9000))
                    )
                  }
                />
              </HStack1>
            </InsideRectangleWrapper>
          </InsideRectangle>
        ))}
      </InsideWrapper>
    </Rectangle>
  );
}

const CopyButton = styled.img`
  padding-top: 6px;
  cursor: pointer;
`;

const HStack1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LinkText = styled.div`
  font-size: 14px;
  color: #252531;
  font-family: "ProximaNovaSemiBold";
  padding-top: 14px;
`;

const LightGrayColoredText = styled.div`
  font-size: 15px;
  color: #9a99a9;
  font-family: "ProximaNovaRegular";
  padding-top: 7px;
  padding-bottom: 10px;
`;

const BlueLine = styled.div`
  width: 85px;
  height: 2px;
  background: #e4f2ff;
`;

const DarkerGrayText = styled.div`
  font-size: 14px;
  color: #88879b;
  font-family: "ProximaNovaSemiBold";
`;

const BlackBoldText = styled.div`
  font-size: 17px;
  font-family: "ProximaNovaSemiBold";
  color: #252531;
`;

const Rectangle = styled.div`
  position: absolute;
  width: 488px;
  height: 806px;
  left: 1000px;
  top: 110px;
`;

const InsideWrapper = styled.div`
  padding-top: 40px;
  padding-left: 40px;
`;

const InsideRectangleWrapper = styled.div`
  padding: 17px;
`;

const InsideRectangle = styled.div`
  width: 369px;
  height: 116px;
  background: #ffffff;
  box-shadow: 2px 5px 20px #f1f1f1;
  border-radius: 10px;
  margin-top: 30px;
`;

const TextTitle = styled.div`
  font-size: 18px;
  color: #88879b;
  font-family: "ProximaNovaSemiBold";
`;
