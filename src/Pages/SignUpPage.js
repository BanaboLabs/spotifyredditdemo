/**********************
 * Page for Signing Up a User *
 **********************/

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../Images/logobeta.svg";
import { Link } from "react-router-dom";
import useInput from "../Components/CustomHooks/useInput.js";
import rightArrowWhite from "../Images/rightarrowsmallwhite.svg";
import Amplify, { API } from "aws-amplify";

export default function SignUpPage() {
  // All the user inputs
  const firstName = useInput("");
  const lastName = useInput("");
  const businessEmail = useInput("");
  const password = useInput("");
  const betaAccessKey = useInput("");
  // Allows the user to move to step 2
  const [continueActivated, setContinueActivated] = useState(false);
  // Allows us to understand if the user is on the signup or confirmation page
  const [step, setStep] = useState(1);

  // Function to save the link info without refreshing the page
  const noRefresh = (event) => {
    event.preventDefault();
  };
  ////
  // Use Effect that is triggered when step == 2 (When the user gets to the confirmation page)
  useEffect(() => {
    if (step == 2) {
      // //
      async function SignUp() {
        var myHeaders = new Headers();
        // CORS FIXED
        myHeaders.append("Access-Control-Allow-Origin", "*");
        myHeaders.append("Access-Control-Allow-Headers", "*");
        myHeaders.append("Access-Control-Allow-Methods", "OPTIONS,POST,GET");
        myHeaders.append("Content-Type", "application/json;charset=UTF-8");
        myHeaders.append(
          "Accept",
          "application/hal+json,text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8"
        );

        // JSON.stringify
        let myInit = {
          body: {
            email: businessEmail.value,
            given_name: firstName.value,
            family_name: lastName.value,
            password: password.value,
          },
        };

        var output = await API.post(
          "myapi",
          "/auth0createuser",
          myInit,
          myHeaders
        );
      }
      SignUp();
    }
  }, [step]);

  // Only alllow the user to move to step two if they input the correct betaAccessKey
  useEffect(() => {
    if (password.value.length >= 8) {
      setContinueActivated(true);
    }
  }, [betaAccessKey, password]);

  return (
    <Wrapper>
      <LogoWrapper>
        <img src={logo} />
      </LogoWrapper>
      <ContentWrapperParent>
        {step == 1 ? (
          <div>
            <ContentWrapperChild>
              <Section1>
                <Title>Let's Get Started</Title>
                <TextGroup>
                  <SubHead>
                    Create your Banabo account. Already Registered?
                  </SubHead>
                  <StyledLink to="/login">Login Here.</StyledLink>
                </TextGroup>
              </Section1>
              <form onSubmit={noRefresh}>
                <Section2>
                  <InputWrapper>
                    <Input
                      placeholder="First name"
                      value={firstName.value}
                      onChange={firstName.onChange}
                    />
                    <Input
                      placeholder="Last name"
                      value={lastName.value}
                      onChange={lastName.onChange}
                    />
                  </InputWrapper>
                  <InputWrapper>
                    <Input
                      placeholder="Business email address"
                      value={businessEmail.value}
                      onChange={businessEmail.onChange}
                    />
                    <Input
                      type="password"
                      placeholder="Password (min 8 characters)"
                      value={password.value}
                      onChange={password.onChange}
                    />
                  </InputWrapper>
                </Section2>
              </form>
              <StyledButton
                onClick={() => {
                  // Will need to include payload parameters for prod api call
                  {
                    continueActivated == true ? setStep(2) : setStep(1);
                  }
                }}
                type="submit"
                continueActivated={continueActivated}
              >
                <ButtonGroup>
                  Continue <img src={rightArrowWhite} />
                </ButtonGroup>
              </StyledButton>
            </ContentWrapperChild>
          </div>
        ) : (
          <ContentWrapperChild>
            <Section1>
              <Title>Please Verify Your Email</Title>
              <TextGroup>
                <SubHead>You’re almost there! We sent an email to</SubHead>
                <SubHead style={{ color: "#FFFFFF" }}>
                  {businessEmail.value}
                </SubHead>
              </TextGroup>
              <SubHead>
                This could take up to 5 minutes. Simply click the link to
                complete your signup.
                <br />
                If you don’t see it, make sure to also check your spam folder
              </SubHead>
            </Section1>
          </ContentWrapperChild>
        )}
      </ContentWrapperParent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  min-width: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  background-color: #21212b;
`;

const LogoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 40px;
  justify-items: left;
  padding: 20px;
  @media (max-width: 1200px) {
    padding: 10vw;
  }
`;

const ContentWrapperParent = styled.div`
  display: grid;
  justify-items: center;
  padding-top: 100px;
`;

const ContentWrapperChild = styled.div`
  display: grid;
  justify-items: left;
  gap: 90px;
  @media (max-width: 1200px) {
    width: 80vw;
  }
`;

const Section1 = styled.div`
  display: grid;
  justify-items: left;
  gap: 20px;
`;

const Section2 = styled.div`
  display: grid;
  justify-items: left;
  gap: 60px;
  @media (max-width: 1200px) {
    gap: 40px;
  }
`;

const Title = styled.div`
  font-family: "ProximaNovaSemiBold";
  color: #ffffff;
  font-size: 40px;
`;

const SubHead = styled.div`
  font-family: "ProximaNovaRegular";
  color: #7f848d;
  font-size: 20px;
  line-height: 150%;
  @media (max-width: 1200px) {
    width: 60vw;
  }
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  @media (max-width: 1200px) {
    width: 80vw;
    flex-direction: column;
  }
`;

const StyledLink = styled(Link)`
  font-family: "ProximaNovaRegular";
  color: #40a3ff;
  font-size: 20px;
  padding-top: 5px;
`;

const Input = styled.input`
  border: none;
  color: #7f848d;
  width: 300px;
  font-size: 20px;
  font-family: "ProximaNovaRegular";
  background: transparent;
  border-bottom: 1px solid #7f848d;
  :focus {
    outline: none;
    border-bottom: 1px solid #40a3ff;
  }
`;

const StyledButton = styled.button`
  background: ${(props) => (props.continueActivated ? "#40A3FF" : "#6C6876")};
  color: #ffffff;
  width: 190px;
  height: 50px;
  border: none;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: "ProximaNovaSemiBold";
  font-size: 19px;
  cursor: pointer;
  transition: 0.75s cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover {
    background: ${(props) => (props.continueActivated ? "#0D8EFF" : "#6C6876")};
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
`;
