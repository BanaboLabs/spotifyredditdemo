// Paths that lead to a purchase

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import rightarrow from "../../../Images/prettyarrow.svg";
import Cookies from "universal-cookie";

export default function InsightsPurchases(props) {
  const [linkData, setLinkData] = useState([]);
  const timeline = props.timeline;
  const [isData, setIsData] = useState(true);
  const [start_date, setStartDate] = useState("2021-10-23T22:38:36.848Z");
  const [end_date, setEndDate] = useState("2021-10-30T22:38:01.968Z");

  useEffect(() => {
    setStartDate(props.startdate);
    setEndDate(props.enddate);
  }, [props.startdate, props.enddate]);
  const cookies = new Cookies();

  useEffect(() => {
    var nullCheck = cookies.get("theHost");
    if (nullCheck === "noValue") {
      setIsData(false);
    }
  }, []);

  useEffect(() => {
    setTimeout(function () {
      var nullCheck = cookies.get("theHost");
      if (nullCheck !== "noValue") {
        async function GetPurchases() {
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          const cookies = new Cookies();
          var bearerToken = cookies.get("bearerToken");
          var param = "Bearer " + `${bearerToken}`;
          myHeaders.append("Authorization", `${param}`);

          var raw = JSON.stringify({
            startdate: start_date,
            enddate: end_date,
            host: cookies.get("theHost"),
            minconvs: 1,
          });

          var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
          };
          await fetch(
            "https://engine.banabo.io/api/insight/commonpaths",
            requestOptions
          ).then((response) =>
            response.json().then((response) => {
              if (response.length === 0) {
                setIsData(false);
              } else {
                setIsData(true);
                setLinkData(response);
              }
            })
          );
        }

        GetPurchases();
      }
    }, 100);
  }, [start_date, end_date]);

  return (
    <Wrapper>
      <ChildWrapper>
        {isData == true ? (
          <FullRectangle>
            <WhiteGradient />
            <VerticalWrapper>
              <HorizontalWrapper>
                <TopLeft>Visitor Paths</TopLeft>
              </HorizontalWrapper>
              {linkData.map((item, index) => (
                <RowWrapper>
                  <BlackBall>
                    <WhiteNumber>{index + 1}</WhiteNumber>
                  </BlackBall>
                  <BackgroundRectangle>
                    <BackgroundRectangleText>
                      {item.total} Total
                    </BackgroundRectangleText>
                  </BackgroundRectangle>
                  <Web>
                    {item.sources.map((sources, index, array) => (
                      <div>
                        <Flex>
                          <Text>{sources} </Text>
                          <CorrectIMG
                            src={index + 1 === array.length ? null : rightarrow}
                            style={{
                              "padding-right": "50px",
                              "padding-left": "0px",
                            }}
                          />
                        </Flex>
                      </div>
                    ))}
                  </Web>
                </RowWrapper>
              ))}
            </VerticalWrapper>
          </FullRectangle>
        ) : (
          <FullRectangle>
            <VerticalWrapper>
              <HorizontalWrapper>
                <TopLeft>Visitor Paths</TopLeft>
              </HorizontalWrapper>
              <NoCurrentDataText>No Current Data</NoCurrentDataText>
            </VerticalWrapper>
          </FullRectangle>
        )}
      </ChildWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-size: cover;
  background-position: center;
  position: relative;
  background-color: transparent;
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  display: flex;
  align-items: center;
`;

const NoCurrentDataText = styled.div`
  font-size: 16px;
  line-height: 22px;
  color: #8f8f8f;
  font-family: "ProximaNovaSemiBold";
`;

const BlackBall = styled.div`
  width: 26px;
  height: 26px;
  background: #252531;
  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WhiteNumber = styled.div`
  font-size: 15px;
  font-family: "ProximaNovaSemiBold";
  color: #ffffff;
  padding-top: 4px;
`;

const WhiteGradient = styled.div`
  position: absolute;
  width: 202px;
  height: 286px;
  left: 878px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 13.19%,
    rgba(255, 255, 255, 0.7) 83.52%
  );
`;

const FullRectangle = styled.div`
  width: 1080px;
  height: 284px;
  background: #ffffff;
  box-shadow: 2px 5px 40px 0 rgb(0 0 0 / 8%);
  border-radius: 10px;
  overflow-y: scroll;
  overflow-x: scroll;
`;

const BackgroundRectangle = styled.div`
  background: #f7f7f7;
  border-radius: 10px;
  width: 80px;
  height: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackgroundRectangleText = styled.div`
  font-size: 14px;
  line-height: 14px;
  color: #93939e;
  font-family: "ProximaNovaRegular";
`;

const Web = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 16px;
  line-height: 19px;
  align-items: center;
  font-family: "ProximaNovaBold";
  color: #000000;
  width: 75px;
  height: 37px;
`;

const ChildWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const VerticalWrapper = styled.div`
  display: grid;
  grid-gap: 22px;
  padding-top: 20px;
  padding-left: 20px;
`;

const TopLeft = styled.div`
  font-size: 16px;
  line-height: 19px;
  color: #93939e;
  font-family: "ProximaNovaSemiBold";
`;

const TopRight = styled.div`
  font-size: 14px;
  line-height: 19px;
  color: #bfbfbf;
  font-family: "ProximaNovaSemiBold";
  padding-right: 20px;
`;

const HorizontalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CorrectIMG = styled.img`
  display: flex;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
`;

const Text = styled.div`
  font-family: "ProximaNovaRegular";
  width: 170px;
  font-size: 15px;
  color: #1d1d26;
`;
