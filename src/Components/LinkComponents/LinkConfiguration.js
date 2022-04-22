/**********************
 * Component for creating new Banabo Links *
 **********************/

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useInput from "../CustomHooks/useInput";
// NEED TO MOVE TO THE BACKEND
import Cookies from "universal-cookie";

export default function LinkConfiguration(props) {
  const pageUrl = useInput("");
  const linkName = useInput("");
  const [outputLink, setOutputLink] = useState("Output");
  const [outputColorBlack, setOutputColorBlack] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [buttonTitle, setButtonTitle] = useState("Create");
  const [ready, setReady] = useState(false);
  const [almostReady, setAlmostReady] = useState(false);
  const cookies = new Cookies();
  const [changeState, setChangeState] = useState(true);

  // Function to save the link info
  const noRefresh = (event) => {
    event.preventDefault();
  };

  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  // Input Field handler
  const handleUserInput1 = (e) => {
    setInputValue1(e.target.value);
  };

  const handleUserInput2 = (e) => {
    setInputValue2(e.target.value);
  };

  // Reset Input Field handler
  const resetInputField1 = () => {
    setInputValue1("");
  };

  const resetInputField2 = () => {
    setInputValue2("");
  };

  useEffect(() => {
    props.sendToParent(!submitted); // This is the mounting part
  }, [submitted]);

  useEffect(() => {
    setChangeState(!changeState);
  }, [submitted]);

  useEffect(() => {
    setAlmostReady(!almostReady);
    setReady(!ready);
    resetInputField1();
    resetInputField2();
  }, [changeState]);

  useEffect(() => {
    if (inputValue1.length >= 1 && inputValue2.length >= 1) {
      setAlmostReady(true);
    }
  }, [inputValue1, inputValue2]);

  // Function that saves the users custom link for later

  useEffect(() => {
    if (submitted == true) {
      var bearerToken = cookies.get("bearerToken");

      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${bearerToken}`);
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        url: inputValue1,
        name: inputValue2,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("https://engine.banabo.io/api/link/create", requestOptions)
        .then((response) => response.text())
        .then((result) => setSubmitted(false))
        .catch((error) => console.log("error", error));
    }
  }, [submitted]);

  return (
    <Wrapper>
      <ContentWrapper>
        <Rectangle>
          {changeState == true ? (
            <InsideWrapper>
              <HeadlineWrapper>
                <Title>Create a new link</Title>
                <Subtitle>
                  Map the traffic sources of your website visitors by attaching
                  the clickable link as the url within your campaigns
                </Subtitle>
              </HeadlineWrapper>
              <form onSubmit={noRefresh}>
                <SectionWrapper>
                  <TextfieldWrapper>
                    <TextfieldContentWrapper>
                      <SmallText>page url</SmallText>
                      <RectangleTextBox>
                        <DefaultText>
                          <Input
                            placeholder="Ex: https://banabo.io/landing"
                            value={inputValue1}
                            onChange={handleUserInput1}
                          />
                        </DefaultText>
                      </RectangleTextBox>
                    </TextfieldContentWrapper>
                    <TextfieldContentWrapper>
                      <SmallText>link name</SmallText>
                      <RectangleTextBox>
                        <DefaultText>
                          <Input
                            placeholder="Ex: Facebook Campaign V1"
                            value={inputValue2}
                            onChange={handleUserInput2}
                          />
                        </DefaultText>
                      </RectangleTextBox>
                    </TextfieldContentWrapper>
                  </TextfieldWrapper>
                  <ButtonAndOutputContentWrapper>
                    <NewButton
                      almostReady={almostReady}
                      type="submit"
                      onClick={() => setSubmitted(true)}
                    >
                      Create
                    </NewButton>
                  </ButtonAndOutputContentWrapper>
                </SectionWrapper>
              </form>
            </InsideWrapper>
          ) : (
            <InsideWrapper>
              <HeadlineWrapper>
                <Title>Create a new link</Title>
                <Subtitle>
                  Map the traffic sources of specific campaigns by attaching the
                  clickable link as the url within your ads or media
                </Subtitle>
              </HeadlineWrapper>
              <form onSubmit={noRefresh}>
                <SectionWrapper>
                  <TextfieldWrapper>
                    <TextfieldContentWrapper>
                      <SmallText>page url</SmallText>
                      <RectangleTextBox>
                        <DefaultText>
                          <Input
                            placeholder="Ex: https://banabo.io/landing"
                            value={inputValue1}
                            onChange={handleUserInput1}
                          />
                        </DefaultText>
                      </RectangleTextBox>
                    </TextfieldContentWrapper>
                    <TextfieldContentWrapper>
                      <SmallText>link name</SmallText>
                      <RectangleTextBox>
                        <DefaultText>
                          <Input
                            placeholder="Ex: Facebook Campaign V1"
                            value={inputValue2}
                            onChange={handleUserInput2}
                          />
                        </DefaultText>
                      </RectangleTextBox>
                    </TextfieldContentWrapper>
                  </TextfieldWrapper>
                  <ButtonAndOutputContentWrapper>
                    <NewButton
                      almostReady={almostReady}
                      type="submit"
                      onClick={() => setSubmitted(true)}
                    >
                      Create
                    </NewButton>
                  </ButtonAndOutputContentWrapper>
                </SectionWrapper>
              </form>
            </InsideWrapper>
          )}
        </Rectangle>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  padding-left: 100px;
`;

const ContentWrapper = styled.div`
  padding-top: 9%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Rectangle = styled.div`
  height: 480px;
  width: 550px;
  background: #ffffff;
  box-shadow: 2px 5px 40px 0 rgb(0 0 0 / 8%);
  border-radius: 10px;
`;

const InsideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  width: 90%;
`;

const HeadlineWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.div`
  font-size: 24px;
  color: #252531;
  font-family: "ProximaNovaSemiBold";
`;

const Subtitle = styled.div`
  font-size: 16px;
  line-height: 19px;
  color: rgba(37, 37, 49, 0.7);
  font-family: "ProximaNovaRegular";
  max-width: 580px;
`;

const TextfieldWrapper = styled.div`
  box-sizing: border-box;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const TextfieldContentWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 410px;
  height: 118px;
  gap: 7px;
`;

const ButtonAndOutputContentWrapper = styled.div`
  box-sizing: border-box;
  margin: auto;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const RectangleTextBox = styled.div`
  position: relative;
  background: #f7f7f7;
  border-radius: 10px;
  height: ${(props) => (props.large ? "120px" : "50px")};
  width: 410px;
`;

const Input = styled.input`
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

const DefaultText = styled.div`
  font-size: 16px;
  line-height: 19px;
  padding-top: 14px;
  padding-left: 14px;
  color: rgba(143, 143, 143, 0.8);
  font-family: "ProximaNovaRegular";
`;

const SmallText = styled.div`
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  font-family: "ProximaNovaBold";
`;

const NewButton = styled.button`
  background: ${(props) => (props.almostReady ? "#40A3FF" : "#dcette7")};
  border-radius: 10px;
  color: #ffffff;
  font-family: "ProximaNovaSemiBold";
  font-size: 19px;
  cursor: pointer;
  width: 410px;
  height: 48px;
  border: none;
  margin: auto;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding-top: 35px;
`;
