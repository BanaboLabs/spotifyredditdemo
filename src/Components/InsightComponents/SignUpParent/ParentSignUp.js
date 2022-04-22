// Parents that holds two child signup components

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InsightsSignUps from "./InsightsSignUps";
import SignUpGraph from "./SignUpGraph";

export default function ParentInsights(props) {
  useEffect(() => {}, [props.startdate, props.enddate]);

  return (
    <Wrapper>
      <ContentWrapperParent>
        <InsightsSignUps enddate={props.enddate} startdate={props.startdate} />
        <ContentWrapperChild>
          <SignUpGraph enddate={props.enddate} startdate={props.startdate} />
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
