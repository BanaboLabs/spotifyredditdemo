/**********************
 * Graph 1 for the clicks componennt *
 **********************/

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Cookies from "universal-cookie";
import {
  LineChart,
  Line,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import Timeline from "../../../Images/timeline2.svg";

export default function ClicksGraph(props) {
  const [clickData, setClickData] = useState([]);
  const [dataKey1, setDataKey1] = useState([]);
  const [dataKey2, setDataKey2] = useState([]);
  const [dataKey3, setDataKey3] = useState([]);
  const [isData, setIsData] = useState(true);
  const [start_date, setStartDate] = useState("2021-10-23T22:38:36.848Z");
  const [end_date, setEndDate] = useState("2021-10-30T22:38:01.968Z");
  const cookies = new Cookies();

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
  // Gets the dynamic data and data keys
  useEffect(() => {
    setTimeout(function () {
      var nullCheck = cookies.get("theHost");
      if (nullCheck !== "noValue") {
        async function GetClickData() {
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");

          var bearerToken = cookies.get("bearerToken");
          var param = "Bearer " + `${bearerToken}`;

          myHeaders.append("Authorization", `${param}`);

          var raw = JSON.stringify({
            startdate: start_date,
            enddate: end_date,
            host: cookies.get("theHost"),
            numtops: "3",
            numbuckets: "4",
          });

          var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
          };

          await fetch(
            "https://engine.banabo.io/api/insight/topclicksgraph",
            requestOptions
          ).then((response) =>
            response.json().then((response) => {
              if (response.length === 0) {
                setIsData(false);
                console.log("RAN1");
              } else {
                console.log(response);
                setIsData(true);
                setDataKey1(response.channels[0]);
                setDataKey2(response.channels[1]);
                setDataKey3(response.channels[2]);
                setClickData(response.primary.output);
                console.log("RAN2");
              }
            })
          );
        }

        GetClickData();
      }
    }, 100);
  }, [start_date, end_date]);

  return (
    <Wrapper>
      <IMG src={Timeline} />
      <BackgroundRectangle>
        {isData == true ? (
          <div>
            <ContentWrapper>
              <Title>Top Sources</Title>
              <SubHeadWrapper>
                <SubHead color="#5609F9">{dataKey1}</SubHead>
                <SubHead color="#0969F9">{dataKey2}</SubHead>
                <SubHead color="#6DC7C7">{dataKey3}</SubHead>
              </SubHeadWrapper>
            </ContentWrapper>
            <LineChart
              width={1060}
              height={150}
              data={clickData}
              margin={{ top: 5, right: 30, left: 30, bottom: 5 }}
            >
              <XAxis
                dataKey="bucket"
                tick={{ fill: "white" }}
                style={{
                  fontFamily: "ProximaNovaRegular",
                  fontSize: "13px",
                }}
              />
              <Tooltip />
              <Line
                type="monotone"
                dataKey={dataKey1}
                stroke="#0969F9"
                strokeWidth={5}
              />
              <Line
                type="monotone"
                dataKey={dataKey2}
                stroke="#5609F9"
                strokeWidth={5}
              />
              <Line
                type="monotone"
                dataKey={dataKey3}
                stroke="#6DC7C7"
                strokeWidth={5}
              />
            </LineChart>
          </div>
        ) : (
          <div>
            <ContentWrapper2>
              <Title>Top Sources</Title>
              <SubHeadWrapper>
                <NoCurrentDataText>No Current Data</NoCurrentDataText>
              </SubHeadWrapper>
            </ContentWrapper2>
          </div>
        )}
      </BackgroundRectangle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-size: cover;
  background-position: center;
  position: relative;
  background-color: transparent;
`;

const BackgroundRectangle = styled.div`
  width: 1078px;
  height: 228px;
  background: #ffffff;
  box-shadow: 2px 5px 40px 0 rgb(0 0 0 / 8%);
  border-radius: 10px;
`;

const IMG = styled.img`
  position: absolute;
  top: 193px;
  right: 38px;
`;

// WHEN THERE IS NO DATA START
const NoCurrentDataText = styled.div`
  font-size: 16px;
  line-height: 22px;
  color: #8f8f8f;
  font-family: "ProximaNovaSemiBold";
`;

const ContentWrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 20px;
  padding-top: 20px;
`;

// WHEN THERE IS NO DATA END

const Title = styled.div`
  font-family: ProximaNovaBold;
  font-size: 16px;
  line-height: 19px;
  color: #93939e;
`;

const SubHeadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const SubHead = styled.div`
  font-size: 13px;
  line-height: 32px;
  color: ${(props) => props.color};
  font-family: "ProximaNovaSemiBold";
`;

const ContentWrapper = styled.div`
  display: grid;
  padding-left: 15px;
  padding-top: 15px;
`;
