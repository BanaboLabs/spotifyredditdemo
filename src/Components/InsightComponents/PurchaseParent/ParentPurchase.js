// Parents that holds two child purchase components

import React from "react";
import styled from "styled-components";
import InsightsPurchases from "./InsightsPurchases";
import PurchaseGraph from "./PurchaseGraph";

export default function ParentPurchase(props) {
  return (
    <Wrapper>
      <ContentWrapperParent>
        <InsightsPurchases
          enddate={props.enddate}
          startdate={props.startdate}
        />
        <ContentWrapperChild>
          <PurchaseGraph enddate={props.enddate} startdate={props.startdate} />
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
