/**********************
 * Component that displays all the links a business had saved *
 **********************/

import Cookies from "universal-cookie";
import moment from "moment";

import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function LinkSave(props) {
  const [render1, setRender1] = useState(true);
  const [linkData, setLinkData] = useState([]);
  const [isData, setIsData] = useState(true);
  const cookies = new Cookies();

  useEffect(() => {
    var nullCheck = cookies.get("theHost");
    if (nullCheck === "noValue") {
      setIsData(false);
    }
  }, []);

  useEffect(() => {
    var nullCheck = cookies.get("theHost");
    if (nullCheck !== "noValue") {
      async function GetCurrentLinks() {
        var bearerToken = cookies.get("bearerToken");
        var param = "Bearer " + `${bearerToken}`;
        var myHeaders = new Headers();
        myHeaders.append("Authorization", param);

        var requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        };

        await fetch("https://engine.banabo.io/api/link/", requestOptions).then(
          (response) =>
            response.json().then((response) => {
              if (response.length === 0) {
                setIsData(false);
              } else {
                setIsData(true);
                var newArray = [];
                for (const response1 of response) {
                  var date = response1.createDate;
                  var strFirstTen = date.substring(0, 10);
                  var object = {
                    linkDescription: response1.desc,
                    outputLink: response1.url + "?banabo_link=" + response1.id,
                    linkName: response1.name,
                    linkDate: strFirstTen,
                  };
                  newArray.push(object);
                }
                var newerArray = newArray.sort((a, b) => {
                  return new Date(b.linkDate) - new Date(a.linkDate);
                });

                setLinkData(newerArray);
              }
            })
        );
      }

      GetCurrentLinks();
    }
  }, [props.toChild]);

  // Will need to show two different component options
  // based on if api call response == nil or != nil
  // if nil then render 2, if not nil render 1
  // Will need to implement a side effect with useEffect
  // that makes api call on intial render
  if (render1 == true) {
    return (
      <Wrapper>
        <ContentWrapper isData={isData}>
          {isData ? (
            <BackgroundRectangle>
              <InsideRectangleWrapper>
                <Title>Saved Links</Title>
                <LinkWrapper>
                  {linkData.map((item) => (
                    <LinkContentWrapper>
                      <HeadAndSubheadWrapper>
                        <NameAndDateWrapper>
                          <LinkName>{item.linkName}</LinkName>
                          <TheDate>{item.linkDate}</TheDate>
                        </NameAndDateWrapper>
                      </HeadAndSubheadWrapper>
                      <Rectangle>
                        <OutputLink>{item.outputLink}</OutputLink>
                        <StyledButton
                          onClick={() =>
                            navigator.clipboard.writeText(item.outputLink)
                          }
                        >
                          Copy
                        </StyledButton>
                      </Rectangle>
                    </LinkContentWrapper>
                  ))}
                </LinkWrapper>
                <Space />
              </InsideRectangleWrapper>
            </BackgroundRectangle>
          ) : (
            <div>
              <SpacerForNilResponse />
              <BackgroundRectangle>
                <InsideRectangleWrapper2>
                  <Title>Saved Links</Title>
                  <LinkWrapper>
                    <NoLinksSavedText>No Links Saved</NoLinksSavedText>
                    <LinkWrapper>
                      <LinkContentWrapper>
                        <HeadAndSubheadWrapper>
                          <NameAndDateWrapper>
                            <LinkName>Example</LinkName>
                            <TheDate>{moment().format("l")}</TheDate>
                          </NameAndDateWrapper>
                        </HeadAndSubheadWrapper>
                        <Rectangle>
                          <OutputLink2>example.com?banabo_link=123</OutputLink2>
                          <StyledButton
                            onClick={() =>
                              navigator.clipboard.writeText(
                                "example.com?banabo_link=123"
                              )
                            }
                          >
                            Copy
                          </StyledButton>
                        </Rectangle>
                      </LinkContentWrapper>
                    </LinkWrapper>
                  </LinkWrapper>
                </InsideRectangleWrapper2>
              </BackgroundRectangle>
            </div>
          )}
        </ContentWrapper>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  position: relative;
`;

const Space = styled.div`
  padding-top: 60px;
`;

const ContentWrapper = styled.div`
  padding-top: 10%;
  display: flex;
  flex-direction: column;
`;

// If data
const BackgroundRectangle = styled.div`
  min-height: 100vh;
  max-height: 100vh;
  width: 120%;
  background: #ffffff;
  box-shadow: 2px 5px 40px 0 rgb(0 0 0 / 8%);
  border-radius: 10px;
  overflow-y: scroll;
`;

//??// FOR NO DATA RESPONSE START //??//

// If no data
const BackgroundRectangle2 = styled.div`
  min-height: 100vh;
  max-height: 100vh;
  width: 300%;
  background: #ffffff;
  box-shadow: 2px 5px 40px 0 rgb(0 0 0 / 8%);
  border-radius: 10px;
  overflow-y: scroll;
`;

// If no data
const SpacerForNilResponse = styled.div``;

// If no data
const NoLinksSavedText = styled.div`
  font-size: 18px;
  line-height: 22px;
  color: #8f8f8f;
  font-family: "ProximaNovaSemibold";
`;

const InsideRectangleWrapper2 = styled.div`
  box-sizing: border-box;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 60px;
`;

//??// FOR NO DATA RESPONSE END //??//

const InsideRectangleWrapper = styled.div`
  box-sizing: border-box;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-left: 60px;
`;

const Title = styled.div`
  margin-top: 40px;
  font-size: 24px;
  line-height: 29px;
  font-family: "ProximaNovaSemibold";
`;

const LinkWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const LinkContentWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const HeadAndSubheadWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const LinkName = styled.div`
  font-family: "ProximaNovaSemibold";
  font-size: 18px;
  width: 230px;
  line-height: 22px;
  color: #252531;
`;

const TheDate = styled.div`
  font-family: "ProximaNovaBold";
  font-size: 14px;
  line-height: 17px;
  color: rgba(37, 37, 49, 0.7);
`;

const OutputLink = styled.div`
  font-size: 12px;
  line-height: 19px;
  width: 500px;
  color: #484848;
  font-family: "ProximaNovaSemiBold";
`;

const OutputLink2 = styled.div`
  font-size: 13px;
  line-height: 19px;
  width: 500px;
  color: #484848;
  font-family: "ProximaNovaSemiBold";
`;

const StyledButton = styled.button`
  font-family: "ProximaNovaSemiBold";
  font-size: 15px;
  background: #ffffff;
  color: #252531;
  box-sizing: border-box;
  border-radius: 5px;
  cursor: pointer;
  width: 75px;
  height: 28px;
`;

const Rectangle = styled.div`
  background: #ffffff;
  box-shadow: 2px 5px 40px 0 rgb(0 0 0 / 8%);
  border-radius: 10px;
  height: 48px;
  width: 402px;
  display: flex;
  flex-direction: row;
  gap: 22px;
  padding-right: 10px;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
`;

const NameAndDateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 100px;

  align-items: center;
`;
