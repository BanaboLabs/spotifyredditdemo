/**********************
 * Parent Component that stores the two link components *
 **********************/

import React, { useState } from "react";
import styled from "styled-components";
import LinkConfiguration from "./LinkConfiguration";
import LinkSave from "./LinkSave";
import Base from "../../Images/base.svg";

export default function ParentLink() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <Wrapper>
      <ContentWrapper>
        <Rectangle>
          <BigWrapper>
            <ContentWrapper>
              <LinkConfiguration
                toChild={isSubmitted}
                sendToParent={setIsSubmitted}
              />
              <LinkSave toChild={isSubmitted} />
            </ContentWrapper>
          </BigWrapper>
        </Rectangle>
      </ContentWrapper>
    </Wrapper>
  );
}

const BigWrapper = styled.div`
  padding-top: 25px;
  padding-left: 100px;
  @media (max-height: 900px) {
    padding-top: 15px;
    padding-left: 10px;
  }
`;

const Wrapper = styled.div``;

const ContentWrapper = styled.div`
  display: flex;
  direction: column;
  align-items: top;
  gap: 80px;
  position: relative;

  @media (min-width: 1600px) {
    gap: 200px;
  }

  @media (min-width: 2000px) {
    gap: 250px;
  }
`;

const Rectangle = styled.div`
  position: relative;
  min-height: 100vh;
  max-height: 100vh;
  min-width: 120%;
  background: #ffffff;
  border-radius: 40px;
`;
