import React, { useState, useEffect } from "react";
import styled from "styled-components";
import InsightsCommon from "./InsightsCommon";
import TopEndGraph from "./TopEndGraph";
import TopStartGraph from "./TopStartGraph";

export default function ParentInsights(props) {
  useEffect(() => {}, [props.startdate, props.enddate]);

  return (
    <Wrapper>
      <ContentWrapperParent>
        <InsightsCommon enddate={props.enddate} startdate={props.startdate} />
        <ContentWrapperChild>
          <TopStartGraph enddate={props.enddate} startdate={props.startdate} />
          <TopEndGraph enddate={props.enddate} startdate={props.startdate} />
        </ContentWrapperChild>
      </ContentWrapperParent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-size: cover;
  background-position: center;
  position: relative;
  background-color: transparent;
`;

const ContentWrapperParent = styled.div`
  display: grid;
  gap: 40px;
`;

const ContentWrapperChild = styled.div`
  display: flex;
  gap: 78px;
  width: 1080px;
`;
