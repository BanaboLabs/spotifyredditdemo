import React, { useEffect, useState } from "react";
import styled from "styled-components";
import sanfrancisco from "../Images/sanfrancisco.svg";
import { Link } from "react-router-dom";
import useInput from "../Components/CustomHooks/useInput.js";
import Cookies from "universal-cookie";
import Amplify, { API } from "aws-amplify";
import useMediaQuery from "../Components/CustomHooks/useMediaQuery";

export default function LoginPage() {
  // user inputs
  const emailAddress = useInput("");
  const password = useInput("");
  const [loggedIn, setLoggedIn] = useState(1);
  // Storing a dummy bearer token so that the jwt_decode package doesn't crash
  const [bearerToken, setBearerToken] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
  );
  const cookies = new Cookies();
  const [navigate, setNavigate] = useState(false);
  const [step, setStep] = useState(1);
  const [showSpinner, setShowSpinner] = useState(false);
  const [presentSpinner, setPresentSpinner] = useState(false);
  const [demo, setDemo] = useState(2);

  //

  useEffect(() => {
    if (
      navigate == true &&
      emailAddress.value == "admin@banabo.io" &&
      password.value == "admin"
    ) {
      window.open("https://application.banabo.io", "_self");
      cookies.set("loginValid", "true", { path: "/" });
    } else {
      if (demo > 2) {
        alert("Email or Password is incorrect");
      }
    }
  }, [demo]);

  //

  // Function to save the link info without refreshing the page
  const noRefresh = (event) => {
    event.preventDefault();
  };

  // 1. Function to get the bearer token that represents user details
  // Use Effect that is triggered when step == 2 (When the user gets to the confirmation page)

  useEffect(() => {
    if (loggedIn >= 2 && loggedIn <= 10) {
      setPresentSpinner(true);
    }
  }, [loggedIn, showSpinner]);

  //####//
  // 3 Different functions are called here
  // 1) Need to login the user, getting the bearer token that represents the user for future api calls and set that bearer as a local varaible
  // 2) Need to then fetch the site from engine and have a if/null clause. The site will be stored as a local varaible
  // 3) Need to get the login count from Auth0 and set that login count as a local varaible as well
  //###//
  useEffect(() => {
    if (loggedIn >= 2 && loggedIn <= 10) {
      async function getBearerToken() {
        // 2nd function
        function secondFunction(bearerTokenNew) {
          var myHeaders = new Headers();
          myHeaders.append("Authorization", "Bearer " + `${bearerTokenNew}`);

          var requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
          };

          // COLIN SNYDER YOU NEED TO SWITCH THIS result[2].host back to result[2].host after testing

          fetch("https://engine.banabo.io/api/site/", requestOptions)
            .then((response) => {
              response.json().then((data) => {
                if (data.length !== 0) {
                  cookies.set("theHost", data[0].host, { path: "/" });
                } else {
                  cookies.set("theHost", "noValue", { path: "/" });
                }
              });
            })

            .catch((error) => {
              console.error(error);
            });

          // Need to set site as a cookie
        }

        //
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
        //
        // For first API
        let myInit = {
          body: {
            username: emailAddress.value,
            password: password.value,
          },
        };

        // For second API
        let myInit2 = {
          body: {
            email: emailAddress.value,
          },
        };
        // Login the user
        await API.post("myapi", "/auth0loginuser", myInit, myHeaders)
          .then((response) => {
            // Grabs the source

            setTimeout(
              () => cookies.set("bearerToken", String(response), { path: "/" }),
              10
            );

            setTimeout(() => secondFunction(cookies.get("bearerToken")), 20);

            setTimeout(
              () =>
                API.post("myapi", "/auth0getlogincount", myInit2, myHeaders)
                  .then((response) => {
                    cookies.set("showCount", response.data[0].logins_count, {
                      path: "/",
                    });
                    setShowSpinner(!showSpinner);
                    setStep(2);
                  })
                  .catch((error) => console.log("error", error)),
              30
            );
          })

          .catch((error) => {
            alert("Email or Password is incorrect");
            setPresentSpinner(false);
          });
      }

      getBearerToken();
    }
  }, [loggedIn]);

  useEffect(() => {
    if (emailAddress.value.length >= 5 && password.value.length >= 5) {
      setNavigate(true);
    }
  }, [emailAddress.value, password.value]);

  const isDesktop = useMediaQuery("(min-width: 1200px)");

  return (
    <Wrapper>
      {isDesktop ? (
        <ContentWrapper>
          <StretchedImage src={sanfrancisco} />
          {step == 1 ? (
            <ParentSection>
              <Section1>
                <TopPortion>
                  <Title>Welcome to Banabo</Title>
                  <TextGroup>
                    <SubHead> Don’t have an account? </SubHead>
                    <StyledLink
                      to={{
                        pathname: "https://www.banabo.io/landing/",
                      }}
                      target="_blank"
                    >
                      Click here
                    </StyledLink>
                  </TextGroup>
                </TopPortion>
                <MiddlePortion>
                  <form onSubmit={noRefresh}>
                    <InputWrapper>
                      <Input
                        placeholder="Email Address"
                        value={emailAddress.value}
                        onChange={emailAddress.onChange}
                      />
                      <Input
                        type="password"
                        placeholder="Password"
                        value={password.value}
                        onChange={password.onChange}
                      />
                    </InputWrapper>
                  </form>
                </MiddlePortion>
                {navigate == true ? (
                  <HoriWrapper>
                    <StyledButton1 onClick={() => setDemo(demo + 1)}>
                      Login
                    </StyledButton1>
                    {presentSpinner == true ? <Loader /> : null}
                  </HoriWrapper>
                ) : (
                  <StyledButton2>Login</StyledButton2>
                )}
                <TextGroup>
                  <SubHead> Forgot your password? </SubHead>
                  <StyledLink to="/password-reset">Click here</StyledLink>
                </TextGroup>
              </Section1>
            </ParentSection>
          ) : (
            <Center>
              <SecondVerticalWrapper>
                <Title>You're logged In!</Title>
                <StyledLink2 to="/">
                  <StyledButton1 onClick={() => setLoggedIn(true)}>
                    Navigate To App
                  </StyledButton1>
                </StyledLink2>
              </SecondVerticalWrapper>
            </Center>
          )}
        </ContentWrapper>
      ) : (
        <TheWrapper>
          <TheContentWrapper>
            <Text>Please login on a desktop or laptop</Text>
          </TheContentWrapper>
        </TheWrapper>
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

const HoriWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;
  align-items: center;
  text-align: center;
`;

const Loader = styled.div`
  border: 14px solid #ffffff; /* Light grey */
  border-top: 14px solid #40a3ff; /* Blue */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Center = styled.div`
  padding-right: 300px;
`;

const TheWrapper = styled.div`
  background-color: #252531;
  min-height: 100vh;
  min-width: 100vh;
  background-size: cover;
  background-position: center;
  position: relative;
`;

const TheContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
`;

const Text = styled.div`
  font-family: "ProximaNovaRegular";
  color: #ffffff;
  font-size: 32px;
  position: fixed;
  width: 60%;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

const SecondVerticalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;
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
  font-family: "ProximaNovaSemiBold";
  color: #ffffff;
  font-size: 40px;
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
`;

const StyledLink = styled(Link)`
  font-family: "ProximaNovaRegular";
  color: #40a3ff;
  font-size: 16px;
`;

const StyledLink2 = styled(Link)`
  text-decoration: none;
`;

const SubHead = styled.div`
  font-family: "ProximaNovaRegular";
  color: #ffffff;
  font-size: 16px;
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
  font-size: 18px;
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
  font-family: "ProximaNovaSemiBold";
  font-size: 18px;
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
  font-family: "ProximaNovaSemiBold";
  font-size: 18px;
  cursor: pointer;

  transition: 0.75s cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    background: #7cc0ff;
  }
`;
