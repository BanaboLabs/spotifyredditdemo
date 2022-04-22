/**********************
 * Component in charge of switching between the various screens within the app *
 **********************/

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import gray_person from "../Images/gray-person.svg";
import Link from "../Images/link";
import Chart from "../Images/chart";
import Cookies from "universal-cookie";
import Pixel from "../Images/pixel";
import TopLogo from "../Images/TopLogo.svg";
import TabHighlighted from "../Images/tabhighlighted.svg";
import TabHighlightedClear from "../Images/tabhighlightedclear.svg";

export default function SideTabBar(props) {
  // Start a new user off on pixel

  const [highlight, setHighlight] = useState("Insights");
  const [linkColor, setLinkColor] = useState("#969AAF");
  const [chartColor, setChartColor] = useState("#969AAF");
  const [pixelColor, setPixelColor] = useState("#969AAF");
  const [contactColor, setContactColor] = useState("#969AAF");
  const [sessionCount, setSessionCount] = useState(0);
  const cookies = new Cookies();

  // Makes it so after the tutorial concludes, user starts off on the pixel tab (On Change)
  useEffect(() => {
    if (cookies.get("showCount") == 1 && sessionCount == 0) {
      setHighlight("Pixel");
      setSessionCount(2);
    }
  }, [highlight]);

  // Makes it so after the tutorial concludes, user starts off on the pixel tab (On Appear)
  useEffect(() => {
    var cookieMonster = cookies.get("showTutorial");
    if (cookieMonster === "true") {
      setHighlight("Pixel");
    } // This is the mounting part
  }, []);

  // Tells the parent page which component to switch to based on the tab click
  useEffect(() => {
    props.sendToParent(highlight); // This is the mounting part
  }, [highlight]);

  useEffect(() => {
    props.sendToParent(highlight); // This is the mounting part
  }, [highlight]);

  // Mega Chain to change the highlighted tabs
  useEffect(() => {
    if (highlight == "Link" && linkColor == "#969AAF") {
      setLinkColor("#FFFFFF");
    }
    if (highlight == "Link" && linkColor == "#FFFFFF") {
      setLinkColor("#FFFFFF");
    }
    if (highlight != "Link") {
      setLinkColor("#969AAF");
    }
    if (highlight == "Insights" && chartColor == "#969AAF") {
      setChartColor("#FFFFFF");
    }
    if (highlight == "Insights" && chartColor == "#FFFFFF") {
      setChartColor("#FFFFFF");
    }
    if (highlight != "Insights") {
      setChartColor("#969AAF");
    }
    if (highlight == "Pixel" && pixelColor == "#969AAF") {
      setPixelColor("#FFFFFF");
    }
    if (highlight == "Pixel" && pixelColor == "#FFFFFF") {
      setPixelColor("#FFFFFF");
    }
    if (highlight != "Pixel") {
      setPixelColor("#969AAF");
    }
    if (highlight == "Contact" && contactColor == "#969AAF") {
      setContactColor("#FFFFFF");
    }
    if (highlight == "Contact" && contactColor == "#FFFFFF") {
      setContactColor("#FFFFFF");
    }
    if (highlight != "Contact") {
      setContactColor("#969AAF");
    }
  }, [highlight]);

  return (
    <Wrapper>
      <ComponentWrapper>
        <ContentWrapper>
          <TopWrapper>
            <TheLogo src={TopLogo} />
            <TabItemVerticalWrapper>
              <div onClick={() => setHighlight("Link")}>
                {highlight == "Link" ? (
                  <TabHighlight>
                    <TabItemHorizontalWrapper>
                      <Link linkcolor={linkColor} />
                      <Text style={{ color: "#FFFFFF" }}>Links</Text>
                    </TabItemHorizontalWrapper>
                  </TabHighlight>
                ) : (
                  <TabHighlightClear>
                    <TabItemHorizontalWrapper>
                      <Link linkcolor={linkColor} />
                      <Text style={{ color: "#969AAF" }}>Links</Text>
                    </TabItemHorizontalWrapper>
                  </TabHighlightClear>
                )}
              </div>
              <div onClick={() => setHighlight("Insights")}>
                {highlight == "Insights" ? (
                  <TabHighlight>
                    <TabItemHorizontalWrapper>
                      <Chart chartcolor={chartColor} />
                      <Text style={{ color: "#FFFFFF" }}>Insights</Text>
                    </TabItemHorizontalWrapper>
                  </TabHighlight>
                ) : (
                  <TabHighlightClear>
                    <TabItemHorizontalWrapper>
                      <Chart chartcolor={chartColor} />
                      <Text style={{ color: "#969AAF" }}>Insights</Text>
                    </TabItemHorizontalWrapper>
                  </TabHighlightClear>
                )}
              </div>
            </TabItemVerticalWrapper>
          </TopWrapper>
          <BottomWrapper>
            <TabItemVerticalWrapper>
              <div onClick={() => setHighlight("Pixel")}>
                {highlight == "Pixel" ? (
                  <TabHighlight>
                    <TabItemHorizontalWrapper>
                      <Pixel pixelcolor={pixelColor} />
                      <Text style={{ color: "#FFFFFF" }}>Setup</Text>
                    </TabItemHorizontalWrapper>
                  </TabHighlight>
                ) : (
                  <TabHighlightClear>
                    <TabItemHorizontalWrapper>
                      <Pixel pixelcolor={pixelColor} />
                      <Text style={{ color: "#969AAF" }}>Setup</Text>
                    </TabItemHorizontalWrapper>
                  </TabHighlightClear>
                )}
              </div>
              <div
                onClick={() =>
                  (window.location.href = "https://app.banabo.io/login")
                }
              >
                <TabHighlightClear>
                  <TabItemHorizontalWrapper>
                    <img src={gray_person} />
                    <Text style={{ color: "#969AAF" }}>Log Out</Text>
                  </TabItemHorizontalWrapper>
                </TabHighlightClear>
              </div>
            </TabItemVerticalWrapper>
          </BottomWrapper>
        </ContentWrapper>
      </ComponentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const ComponentWrapper = styled.div`
  display: flex;
  gap: 140px;
`;

const ContentWrapper = styled.div`
  display: grid;
  align-items: top;
  justify-items: top;
  gap: 65vh;

  @media (max-height: 900px) {
    gap: 55vh;
  }

  @media (max-height: 700px) {
    gap: 45vh;
  }
`;

const TopWrapper = styled.div`
  display: grid;
  align-items: center;
  gap: 30px;
`;

const BottomWrapper = styled.div`
  display: grid;
  align-items: center;
  gap: 30px;
`;

const TabItemVerticalWrapper = styled.div`
  display: grid;
  align-items: center;
  gap: 25px;
`;

const TabItemHorizontalWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Text = styled.div`
  font-family: "ProximaNovaSemibold";
  font-size: 17px;
  min-width: 30%;
`;

const TabHighlight = styled.div`
  background-image: url(${TabHighlighted});
  width: 125%;
  height: 45px;
  position: relative;
  display: flex;
  justify-content: left;
  padding-left: 20px;
  cursor: pointer;
`;

const TabHighlightClear = styled.div`
  background-image: url(${TabHighlightedClear});
  width: 125%;
  height: 45px;
  position: relative;
  display: flex;
  justify-content: left;
  padding-left: 20px;
  cursor: pointer;
`;

const TheLogo = styled.img`
  padding-left: 15px;
  padding-top: 10px;
`;
