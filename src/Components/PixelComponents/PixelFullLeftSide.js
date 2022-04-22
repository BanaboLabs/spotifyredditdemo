//######//
// In Charge of the code snippet and additonal documentation //
//######//

import React from "react";
import styled from "styled-components";
import one from "../../Images/1.svg";
import script from "../../Images/script.svg";
import mark from "../../Images/mark.svg";

export default function PixelFullLeftSide() {
  var code1 = '<script src="https:"';
  var code2 = '//engine.banabo.io/embeddable/index.js"></script>';

  return (
    <Wrapper>
      <VerticalWrapper>
        <BackgroundRectangle>
          <InsideWrapper>
            <VStack>
              <HorizontalWrapper>
                <img src={one} />
                <SmallTitle>Add this code to your website header</SmallTitle>
              </HorizontalWrapper>
              <img src={script} />
              <StyledButton
                onClick={() => navigator.clipboard.writeText(code1 + code2)}
              >
                Copy
              </StyledButton>
            </VStack>
          </InsideWrapper>
        </BackgroundRectangle>
        <BackgroundRectangle>
          <InsideWrapper>
            <VStack>
              <HorizontalWrapper>
                <img src={mark} />
                <SmallTitle>Additional Setup Documentation</SmallTitle>
              </HorizontalWrapper>
              <HorizontalWrapper2>
                <GrayRectangle>
                  {" "}
                  <Text>
                    <span>
                      <OutsideLink
                        onClick={() =>
                          window.open("https://www.banabo.io/shopify")
                        }
                      >
                        Shopify
                      </OutsideLink>
                    </span>
                  </Text>
                </GrayRectangle>
                <GrayRectangle>
                  {" "}
                  <Text>
                    <span>
                      <OutsideLink
                        onClick={() =>
                          window.open("https://www.banabo.io/webflow")
                        }
                      >
                        Webflow
                      </OutsideLink>
                    </span>
                  </Text>
                </GrayRectangle>
              </HorizontalWrapper2>
              <HorizontalWrapper2>
                <GrayRectangle>
                  <Text>
                    <span>
                      <OutsideLink
                        onClick={() =>
                          window.open("https://www.banabo.io/react")
                        }
                      >
                        React
                      </OutsideLink>
                    </span>
                  </Text>
                </GrayRectangle>
                <GrayRectangle>
                  <Text>
                    <span>
                      <OutsideLink
                        onClick={() =>
                          window.open("https://www.banabo.io/squarespace")
                        }
                      >
                        Squarespace
                      </OutsideLink>
                    </span>
                  </Text>
                </GrayRectangle>
              </HorizontalWrapper2>
            </VStack>
          </InsideWrapper>
        </BackgroundRectangle>
      </VerticalWrapper>
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

const BackgroundRectangle = styled.div`
  background: #ffffff;
  box-shadow: 2px 5px 40px 0 rgb(0 0 0 / 8%);
  border-radius: 10px;
  width: 465px;
  height: 227px;
`;

const VerticalWrapper = styled.div`
  display: grid;
  gap: 26px;
`;

const HorizontalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 13px;
`;

const HorizontalWrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

const VStack = styled.div`
  display: grid;
  gap: 25px;
`;

const SmallTitle = styled.div`
  font-size: 20px;
  line-height: 29px;
  color: #252531;
  font-family: "ProximaNovaBold";
`;

const InsideWrapper = styled.div`
  padding-left: 25px;
  padding-top: 20px;
`;

const StyledButton = styled.button`
  background: #ffffff;
  color: #252531;
  left: 0px;
  top: 382px;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: "ProximaNovaSemiBold";
  font-size: 15px;
  cursor: pointer;
  width: 89px;
  height: 35px;
`;

const GrayRectangle = styled.div`
  height: 37px;
  background: #f7f7f7;
  border-radius: 10px;
  font-size: 16px;
  line-height: 19px;
  color: #1d1d26;
  font-family: "ProximaNovaRegular";
`;

const Text = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 8px;
  text-align: center;
`;

const OutsideLink = styled.td`
  cursor: pointer;
  font-family: "ProximaNovaRegular";
`;
