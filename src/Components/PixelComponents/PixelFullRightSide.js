//######//
// In Charge of the website info that the user inputs //
//######//

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useInput from "../CustomHooks/useInput";
import two from "../../Images/2.svg";
import Cookies from "universal-cookie";

export default function PixelFullRightSide() {
  const signupUrl = useInput("");
  const purchaseUrl = useInput("");
  const domainUrl = useInput("");
  const [darkDomain, setDarkDomain] = useState(false);
  const [darkSignup, setDarkSignup] = useState(false);
  const [darkPurchase, setDarkPurchase] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ready, setReady] = useState(false);
  const cookies = new Cookies();
  const [domainNamePlaceholder, setDomainNamePlaceholder] =
    useState("Ex: www.banabo.io");
  const [signUpPlaceholder, setSignUpPlaceholder] = useState(
    "Ex: https://example.com/confirmation"
  );
  const [purchasePlaceholder, setPurchasePlaceholder] = useState(
    "Ex: https://example.com/checkout"
  );
  const host = cookies.get("theHost");
  const [isData, setIsData] = useState(true);

  const [signupApiCall, setSignupApiCall] = useState("");
  const [purchaseApiCall, setPurchaseApiCall] = useState("");
  const [signupEndpoint, setSignupEndpoint] = useState("");
  const [purchaseEndpoint, setPurchaseEndpoint] = useState("");

  // Prevents the application from refreshing after button click
  const noRefresh = (event) => {
    event.preventDefault();
  };

  // If there's no host stored as a cookie, then set the UI to show no Data
  useEffect(() => {
    var nullCheck = cookies.get("theHost");
    if (nullCheck === "undefined") {
      setIsData(false);
    }
  }, []);

  // If there are new inputs, then allow the user to submit them
  useEffect(() => {
    if (signupUrl.value.length >= 1 || purchaseUrl.value.length >= 1) {
      setReady(true);
    }
    if (domainUrl.value.length >= 1) {
      setReady(true);
    }
    if (
      signupUrl.value.length == 0 &&
      purchaseUrl.value.length == 0 &&
      domainUrl.value.length == 0
    ) {
      setReady(false);
    }
  }, [signupUrl, purchaseUrl, domainUrl]);

  // If there is a host stored as a cookie, then populate it within the UI
  useEffect(() => {
    var nullCheck = cookies.get("theHost");
    if (nullCheck !== "noValue") {
      setDomainNamePlaceholder(nullCheck);
      setDarkDomain(true);
    }
  }, []);

  // In Charge of making an api call for domain name, signup page, and purchase page
  useEffect(() => {
    var nullCheck = cookies.get("theHost");
    if (nullCheck !== "noValue") {
      async function GetURLS() {
        var bearerToken = cookies.get("bearerToken");
        var nullCheck = cookies.get("theHost");
        if (nullCheck.length >= 1) {
          var myHeaders = new Headers();
          myHeaders.append("Authorization", `Bearer ${bearerToken}`);
          myHeaders.append("Content-Type", "application/json");

          var requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
          };

          let response = await fetch(
            `https://engine.banabo.io/api/site?host=${bearerToken}`,
            requestOptions
          );

          var jsonResponse = await response.json();

          var signupCheck = jsonResponse[0].signupPage;
          var purchaseCheck = jsonResponse[0].purchasePage;

          if (signupCheck != "/undefined") {
            setDarkSignup(true);

            setSignupApiCall("https://" + host + jsonResponse[0].signupPage);
            setSignupEndpoint(jsonResponse[0].signupPage);
            setSignUpPlaceholder(
              "https://" + host + jsonResponse[0].signupPage
            );
          } else {
          }
          if (purchaseCheck != "/undefined") {
            setDarkPurchase(true);
            setPurchaseEndpoint(jsonResponse[0].purchasePage);
            setPurchasePlaceholder(
              "https://" + host + jsonResponse[0].purchasePage
            );
          } else {
          }
        }
      }
      GetURLS();
    }
  }, []);

  // The api call logic to whether create or update a new domain, signup page, and purchase page
  useEffect(() => {
    if (submitted == true) {
      var bearerToken = cookies.get("bearerToken");

      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${bearerToken}`);
      myHeaders.append("Content-Type", "application/json");

      if (signupUrl.value.length >= 1 || purchaseUrl.value.length >= 1) {
        var updatedSignupUrl = signupUrl.value.split("/")[3];
        var updatedPurchaseUrl = purchaseUrl.value.split("/")[3];

        if (domainUrl.value >= 1) {
          var raw = JSON.stringify({
            host: domainUrl.value,
            signupPage: "/" + updatedSignupUrl,
            purchasePage: "/" + updatedPurchaseUrl,
          });
        } else {
          // Creating series of if statements based on the api repsponse
          // Testing this logic, November 15th
          if (signupApiCall.length >= 1 && purchaseApiCall.length < 1) {
            var raw = JSON.stringify({
              host: host,
              signupPage: signupEndpoint,
              purchasePage: "/" + updatedPurchaseUrl,
            });
          } else if (purchaseApiCall.length >= 1 && signupApiCall.length < 1) {
            var raw = JSON.stringify({
              host: host,
              signupPage: "/" + updatedSignupUrl,
              purchasePage: purchaseEndpoint,
            });
          } else {
            var raw = JSON.stringify({
              host: domainUrl.value,
              signupPage: "/" + updatedSignupUrl,
              purchasePage: "/" + updatedPurchaseUrl,
            });
          }
        }
      } else {
        var updatedSignupUrl = signupApiCall.split("/")[3];
        var updatedPurchaseUrl = purchaseApiCall.split("/")[3];
        if (domainUrl.value <= 1) {
          var raw = JSON.stringify({
            host: domainUrl.value,
            signupPage: "/" + updatedSignupUrl,
            purchasePage: "/" + updatedPurchaseUrl,
          });
        } else {
          var raw = JSON.stringify({
            host: domainUrl.value,
            signupPage: "/" + updatedSignupUrl,
            purchasePage: "/" + updatedPurchaseUrl,
          });
        }
      }

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      if (domainUrl.value.length >= 1) {
        fetch("https://engine.banabo.io/api/site/create", requestOptions)
          .then((response) => response.text())
          .then((result) => {
            cookies.set("theHost", domainUrl.value, { path: "/" });
          })
          .catch((error) => console.log("error", error));
      } else {
        fetch("https://engine.banabo.io/api/site/update", requestOptions)
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      }
    }
  }, [submitted]);

  return (
    <Wrapper>
      <ContentWrapper>
        <BackgroundRectangle2>
          <form onSubmit={noRefresh}>
            <SectionWrapper>
              <TextfieldWrapper>
                <HorizontalWrapper>
                  <img src={two} />
                  <SmallTitle>Website Info</SmallTitle>
                </HorizontalWrapper>
                <SubHead2>
                  Please enter your root domain name at a minimum.
                  <br /> You can also add specific page urls to track
                  conversions
                </SubHead2>
                <TextfieldContentWrapper>
                  <SmallText>Domain Name</SmallText>
                  <RectangleTextBox>
                    {darkDomain ? (
                      <DefaultText>
                        <DarkInput
                          placeholder={domainNamePlaceholder}
                          value={domainUrl.value}
                          onChange={domainUrl.onChange}
                        />
                      </DefaultText>
                    ) : (
                      <DefaultText>
                        <Input
                          placeholder={domainNamePlaceholder}
                          value={domainUrl.value}
                          onChange={domainUrl.onChange}
                        />
                      </DefaultText>
                    )}
                  </RectangleTextBox>
                </TextfieldContentWrapper>
                <TextfieldContentWrapper>
                  <SpacingWrapper />
                  <SmallText>Sign Up Page Url</SmallText>
                  <RectangleTextBox>
                    {darkSignup ? (
                      <DefaultText>
                        <DarkInput
                          placeholder={signUpPlaceholder}
                          value={signupUrl.value}
                          onChange={signupUrl.onChange}
                        />
                      </DefaultText>
                    ) : (
                      <DefaultText>
                        <Input
                          placeholder={signUpPlaceholder}
                          value={signupUrl.value}
                          onChange={signupUrl.onChange}
                        />
                      </DefaultText>
                    )}
                  </RectangleTextBox>
                </TextfieldContentWrapper>
                <TextfieldContentWrapper>
                  <SmallText>Purchase Page Url</SmallText>
                  <RectangleTextBox>
                    {darkPurchase ? (
                      <DefaultText>
                        <DarkInput
                          placeholder={purchasePlaceholder}
                          value={purchaseUrl.value}
                          onChange={purchaseUrl.onChange}
                        />
                      </DefaultText>
                    ) : (
                      <DefaultText>
                        <Input
                          placeholder={purchasePlaceholder}
                          value={purchaseUrl.value}
                          onChange={purchaseUrl.onChange}
                        />
                      </DefaultText>
                    )}
                  </RectangleTextBox>
                </TextfieldContentWrapper>
              </TextfieldWrapper>
              {submitted ? (
                <NewButton ready={ready}>Success</NewButton>
              ) : (
                <NewButton
                  ready={ready}
                  type="submit"
                  onClick={() => setSubmitted(true)}
                >
                  Save
                </NewButton>
              )}
            </SectionWrapper>
          </form>
        </BackgroundRectangle2>

        <LargeSpacer />
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-size: cover;
  background-position: center;
  position: relative;
  background-color: transparent;
  max-width: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 100px;
`;

const HorizontalWrapper = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: row;
  align-items: center;
`;

const SmallTitle = styled.div`
  font-size: 20px;
  line-height: 29px;
  color: #252531;
  font-family: "ProximaNovaBold";
`;

const SubHead2 = styled.div`
  color: rgba(37, 37, 49, 0.7);
  font-family: "ProximaNovaRegular";
  line-height: 20px;
`;

const LargeSpacer = styled.div`
  padding-bottom: 52px;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const TextfieldWrapper = styled.div`
  box-sizing: border-box;
  margin: auto;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TextfieldContentWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 0px;
  padding-top: 5px;
`;

const RectangleTextBox = styled.div`
  position: relative;
  background: #f7f7f7;
  border-radius: 10px;
  height: ${(props) => (props.large ? "120px" : "50px")};
  width: 400px;
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

const DarkInput = styled.input`
  border: none;
  width: 300px;
  font-size: 16px;
  line-height: 19px;
  font-family: "ProximaNovaRegular";
  background-color: transparent;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #1d1d26;
  }
  :-ms-input-placeholder {
    color: #1d1d26;
  }
  :focus {
    outline: none;
  }
`;

const DefaultText = styled.div`
  font-size: 16px;
  line-height: 19px;
  padding-top: 14px;
  padding-left: 14px;
  font-family: "ProximaNovaRegular";
`;

const SmallText = styled.div`
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  font-family: "ProximaNovaBold";
`;

const BackgroundRectangle2 = styled.div`
  background: #ffffff;
  box-shadow: 2px 5px 40px 0 rgb(0 0 0 / 8%);
  border-radius: 10px;
  width: 465px;
  height: 480px;
`;

const SpacingWrapper = styled.div``;

const NewButton = styled.button`
  background: ${(props) => (props.ready ? "#40A3FF" : "#dcette7")};
  border-radius: 5px;
  color: #ffffff;
  font-family: "ProximaNovaSemiBold";
  font-size: 19px;
  cursor: pointer;
  width: 400px;
  height: 48px;
  border: none;
  margin: auto;
`;
