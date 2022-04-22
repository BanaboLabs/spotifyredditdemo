/**********************
 * Graph for the signup componennt *
 **********************/

// ONLY 1 BUCKET
import styled from "styled-components";
import React, { PureComponent, useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Cookies from "universal-cookie";
import Scoring from "../../../Images/scoring.svg";

export default function PurchaseGraph(props) {
  const [topData, setTopData] = useState([]);
  const [dataKey1, setDataKey1] = useState([]);
  const [dataKey2, setDataKey2] = useState([]);
  const [dataKey3, setDataKey3] = useState([]);
  const [dataKey4, setDataKey4] = useState([]);
  const [dataKey5, setDataKey5] = useState([]);
  const [markovData, setMarkovData] = useState([]);
  const timeline = props.timeline;
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

  /*
  const data = [
    { time: "12-6am", TikTok: 400, Mailchimp: 200, Twitter: 240 },
    { time: "6-12pm", TikTok: 300, Mailchimp: 198, Twitter: 210 },
    { time: "12-6pm", TikTok: 100, Mailchimp: 980, Twitter: 220 },
    { time: "6-12am", TikTok: 270, Mailchimp: 308, Twitter: 200 },
  ]; */

  // Gets the dynamic data and data keys
  useEffect(() => {
    setTimeout(function () {
      var nullCheck = cookies.get("theHost");
      if (nullCheck !== "noValue") {
        async function GetMarkovData() {
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
          });

          var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
          };

          await fetch(
            "https://engine.banabo.io/api/insight/markovscore",
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
                setDataKey4(response.channels[3]);
                setDataKey5(response.channels[4]);
                var data = response.primary.output;
                var newArray = [];
                var counter = 0;
                for (const value of data) {
                  if (counter < 5) {
                    var obj = {
                      name: value.channel_name,
                      score: value.total_conversions.toFixed(0),
                    };
                    newArray.push(obj);
                    counter += 1;
                  }
                }
                setMarkovData(newArray);
              }
            })
          );
        }

        GetMarkovData();
      }
    }, 500);
  }, [start_date, end_date]);

  /*
{MarkovData.map((item) => (
          <div>
            <div> {item.channel_name} </div>
            <div> {item.total_conversions} </div>
          </div>
        ))} */

  return (
    <Wrapper>
      <IMG src={Scoring} />
      <BackgroundRectangle>
        {isData == true ? (
          <div>
            <ContentWrapper>
              <Title>Channel Success</Title>
              <SubHeadWrapper>
                <SubHead color="#63A2EB">{dataKey1}</SubHead>
                <SubHead color="#0969F9">{dataKey2}</SubHead>
                <SubHead color="#86C9E0">{dataKey3}</SubHead>
                <SubHead color="#6EE8E8">{dataKey4}</SubHead>
                <SubHead color="#9087FE">{dataKey5}</SubHead>
              </SubHeadWrapper>
            </ContentWrapper>
            <ChartWrapper>
              <BarChart
                width={1000}
                height={120}
                data={markovData}
                margin={{ top: 5, right: 80, left: 30, bottom: 5 }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar stackId="a" dataKey="score">
                  {markovData.map((entry, index) => (
                    <Cell
                      fill={
                        index === 0
                          ? "#63A2EB"
                          : index === 1
                          ? "#0969F9"
                          : index === 2
                          ? "#86C9E0"
                          : index === 3
                          ? "#6EE8E8"
                          : "#9087FE"
                      }
                    />
                  ))}
                </Bar>
              </BarChart>
            </ChartWrapper>
          </div>
        ) : (
          <div>
            <ContentWrapper2>
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
  width: 183px;
  height: 120px;
  top: 10px;
  right: 10px;
  background: #ffffff;
  box-shadow: 2px 5px 40px 0 rgb(0 0 0 / 8%);
  border-radius: 10px;
`;

const BackgroundRectangle = styled.div`
  width: 1080px;
  height: 228px;
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

const ChartWrapper = styled.div`
  padding-top: 35px;
  position: absolute;
  right: 130px;
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
  font-size: 16px;
  line-height: 19px;
  color: #93939e;
  font-family: "ProximaNovaSemiBold";
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
