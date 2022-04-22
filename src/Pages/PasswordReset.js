/**********************
 * Page for Resetting a User's Password *
 **********************/

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import sanfrancisco from "../Images/sanfrancisco.svg";
import useInput from "../Components/CustomHooks/useInput.js";
import Amplify, { API } from "aws-amplify";

export default function PasswordReset() {
  const emailAddress = useInput("");
  const [resetSubmitted, setResetSubmitted] = useState(false);
  const [step, setStep] = useState(1);
  const [navigate, setNavigate] = useState(false);

  // Function to save the link info without refreshing the page
  const noRefresh = (event) => {
    event.preventDefault();
  };

  // Use Effect that is triggered when step == 2 (When the user gets to the confirmation page)
  useEffect(() => {
    if (resetSubmitted == true) {
      //
      // CORS FIXED
      var myHeaders = new Headers();
      myHeaders.append("Access-Control-Allow-Origin", "*");
      myHeaders.append("Access-Control-Allow-Headers", "*");
      myHeaders.append("Access-Control-Allow-Methods", "OPTIONS,POST,GET");
      myHeaders.append("Content-Type", "application/json;charset=UTF-8");
      myHeaders.append(
        "Accept",
        "application/hal+json,text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8"
      );
      //
      //
      let myInit = {
        body: {
          email: emailAddress.value,
        },
      };

      var response = API.post(
        "myapi",
        "/auth0passwordreset",
        myInit,
        myHeaders
      );
      setStep(2);
    }
  }, [resetSubmitted]);

  useEffect(() => {
    if (emailAddress.value.length >= 5) {
      setNavigate(true);
    }
  }, [emailAddress.value]);

  return (
    <Wrapper>
      {step == 1 ? (
        <ContentWrapper>
          <StretchedImage src={sanfrancisco} />
          <ParentSection>
            <Section1>
              <TopPortion>
                <Title>Reset your password</Title>
              </TopPortion>
              <MiddlePortion>
                <form onSubmit={noRefresh}>
                  <InputWrapper>
                    <Input
                      placeholder="Email Address"
                      value={emailAddress.value}
                      onChange={emailAddress.onChange}
                    />
                  </InputWrapper>
                </form>
              </MiddlePortion>
              {navigate == true ? (
                <StyledButton1 onClick={() => setResetSubmitted(true)}>
                  Recover Password
                </StyledButton1>
              ) : (
                <StyledButton2>Recover Password</StyledButton2>
              )}
            </Section1>
          </ParentSection>
        </ContentWrapper>
      ) : (
        <ContentWrapperChild>
          <Section1>
            <Title>We've sent you a password reset email</Title>
            <SubHead>
              This could take up to 5 minutes. Simply click the link to complete
              your reset.
              <br />
              If you don’t see it, make sure to also check your spam folder
            </SubHead>
          </Section1>
        </ContentWrapperChild>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  min-width: 100vh;
  background-size: cover;
  background-position: center;
  position: relative;
  background-color: #21212b;
  overflow-y: hidden;
  overflow-x: hidden;
`;

const ContentWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: grid;
  -webkit-box-align: center;
  align-items: center;
  grid-template-columns: repeat(2, 50%);
  grid-gap: 90px;
  justify-content: center;
  @media (max-width: 1500px) {
    align-items: none;
    grid-template-columns: none;
  }
`;

const ContentWrapperChild = styled.div`
  padding-top: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ParentSection = styled.div`
  align-content: center;
`;

const StretchedImage = styled.img`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  height: 100%;
  max-height: 100vh;
  overflow: hidden;
  @media (max-width: 1500px) {
    display: none;
  }
`;

const Section1 = styled.div`
  display: grid;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  gap: 30px;
`;

const Title = styled.div`
  font-family: "ProximaNova-Semibold";
  color: #ffffff;
  font-size: 36px;
`;

const SubHead = styled.div`
  font-family: "ProximaNovaRegular";
  color: #ffffff;
  font-size: 20px;
  line-height: 36px;
`;

const TopPortion = styled.div`
  display: grid;
  justify-items: left;
  gap: 20px;
`;

const MiddlePortion = styled.div`
  display: grid;
  justify-items: left;
  gap: 20px;
`;

const Input = styled.input`
  border: none;
  color: #7f848d;
  width: 500px;
  height: 50px;
  font-size: 16px;
  font-family: "ProximaNovaRegular";
  background: rgba(74, 74, 86, 0.44);
  border-radius: 5px;
  outline: none;
  transition: all 0.2s ease 0s;
  padding: 6px 20px;

  :focus {
    box-shadow: 0 0 1pt 1pt #40a3ff;
  }
`;

const InputWrapper = styled.div`
  display: grid;
  gap: 25px;
`;

const StyledButton1 = styled.button`
  background: #40a3ff;
  color: #ffffff;
  width: 190px;
  height: 50px;
  border: none;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: "ProximaNovaSemibold";
  font-size: 16px;
  cursor: pointer;

  transition: 0.75s cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    background: #7cc0ff;
  }
`;

const StyledButton2 = styled.button`
  background: #6c6876;
  color: #ffffff;
  width: 190px;
  height: 50px;
  border: none;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: "ProximaNovaSemibold";
  font-size: 16px;
  cursor: pointer;

  transition: 0.75s cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    background: #7cc0ff;
  }
`;
