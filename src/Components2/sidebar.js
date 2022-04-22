import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Toggle from "../Images2/toggle.svg";
import TabHighlighted from "../Images2/tabhighlighted.svg";
import TabHighlightedClear from "../Images2/tabhighlightedclear.svg";

export default function SideBar(props) {
  // OnClick of Home, we want to change the font color and the background

  const [highlight, setHighlight] = useState("Campaigns");

  useEffect(() => {
    props.sendToParent(highlight); // This is the mounting part
  }, [highlight]);

  useEffect(() => {
    console.log(highlight);
    props.sendToParent(highlight); // This is the mounting part
  }, [highlight]);

  return (
    <VStack>
      <TopWrapper>
        <IMG1 src={Toggle} />
        <div>
          {highlight == "Home" ? (
            <TabHighlight>
              <TabItemHorizontalWrapper>
                <Text2 style={{ color: "#252531" }}>Home</Text2>
              </TabItemHorizontalWrapper>
            </TabHighlight>
          ) : (
            <TabHighlightClear>
              <TabItemHorizontalWrapper>
                <Text style={{ color: "#252531" }}>Home</Text>
              </TabItemHorizontalWrapper>
            </TabHighlightClear>
          )}{" "}
        </div>
        <div>
          {highlight == "Events" ? (
            <TabHighlight>
              <TabItemHorizontalWrapper>
                <Text2 style={{ color: "#252531" }}>Events</Text2>
              </TabItemHorizontalWrapper>
            </TabHighlight>
          ) : (
            <TabHighlightClear>
              <TabItemHorizontalWrapper>
                <Text style={{ color: "#252531" }}>Events</Text>
              </TabItemHorizontalWrapper>
            </TabHighlightClear>
          )}{" "}
        </div>
        <div onClick={() => setHighlight("Campaigns")}>
          {highlight == "Campaigns" ? (
            <TabHighlight>
              <TabItemHorizontalWrapper>
                <Text2 style={{ color: "#252531" }}>Campaigns</Text2>
              </TabItemHorizontalWrapper>
            </TabHighlight>
          ) : (
            <TabHighlightClear>
              <TabItemHorizontalWrapper>
                <Text style={{ color: "#252531" }}>Campaigns</Text>
              </TabItemHorizontalWrapper>
            </TabHighlightClear>
          )}{" "}
        </div>
      </TopWrapper>
    </VStack>
  );
}

const VStack = styled.div`
  padding-top: 80px;
  display: grid;
  align-items: top;
  justify-items: top;
  gap: 65vh;
`;

const IMG1 = styled.img`
  display: flex;
  position: absolute;
  left: -75px;
  top: -100px;
  cursor: pointer;
`;

const TopWrapper = styled.div`
  display: grid;
  align-items: center;
  gap: 25px;
`;

const Text = styled.div`
  font-family: "ProximaNovaRegular";
  font-size: 17px;
  padding-left: 30px;
`;

const Text2 = styled.div`
  font-family: "ProximaNovaSemibold";
  font-size: 17px;
  padding-left: 30px;
`;

const TabHighlight = styled.div`
  background-image: url(${TabHighlighted});
  width: 250%;
  height: 65px;
  position: relative;
  display: flex;
  justify-content: left;
  cursor: pointer;
`;

const TabHighlightClear = styled.div`
  background-image: url(${TabHighlightedClear});
  width: 250%;
  height: 65px;
  position: relative;
  display: flex;
  justify-content: left;
  cursor: pointer;
`;

const TabItemHorizontalWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

// In Case
/*
<div onClick={() => setHighlight("Predictions")}>
          {highlight == "Predictions" ? (
            <TabHighlight>
              <TabItemHorizontalWrapper>
                <Text2 style={{ color: "#252531" }}>Predictions</Text2>
              </TabItemHorizontalWrapper>
            </TabHighlight>
          ) : (
            <TabHighlightClear>
              <TabItemHorizontalWrapper>
                <Text style={{ color: "#252531" }}>Predictions</Text>
              </TabItemHorizontalWrapper>
            </TabHighlightClear>
          )}{" "}
        </div>

*/
