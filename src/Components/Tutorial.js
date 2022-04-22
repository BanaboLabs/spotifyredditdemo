//######//
// This is the tutorial that is activated when a user logs in for the first time //
// As of November 25th, it has 4 different state changes
//######//

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import goldenheart from "../Images/goldenheart.gif";
import goldenbulb from "../Images/goldenbulb.gif";
import hearthands from "../Images/hearthands.gif";
import goldenhorn from "../Images/goldenhorn.gif";
import linktab from "../Images/linktab.svg";
import insightstab from "../Images/insightstab.svg";

export default function Tutorial(props) {
  // Steps of the tutorial 1 through 4
  const [step, setStep] = useState(1);
  // In charge of whether the tutorial is showing or not showing
  const [tutorialOn, setTutorialOn] = useState(true);

  // Changes State between Tutorial off and Tutorial On
  useEffect(() => {
    props.sendToParent(tutorialOn); // This is the mounting part
  }, [tutorialOn]);

  if (step == 1) {
    return (
      <Rectangle>
        <InsideWrapper>
          <VStack>
            <HStack>
              <VStack>
                <Title>Welcome to Banabo!</Title>
                <SubTitle>
                  Here’s a quick tour of the various tabs in the app
                </SubTitle>
              </VStack>
              <GifIMG src={goldenheart} />
            </HStack>
            <Position>
              <StyledButton onClick={() => setStep(2)}>Next</StyledButton>
            </Position>
          </VStack>
        </InsideWrapper>
      </Rectangle>
    );
  }

  if (step == 2) {
    return (
      <Rectangle2>
        <InsideWrapper>
          <VStack>
            <HStack2>
              <VStack>
                <Title>Links Tab</Title>
              </VStack>
              <GifIMG2 src={hearthands} />
            </HStack2>
            <SubTitle2>
              Banabo gathers the traffic source for all unique visitors on your
              site.
            </SubTitle2>
            <SubTitle2>
              Gain the general traffic source such as Facebook automatically
              and/or map a specific campaign with a url link
            </SubTitle2>
            <SmallImg src={linktab} />
            <Position>
              <StyledButton onClick={() => setStep(3)}>Next</StyledButton>
            </Position>
          </VStack>
        </InsideWrapper>
      </Rectangle2>
    );
  }

  if (step == 3) {
    return (
      <Rectangle2>
        <InsideWrapper>
          <VStack>
            <HStack2>
              <VStack>
                <Title>Insights Tab</Title>
              </VStack>
              <GifIMG2 src={goldenhorn} />
            </HStack2>
            <SubTitle2>
              Banabo displays the most common visitor paths and traffic sources.
              In addition, the tool shows which paths led to a purchase or
              signup.
            </SubTitle2>
            <SmallImg2 src={insightstab} />
            <Position>
              <StyledButton onClick={() => setStep(4)}>Next</StyledButton>
            </Position>
          </VStack>
        </InsideWrapper>
      </Rectangle2>
    );
  }

  if (step == 4) {
    return (
      <Rectangle3>
        <InsideWrapper>
          <VStack>
            <HStack3>
              <VStack>
                <Title>Setup Tab</Title>
                <SubTitle3>Just 2 steps to get setup!</SubTitle3>
                <SubTitle3>
                  1) Please add the Banabo Snippet to your website
                </SubTitle3>
                <SubTitle3>2) Then input your domain</SubTitle3>
                <SubTitle3>
                  After this, we can begin gathering and displaying information
                  on your traffic sources
                </SubTitle3>
              </VStack>
              <GifIMG src={goldenbulb} />
            </HStack3>
            <Position2>
              <StyledButton onClick={() => setTutorialOn(false)}>
                Next
              </StyledButton>
            </Position2>
          </VStack>
        </InsideWrapper>
      </Rectangle3>
    );
  }
}

const Rectangle2 = styled.div`
  width: 756px;
  height: 808px;
  background: #ffffff;
  border-radius: 25px;
`;

const Rectangle3 = styled.div`
  width: 756px;
  height: 608px;
  background: #ffffff;
  border-radius: 25px;
`;

const Position = styled.div`
  text-align: right;
  justify-content: right;
  align-items: right;
  padding-right: 40px;
`;

const TextfieldWrapper = styled.div`
  box-sizing: border-box;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
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

const Position2 = styled.div`
  text-align: right;
  justify-content: right;
  align-items: right;
  padding-right: 30px;
  padding-top: 120px;
`;

const InsideWrapper = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
`;

const Title = styled.div`
  font-size: 40px;
  line-height: 49px;
  color: #252531;
  font-family: "ProximaNovaBold";
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 29px;
  width: 250px;
  color: #252531;
  font-family: "ProximaNovaBold";
`;

const SubTitle2 = styled.div`
  font-size: 20px;
  line-height: 29px;
  width: 450px;
  color: #252531;
  font-family: "ProximaNovaBold";
`;

const SubTitle3 = styled.div`
  font-size: 20px;
  line-height: 29px;
  width: 340px;
  color: #252531;
  font-family: "ProximaNovaBold";
`;

const GifIMG = styled.img`
  width: 20%;
  height: 20%;
`;

const GifIMG2 = styled.img`
  width: 15%;
  height: 15%;
`;

const SmallImg = styled.img`
  padding-top: 20px;
  width: 70%;
  height: 70%;
  filter: drop-shadow(2px 5px 40px #eeeeee);
`;

const SmallImg2 = styled.img`
  padding-top: 20px;
  width: 80%;
  height: 80%;
  filter: drop-shadow(2px 5px 40px #eeeeee);
  padding-bottom: 80px;
`;

const StyledButton = styled.button`
  font-family: "ProximaNovaSemiBold";
  font-size: 24px;
  color: #ffffff;
  border: none;
  width: 133px;
  height: 46px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  background: linear-gradient(90deg, #1bcdf4 1.71%, #1b8cf4 107.17%);
  border-radius: 8px;

  :hover {
    background: linear-gradient(90deg, #159bb8 1.71%, #1674ca 107.17%);
  }
`;

const VStack = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: left;
  align-items: left;
  gap: 15px;
`;

const HStack = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  justify-content: left;
  align-items: left;
  gap: 70px;
`;

const HStack2 = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  justify-content: left;
  align-items: left;
  gap: 300px;
`;

const HStack3 = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  justify-content: left;
  align-items: left;
  gap: 200px;
`;

const NewButton = styled.button`
  background: ${(props) => (props.almostReady ? "#40A3FF" : "#dcette7")};
  border-radius: 10px;
  color: #ffffff;
  font-family: "ProximaNovaSemiBold";
  font-size: 19px;
  cursor: pointer;
  width: 100px;
  height: 48px;
  border: none;
  margin: auto;
`;
