import React, { useState, useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import CampaignsConfigure from "./CampaignConfigure";
import copybutton from "../../Images2/copybutton.svg";
import savebutton from "../../Images2/savebutton.svg";
import useInput from "../../CustomHooks/useInput";
import ToggleSwitch from "./ToggleSwitch";
import CampaignsConnect from "./CampaignsConnect";

export default function CampaignsHome() {
  const noRefresh = (event) => {
    event.preventDefault();
  };

  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isParentData, setIsParentData] = useState(false);
  const [screen1, setScreen1] = useState(true);
  const [jsonArray, setjsonArray] = useState([
    {
      linkName: "Snapchat Ads V1",
      linkDate: "02/21/2022",
      linkBudget: "$300",
      linkUrl: "https://www.nike.com/men/?b=6453",
    },
    {
      linkName: "Google Stories Campaign",
      linkDate: "02/18/2022",
      linkBudget: "$187",
      linkUrl: "https://www.nike.com/shoes/?b=7552",
    },
    {
      linkName: "Product Hunt Launch",
      linkDate: "02/14/2022",
      linkBudget: "$0",
      linkUrl: "https://www.nike.com/shirts/?b=3354",
    },
  ]);

  useLayoutEffect(() => {
    if (submitted == true) {
      setjsonArray([
        {
          linkName: "Snapchat Ads V1",
          linkDate: "02/21/2022",
          linkBudget: "$300",
          linkUrl: "https://www.nike.com/men/?b=6453",
        },
        {
          linkName: "Google Stories Campaign",
          linkDate: "02/18/2022",
          linkBudget: "$187",
          linkUrl: "https://www.nike.com/shoes/?b=7552",
        },
        {
          linkName: "Product Hunt Launch",
          linkDate: "02/14/2022",
          linkBudget: "$0",
          linkUrl: "https://www.nike.com/shirts/?b=3354",
        },
        {
          linkName: inputValue2,
          linkDate: "03/14/2021",
          linkBudget: "$" + inputValue3,
          linkUrl: inputValue1 + "/?b=3182",
        },
      ]);
    }
    console.log(jsonArray);
  }, [submitted]);

  useLayoutEffect(() => {
    console.log("made it");
    setScreen1(!screen1);
  }, [isParentData]);

  // Input Field handler
  const handleUserInput1 = (e) => {
    setInputValue1(e.target.value);
  };

  const handleUserInput2 = (e) => {
    setInputValue2(e.target.value);
  };

  const handleUserInput3 = (e) => {
    setInputValue3(e.target.value);
  };

  // Reset Input Field handler
  const resetInputField1 = () => {
    setInputValue1("");
  };

  const resetInputField2 = () => {
    setInputValue2("");
  };

  const resetInputField3 = () => {
    setInputValue3("");
  };

  return (
    <div>
      <AbsolutePosition>
        <ToggleSwitch toChild={isParentData} sendToParent={setIsParentData} />
      </AbsolutePosition>
      {screen1 == false ? (
        <div>
          <CampaignsConnect />
        </div>
      ) : (
        <HStack>
          <CampaignsConfigure />
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
                    <LightGrayColoredText>
                      {item.linkBudget}
                    </LightGrayColoredText>
                    <BlueLine />
                    <HStack1>
                      <LinkText>{item.linkUrl}</LinkText>
                      <CopyButton
                        src={copybutton}
                        onClick={() =>
                          navigator.clipboard.writeText(item.linkUrl)
                        }
                      />
                    </HStack1>
                  </InsideRectangleWrapper>
                </InsideRectangle>
              ))}
            </InsideWrapper>
          </Rectangle>
          <Rectangle1>
            <InsideRectangle1>
              <TextTitle1>CREATE A CAMPAIGN LINK</TextTitle1>
              <SmallText1>
                Map the performance of specific channels by attaching a
                clickable link within the campaign's content
              </SmallText1>
              <form onSubmit={noRefresh}>
                <InsideVStack1>
                  <Group1>
                    <Header1>PAGE URL</Header1>
                    <Input1
                      placeholder="Ex: https://www.nike.com/example"
                      value={inputValue1}
                      onChange={handleUserInput1}
                    />
                    <BlueLine1 />
                  </Group1>
                  <Group1>
                    <Header1>LINK NAME</Header1>
                    <Input1
                      placeholder="Ex: Google Campaign V1"
                      value={inputValue2}
                      onChange={handleUserInput2}
                    />
                    <BlueLine1 />
                  </Group1>
                  <Group1>
                    <Header1>CAMPAIGN BUDGET</Header1>
                    <Input1
                      placeholder="Ex: 800"
                      value={inputValue3}
                      onChange={handleUserInput3}
                    />
                    <BlueLine1 />
                  </Group1>
                </InsideVStack1>
              </form>
            </InsideRectangle1>
            <SaveButton1 src={savebutton} onClick={() => setSubmitted(true)} />
          </Rectangle1>
        </HStack>
      )}
    </div>
  );
}

const AbsolutePosition = styled.div`
  position: absolute;
  right: 430px;
  top: 46px;
`;

const Input1 = styled.input`
  border: none;
  width: 300px;
  font-size: 16px;
  line-height: 19px;
  font-family: "ProximaNovaRegular";
  background-color: transparent;
  :focus {
    outline: none;
  }
`;

const SaveButton1 = styled.img`
  position: absolute;
  bottom: 12px;
  left: 20px;
  cursor: pointer;
`;

const InsideVStack1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Group1 = styled.div``;

const Header1 = styled.div`
  font-size: 13px;
  color: #9392a6;
  font-family: "ProximaNovaSemiBold";
  padding-bottom: 8px;
`;

const BlackText1 = styled.div`
  font-size: 18px;
  color: #666678;
  font-family: "ProximaNovaSemiBold";
  padding-bottom: 5px;
`;

const BlueLine1 = styled.div`
  width: 305px;
  height: 2px;
  background: #e4f2ff;
`;

const Rectangle1 = styled.div`
  position: absolute;
  width: 474px;
  height: 450px;
  left: 464px;
  top: 110px;
  background: #ffffff;
  box-shadow: 0px 11px 28.5px 6.5px #eceff4;
  border-radius: 10px;
`;

const InsideRectangle1 = styled.div`
  padding-top: 40px;
  padding-left: 40px;
`;

const TextTitle1 = styled.div`
  font-size: 18px;
  color: #88879b;
  font-family: "ProximaNovaSemiBold";
  padding-bottom: 20px;
`;

const SmallText1 = styled.div`
  font-size: 16px;
  color: #a7a6b3;
  font-family: "ProximaNovaRegular";
  padding-bottom: 30px;
  width: 390px;
  line-height: 19px;
`;

const HStack = styled.div`
  display: flex;
  flex-direction: row;
`;

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
  background: #ffffff;
  box-shadow: 0px 11px 28.5px 6.5px #eceff4;
  border-radius: 10px;
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
