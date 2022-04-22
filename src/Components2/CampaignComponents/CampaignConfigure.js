import React, { useState, useEffect } from "react";
import styled from "styled-components";
import savebutton from "../../Images2/savebutton.svg";
import useInput from "../../CustomHooks/useInput";

export default function CampaignsConfigure(props) {
  const noRefresh = (event) => {
    event.preventDefault();
  };

  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    console.log("hi"); // This is the mounting part
  }, [submitted]);

  // Input Field handler
  const handleUserInput1 = (e) => {
    setInputValue1(e.target.value);
  };

  const handleUserInput2 = (e) => {
    setInputValue2(e.target.value);
  };

  const handleUserInput3 = (e) => {
    setInputValue3(e.target.value);
  };

  // Reset Input Field handler
  const resetInputField1 = () => {
    setInputValue1("");
  };

  const resetInputField2 = () => {
    setInputValue2("");
  };

  const resetInputField3 = () => {
    setInputValue3("");
  };

  return (
    <Rectangle1>
      <InsideRectangle1>
        <TextTitle1>CREATE A CAMPAIGN LINK</TextTitle1>
        <SmallText1>
          Map the performance of specific channels by attaching a clickable link
          within the campaign's content
        </SmallText1>
        <form onSubmit={noRefresh}>
          <InsideVStack1>
            <Group1>
              <Header1>PAGE URL</Header1>
              <Input1
                placeholder="Ex: https://www.nike.com/example"
                value={inputValue1}
                onChange={handleUserInput1}
              />
              <BlueLine1 />
            </Group1>
            <Group1>
              <Header1>LINK NAME</Header1>
              <Input1
                placeholder="Ex: Google Campaign V1"
                value={inputValue2}
                onChange={handleUserInput2}
              />
              <BlueLine1 />
            </Group1>
            <Group1>
              <Header1>CAMPAIGN BUDGET</Header1>
              <Input1
                placeholder="Ex: 800"
                value={inputValue3}
                onChange={handleUserInput3}
              />
              <BlueLine1 />
            </Group1>
          </InsideVStack1>
        </form>
      </InsideRectangle1>
      <SaveButton1 src={savebutton} onClick={() => setSubmitted(true)} />
    </Rectangle1>
  );
}

const Input1 = styled.input`
  border: none;
  width: 300px;
  font-size: 16px;
  line-height: 19px;
  font-family: "ProximaNovaRegular";
  background-color: transparent;
  :focus {
    outline: none;
  }
`;

const SaveButton1 = styled.img`
  position: absolute;
  bottom: 12px;
  left: 20px;
  cursor: pointer;
`;

const InsideVStack1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Group1 = styled.div``;

const Header1 = styled.div`
  font-size: 13px;
  color: #9392a6;
  font-family: "ProximaNovaSemiBold";
  padding-bottom: 8px;
`;

const BlackText1 = styled.div`
  font-size: 18px;
  color: #666678;
  font-family: "ProximaNovaSemiBold";
  padding-bottom: 5px;
`;

const BlueLine1 = styled.div`
  width: 305px;
  height: 2px;
  background: #e4f2ff;
`;

const Rectangle1 = styled.div`
  position: absolute;
  width: 474px;
  height: 450px;
  left: 464px;
  top: 110px;
`;

const InsideRectangle1 = styled.div`
  padding-top: 40px;
  padding-left: 40px;
`;

const TextTitle1 = styled.div`
  font-size: 18px;
  color: #88879b;
  font-family: "ProximaNovaSemiBold";
  padding-bottom: 20px;
`;

const SmallText1 = styled.div`
  font-size: 16px;
  color: #a7a6b3;
  font-family: "ProximaNovaRegular";
  padding-bottom: 30px;
  width: 390px;
  line-height: 19px;
`;
