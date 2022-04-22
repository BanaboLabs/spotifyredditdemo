/**********************
 * Component for showing the top clicks *
 **********************/

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Cookies from "universal-cookie";

export default function InsightsClicks(props) {
  const [linkData, setLinkData] = useState([]);
  const timeline = props.timeline;
  const [isData, setIsData] = useState(true);
  const cookies = new Cookies();
  const [start_date, setStartDate] = useState("2021-10-23T22:38:36.848Z");
  const [end_date, setEndDate] = useState("2021-10-30T22:38:01.968Z");

  useEffect(() => {
    setStartDate(props.startdate);
    setEndDate(props.enddate);
  }, [props.startdate, props.enddate]);

  useEffect(() => {
    var nullCheck = cookies.get("theHost");
    if (nullCheck === "noValue") {
      setIsData(false);
    }
  }, []);

  // API START
  // NEED TO MOVE TO THE BACKEND
  useEffect(() => {
    setTimeout(function () {
      var nullCheck = cookies.get("theHost");
      if (nullCheck !== "noValue") {
        async function GetLinkClicks() {
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          var bearerToken = cookies.get("bearerToken");
          var param = "Bearer " + `${bearerToken}`;
          console.log(param);
          myHeaders.append("Authorization", `${param}`);

          var raw = JSON.stringify({
            startdate: start_date,
            enddate: end_date,
            host: cookies.get("theHost"),
          });

          var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
          };

          await fetch(
            "https://engine.banabo.io/api/insight/topclicks",
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
        GetLinkClicks();
      }
    }, 100);
  }, [start_date, end_date]);
  // API END

  return (
    <Wrapper>
      <Separator>
        <BaseRectangle>
          {isData == true ? (
            <VerticalWrapper>
              <HorizontalWrapper>
                <TopLeft>Traffic Sources</TopLeft>
              </HorizontalWrapper>
              <MetaWrapper>
                {linkData.map((item, index) => (
                  <RowWrapper>
                    <BlackBall>
                      <WhiteNumber>{index + 1}</WhiteNumber>
                    </BlackBall>
                    <BackgroundRectangle>
                      <BackgroundRectangleText>
                        {String(item.clicks)} Total
                      </BackgroundRectangleText>
                    </BackgroundRectangle>
                    <Web>{item.name}</Web>
                  </RowWrapper>
                ))}
              </MetaWrapper>
            </VerticalWrapper>
          ) : (
            <VerticalWrapper>
              <HorizontalWrapper>
                <TopLeft>Visitor Paths</TopLeft>
              </HorizontalWrapper>
              <NoCurrentDataText>No Current Data</NoCurrentDataText>
            </VerticalWrapper>
          )}
        </BaseRectangle>
      </Separator>
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

const IMG = styled.img`
  position: absolute;
  top: 200px;
  right: 20px;
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-items: center;
  align-items: center;
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

const NoCurrentDataText = styled.div`
  font-size: 16px;
  line-height: 22px;
  color: #8f8f8f;
  font-family: "ProximaNovaSemiBold";
`;

const WhiteNumber = styled.div`
  font-size: 15px;
  font-family: "ProximaNovaSemiBold";
  color: #ffffff;
  padding-top: 2px;
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
  line-height: 19px;
  font-family: "ProximaNovaRegular";
  width: 150px;
  font-size: 15px;
  color: #1d1d26;
`;

const BaseRectangle = styled.div`
  height: 305px;
  width: 1075px;
  background: #ffffff;
  box-shadow: 2px 5px 40px 0 rgb(0 0 0 / 8%);
  border-radius: 10px;
  overflow-y: scroll;
  overflow-x: scroll;
`;

const MetaWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`;

const Separator = styled.div``;

const VerticalWrapper = styled.div`
  display: grid;
  grid-gap: 16px;
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
