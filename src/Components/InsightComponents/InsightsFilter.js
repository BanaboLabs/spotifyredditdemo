/**********************
 * Component for filtering other components based on a specified timeline *
 **********************/

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import downarrow from "../../Images/downarrow.svg";
import calendar from "../../Images/calendar.gif";
import grayx from "../../Images/grayx.svg";
import Cookies from "universal-cookie";

export default function InsightsFilter(props) {
  const [filterActive, setfilterActive] = useState(false);
  const [start_date, setStartDate] = useState("2021-10-23T22:38:36.848Z");
  const [end_date, setEndDate] = useState("2021-10-30T22:38:01.968Z");
  const [timeLine, setTimeLine] = useState("Day");
  const [timeFrame, setTimeFrame] = useState("Today");
  const cookies = new Cookies();

  useEffect(() => {
    props.sendToParent1(start_date); // This is the mounting part
  }, [start_date]);

  useEffect(() => {
    props.sendToParent2(end_date); // This is the mounting part
  }, [end_date]);

  useEffect(() => {
    if (timeLine == "Day") {
      let a = new Date();
      let start = a.setDate(a.getDate());
      start = new Date(start).toISOString();
      setStartDate(start);

      let b = new Date();
      let end = b.setDate(b.getDate());
      end = new Date(end).toISOString();
      cookies.set("startDate", end, { path: "/" });
      setEndDate(end);
    }

    if (timeLine == "Week") {
      let a = new Date();
      let start = a.setDate(a.getDate());
      start = new Date(start).toISOString();
      setStartDate(start);

      let b = new Date();
      let end = b.setDate(b.getDate() - 60);
      end = new Date(end).toISOString();
      setEndDate(end);
    }

    if (timeLine == "Month") {
      let a = new Date();
      let start = a.setDate(a.getDate());
      start = new Date(start).toISOString();
      setStartDate(start);

      let b = new Date();
      let end = b.setDate(b.getDate() - 90);
      end = new Date(end).toISOString();
      setEndDate(end);
    }
  }, [timeLine]);

  // Date Function
  function DateRange(daterange) {
    var m_names = new Array(
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC"
    );
    var d = new Date();
    d.setDate(d.getDate() - daterange);
    var curr_date = d.getDate();
    var curr_month = d.getMonth();
    var curr_year = d.getFullYear();
    return curr_date + "/" + m_names[curr_month] + "/" + curr_year;
  }

  useEffect(() => {
    setfilterActive(false); // This is the mounting part
  }, [timeLine]);

  return (
    <Wrapper>
      <PrimaryBox display={filterActive}>
        <InsideWrapperTop>
          <FlexDiv>
            <Flex>
              <TextRegular>Filtered by</TextRegular>
              <TextBold>{timeLine}</TextBold>
            </Flex>
            <InsideWrapperBottom>{timeFrame}</InsideWrapperBottom>
          </FlexDiv>
          <Arrow
            onClick={() => setfilterActive(!filterActive)}
            filterActive={filterActive}
            src={downarrow}
          />
        </InsideWrapperTop>
      </PrimaryBox>
      <Absolute display={filterActive}>
        <ModalRectangle>
          <InsideVerticalWrapper>
            <BigHStack>
              <LittleHStack>
                <Calendar src={calendar} /> <ModalTitle>Date Range</ModalTitle>
              </LittleHStack>
              <GrayX
                src={grayx}
                onClick={() => setfilterActive(!filterActive)}
                filterActive={filterActive}
              />
            </BigHStack>

            <Today
              onClick={() => {
                setTimeFrame("Today");
                setTimeLine("Day");
              }}
            >
              <InsideText>Today</InsideText>
            </Today>

            <Week
              onClick={() => {
                setTimeFrame(DateRange(7) + " - Today");
                setTimeLine("Week");
              }}
            >
              <InsideText>1 week ago - Today</InsideText>
            </Week>
            <Month
              onClick={() => {
                setTimeFrame(DateRange(30) + " - Today");
                setTimeLine("Month");
              }}
            >
              <InsideText>1 month ago - Today</InsideText>
            </Month>
          </InsideVerticalWrapper>
        </ModalRectangle>
      </Absolute>
    </Wrapper>
  );
}

const Absolute = styled.div`
  display: ${(props) => (props.display ? "in-line" : "none")};
  position: absolute;
  z-index: 1;
  left: -156px;
  top: 75px;
`;

const ModalRectangle = styled.div`
  width: 359px;
  height: 270px;
  background: #ffffff;
  box-shadow: 2px 5px 40px 0 rgb(0 0 0 / 8%);
  border-radius: 10px;
  display: flex;
  padding: 20px;
`;

const InsideVerticalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const BigHStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 150px;
`;

const ModalTitle = styled.div`
  font-size: 22px;
  font-family: "ProximaNovaBold";
  color: #47475e;
`;

const Calendar = styled.img`
  height: 22px;
  width: 24px;
`;

const GrayX = styled.img`
  height: 11px;
  width: 11px;
  cursor: pointer;
`;

const LittleHStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Wrapper = styled.div`
  position: relative;
  background-size: cover;
  background-position: center;
  position: relative;
  background-color: transparent;
`;

const PrimaryBox = styled.div`
  background: #ffffff;
  box-shadow: 2px 5px 40px 0 rgb(0 0 0 / 8%);
  border-radius: 5px;
  width: 200px;
  height: 57px;
`;

const InsideWrapperTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-top: 8px;
`;

const InsideWrapperBottom = styled.div`
  font-size: 13px;
  line-height: 16px;
  color: #252531;
  font-family: "ProximaNovaSemibold";
  width: 125px;
`;

const TextRegular = styled.div`
  font-size: 16px;
  line-height: 19px;
  color: #252531;
  font-family: "ProximaNovaRegular";
  width: 80px;
`;

const TextBold = styled.div`
  font-size: 16px;
  line-height: 19px;
  color: #252531;
  font-family: "ProximaNovaBold";
`;

const Arrow = styled.img`
  transform: ${(props) => (props.filterActive ? "none" : "rotate(180deg)")};
  cursor: pointer;
  transition: 0.75s cubic-bezier(0.075, 0.82, 0.165, 1);
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Today = styled.div`
  height: 90px;
  width: 208px;
  background: #f7f7f7;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Week = styled.div`
  height: 90px;
  width: 208px;
  background: #b4dbf6;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Month = styled.div`
  height: 90px;
  width: 208px;
  background: #ffc95f;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const InsideText = styled.div`
  font-size: 14px;
  line-height: 17px;
  color: #1d1d26;
  font-family: "ProximaNovaRegular";
`;

/*

<FilterActiveBox onClick={() => setTimeFrame("Today")}>
              <FilterActiveText onClick={() => setTimeLine("Day")}>
                Day
              </FilterActiveText>
            </FilterActiveBox>
            <SpacerBig />
            <FilterActiveBox
              onClick={() => setTimeFrame(DateRange(7) + " - Today")}
            >
              <FilterActiveText onClick={() => setTimeLine("Week")}>
                Week
              </FilterActiveText>
            </FilterActiveBox>
            <SpacerBig />
            <FilterActiveBox
              onClick={() => setTimeFrame(DateRange(30) + " - Today")}
            >
              <FilterActiveText onClick={() => setTimeLine("Month")}>
                Month
              </FilterActiveText>
            </FilterActiveBox>

*/
