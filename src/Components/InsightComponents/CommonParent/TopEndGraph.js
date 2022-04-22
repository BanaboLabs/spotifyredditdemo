/**********************
 * Graph 1 for the common componennt *
 **********************/
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  LineChart,
  Line,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import Cookies from "universal-cookie";
import Timeline from "../../../Images/timeline.svg";

export default function TopEndGraph(props) {
  const [bottomData, setBottomData] = useState([]);
  const [dataKey1, setDataKey1] = useState([]);
  const [dataKey2, setDataKey2] = useState([]);
  const [dataKey3, setDataKey3] = useState([]);
  const [isData, setIsData] = useState(true);
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

  const cookies = new Cookies();
  // API START
  useEffect(() => {
    setTimeout(function () {
      var nullCheck = cookies.get("theHost");
      if (nullCheck !== "noValue") {
        async function GetEndData() {
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
            numtops: 3,
            numbuckets: 4,
          });

          var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
          };

          await fetch(
            "https://engine.banabo.io/api/insight/commonend",
            requestOptions
          ).then((response) =>
            response.json().then((response) => {
              if (response.length === 0) {
                setIsData(false);
              } else {
                setIsData(true);
                setDataKey1(response.channels[0]);
                setDataKey2(response.channels[1]);
                setDataKey3(response.channels[2]);
                setBottomData(response.primary.output);
              }
            })
          );
        }
        GetEndData();
      } else {
      }
    }, 100);
  }, [start_date, end_date]);
  // API END

  return (
    <Wrapper>
      <IMG src={Timeline} />
      <BackgroundRectangle>
        {isData == true ? (
          <div>
            <ContentWrapper>
              <Title>Most Common End</Title>
              <SubHeadWrapper>
                <SubHead color="#EB6363">{dataKey1}</SubHead>
                <SubHead color="#F96E09">{dataKey2}</SubHead>
                <SubHead color="#E086DC">{dataKey3}</SubHead>
              </SubHeadWrapper>
            </ContentWrapper>
            <LineChart
              width={500}
              height={150}
              data={bottomData}
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
                stroke="#EB6363"
                strokeWidth={5}
              />
              <Line
                type="monotone"
                dataKey={dataKey2}
                stroke="#F96E09"
                strokeWidth={5}
              />
              <Line
                type="monotone"
                dataKey={dataKey3}
                stroke="#E086DC"
                strokeWidth={5}
              />
            </LineChart>
          </div>
        ) : (
          <div>
            <ContentWrapper2>
              <Title>Most Common End</Title>
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

const IMG = styled.img`
  position: absolute;
  top: 200px;
  right: 20px;
`;

const BackgroundRectangle = styled.div`
  width: 500px;
  height: 247px;
  background: #ffffff;
  box-shadow: 2px 5px 40px 0 rgb(0 0 0 / 8%);
  border-radius: 10px;
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
