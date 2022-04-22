import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SelectCardTopLeft from "../HomeComponents/SelectCardTopLeft";

export default function TopLeftCard() {
  return (
    <CardParameter>
      <Inner>
        <GrayText>NIKE</GrayText>
        <BlackText>Good Afternoon, Colin</BlackText>
        <SelectCardTopLeft />
      </Inner>
    </CardParameter>
  );
}

const CardParameter = styled.div`
  position: absolute;
  width: 396px;
  height: 410px;
  left: 464px;
  top: 105px;
  background: #ffffff;
  box-shadow: 0px 11px 28.5px 6.5px #eceff4;
  border-radius: 10px;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  position: relative;
  gap: 27px;
  padding-left: 45px;
  padding-top: 35px;
  z-index: 10;
`;

const GrayText = styled.div`
  font-family: "ProximaNovaSemibold";
  font-size: 16px;
  line-height: 19px;
  color: #88879b;
`;

const BlackText = styled.div`
  font-family: "ProximaNovaSemibold";
  font-size: 40px;
  line-height: 49px;
  color: #252531;
`;
