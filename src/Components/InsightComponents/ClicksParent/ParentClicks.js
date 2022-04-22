// Parent that holds two child click components

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ClicksGraph from "./ClicksGraph";
import InsightsClicks from "./InsightsClicks";

export default function ParentClicks(props) {
  useEffect(() => {}, [props.startdate, props.enddate]);
  return (
    <Wrapper>
      <ContentWrapperParent>
        <InsightsClicks enddate={props.enddate} startdate={props.startdate} />
        <ContentWrapperChild>
          <ClicksGraph enddate={props.enddate} startdate={props.startdate} />
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
  gap: 42px;
  width: 1080px;
`;
