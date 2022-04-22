import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GrayTriangle from "../../Images2/graytriangle.svg";
import minus from "../../Images2/minus.svg";
import plus from "../../Images2/plus.svg";

export default function SelectCardTopLeft() {
  const [toggleActive, setToggleActive] = useState(false);
  const [changed, setChanged] = useState(false);
  const [position1symbol, setPosition1symbol] = useState("minus");
  const [position2symbol, setPosition2symbol] = useState("minus");
  const [position3symbol, setPosition3symbol] = useState("minus");
  const [position4symbol, setPosition4symbol] = useState("plus");
  const [position5symbol, setPosition5symbol] = useState("plus");
  const [position6symbol, setPosition6symbol] = useState("plus");

  const [position1, setPosition1] = useState([
    {
      StatType: "Visitors Currently on Site",
      StatData: "12",
    },
  ]);
  const [position2, setPosition2] = useState([
    {
      StatType: "New Visitors Today",
      StatData: "61",
    },
  ]);
  const [position3, setPosition3] = useState([
    {
      StatType: "Repeat Visitors Today",
      StatData: "500",
    },
  ]);
  const [position4, setPosition4] = useState([
    {
      StatType: "Total Visitors Today",
      StatData: "561",
    },
  ]);
  const [position5, setPosition5] = useState([
    {
      StatType: "Sessions Today",
      StatData: "828",
    },
  ]);
  const [position6, setPosition6] = useState([
    {
      StatType: "Bounce Rate Today",
      StatData: "24%",
    },
  ]);

  ////////////////////

  ///////////////////

  //////////////////

  const [jsonArraySelected1, setJsonArraySelected1] = useState([
    {
      StatType: "Visitors Currently on Site",
      StatData: "12",
    },
    {
      StatType: "New Visitors Today",
      StatData: "61",
    },
    {
      StatType: "Repeat Visitors Today",
      StatData: "500",
    },
  ]);
  const [jsonArrayNotSelected1, setJsonArrayNotSelected1] = useState([
    {
      StatType: "Total Visitors Today",
      StatData: "561",
    },
    {
      StatType: "Sessions Today",
      StatData: "828",
    },
    {
      StatType: "Bounce Rate Today",
      StatData: "24%",
    },
  ]);

  const [position1type, setPosition1type] = useState("");
  const [position2type, setPosition2type] = useState("");
  const [position3type, setPosition3type] = useState("");

  const [position1data, setPosition1data] = useState("");
  const [position2data, setPosition2data] = useState("");
  const [position3data, setPosition3data] = useState("");

  const [checker, setChecker] = useState("");

  useEffect(() => {
    // 1. Need to scan for objects that contain a plus sign
    // 2. Need to push those objects into an array
    // 3. Need to set that new array of objects to jsonArraySelected1

    const SetObjects = [];

    if (position1symbol == "minus") {
      SetObjects.push(position1);
    }
    if (position2symbol == "minus") {
      SetObjects.push(position2);
    }
    if (position3symbol == "minus") {
      SetObjects.push(position3);
    }
    if (position4symbol == "minus") {
      SetObjects.push(position4);
    }
    if (position5symbol == "minus") {
      SetObjects.push(position5);
    }
    if (position6symbol == "minus") {
      SetObjects.push(position6);
    }

    console.log("COLIN");
    console.log(SetObjects);
    console.log("LOLLZ");

    console.log(SetObjects[0]);
    console.log(SetObjects[0][0].StatType);
    console.log(SetObjects[0][0].StatData);

    setPosition1type(SetObjects[0][0].StatType);
    setPosition1data(SetObjects[0][0].StatData);
    setPosition2type(SetObjects[1][0].StatType);
    setPosition2data(SetObjects[1][0].StatData);
    console.log("moana11111");
    console.log(SetObjects.length);

    if (SetObjects.length > 2) {
      setPosition3type(SetObjects[2][0].StatType);
      setPosition3data(SetObjects[2][0].StatData);
    }

    console.log("moana2");
    console.log(checker);

    setJsonArraySelected1(SetObjects);
    console.log(jsonArraySelected1);
  }, [
    position1symbol,
    position2symbol,
    position3symbol,
    position4symbol,
    position5symbol,
    position6symbol,
  ]);

  // Need to have first array containing 3 options, max 3
  // Need to have seocond array containing 6 options, max 6
  // Need the ability to delete options from the first array
  // Need the ability to add options to the first array of there is less than 2 otpions currently within array

  ////////////////////////////////////////////////////////////

  // We need to have 2 arrays
  // Selected Stats
  // Non Selected Stats

  const jsonArrayAll = [
    {
      StatType: "Visitors Currently on Site",
      StatData: "12",
    },
    {
      StatType: "New Visitors Today",
      StatData: "61",
    },
    {
      StatType: "Repeat Visitors Today",
      StatData: "500",
    },
    {
      StatType: "Total Visitors Today",
      StatData: "561",
    },
    {
      StatType: "Sessions Today",
      StatData: "828",
    },
    {
      StatType: "Bounce Rate Today",
      StatData: "24%",
    },
  ];

  const jsonArraySelected = [
    {
      StatType: "Visitors Currently on Site",
      StatData: "12",
    },
    {
      StatType: "New Visitors Today",
      StatData: "61",
    },
    {
      StatType: "Repeat Visitors Today",
      StatData: "500",
    },
  ];

  const jsonArrayNotSelected = [];

  useEffect(() => {
    // if StatType in jsonArraySelected is the same as a StatType in jsonArrayAll then turn to true

    var props = ["StatType", "StatData"];

    var result = jsonArrayAll
      .filter(function (o1) {
        // filter out (!) items in result2
        return !jsonArraySelected.some(function (o2) {
          return o1.StatType === o2.StatType; // assumes unique id
        });
      })
      .map(function (o) {
        // use reduce to make objects with only the required properties
        // and map to apply this to the filtered array as a whole
        return props.reduce(function (newo, StatData) {
          newo[StatData] = o[StatData];
          return newo;
        }, {});
      });

    console.log(result);
    console.log(result[0].StatType);
    console.log(result[1].StatType);
    console.log(result[2].StatType);

    jsonArrayNotSelected.push(result[0]);
    jsonArrayNotSelected.push(result[1]);
    jsonArrayNotSelected.push(result[2]);

    setJsonArrayNotSelected1(jsonArrayNotSelected);

    setChanged(true);
    // Triggers Setting 1
    // if stattype1 == true, then show the minus sign
    console.log("HEREEEE");
  }, []);

  useEffect(() => {
    console.log(jsonArraySelected);
  }, [changed]);

  ////////

  //////// ACTUAL CODE ///////

  ////////

  return (
    <SelectCard toggleActive={toggleActive}>
      <VStack toggleActive={toggleActive}>
        <HStack>
          {toggleActive == false ? (
            <GrayText2>Here’s some quick stats</GrayText2>
          ) : (
            <GrayText2>Choose 3 Stats</GrayText2>
          )}
          <BlueCircle onClick={() => setToggleActive(!toggleActive)}>
            <InsideWrapperTop>
              <IMG2 src={GrayTriangle} toggleActive={toggleActive} />
            </InsideWrapperTop>
          </BlueCircle>
        </HStack>
        <Line1 />
        {toggleActive == false ? (
          <VStack>
            <div>
              <HStack22>
                <GrayChoices>{position1type}</GrayChoices>
                <BlueChoices>{position1data}</BlueChoices>
              </HStack22>
              <LineWrapper>
                <Line />
              </LineWrapper>
              <HStack22>
                <GrayChoices>{position2type}</GrayChoices>
                <BlueChoices>{position2data}</BlueChoices>
              </HStack22>
              <LineWrapper>
                <Line />
              </LineWrapper>
              <HStack22>
                <GrayChoices>{position3type}</GrayChoices>
                <BlueChoices>{position3data}</BlueChoices>
              </HStack22>
              <LineWrapper>
                <Line />
              </LineWrapper>
            </div>
          </VStack>
        ) : (
          <VStack1>
            {position1.map((position1) => (
              <HStack2>
                <GrayChoices1 position1symbol={position1symbol}>
                  {position1.StatType}
                </GrayChoices1>
                {position1symbol == "plus" ? (
                  <MPIMG
                    src={plus}
                    onClick={() => setPosition1symbol("minus")}
                  />
                ) : (
                  <MPIMG
                    src={minus}
                    onClick={() => setPosition1symbol("plus")}
                  />
                )}
              </HStack2>
            ))}
            {position2.map((position2) => (
              <HStack2>
                <GrayChoices2 position2symbol={position2symbol}>
                  {position2.StatType}
                </GrayChoices2>
                {position2symbol == "plus" ? (
                  <MPIMG
                    src={plus}
                    onClick={() => setPosition2symbol("minus")}
                  />
                ) : (
                  <MPIMG
                    src={minus}
                    onClick={() => setPosition2symbol("plus")}
                  />
                )}
              </HStack2>
            ))}
            {position3.map((position3) => (
              <HStack2>
                <GrayChoices3 position3symbol={position3symbol}>
                  {position3.StatType}
                </GrayChoices3>
                {position3symbol == "plus" ? (
                  <MPIMG
                    src={plus}
                    onClick={() => setPosition3symbol("minus")}
                  />
                ) : (
                  <MPIMG
                    src={minus}
                    onClick={() => setPosition3symbol("plus")}
                  />
                )}
              </HStack2>
            ))}
            {position4.map((position4) => (
              <HStack2>
                <GrayChoices4 position4symbol={position4symbol}>
                  {position4.StatType}
                </GrayChoices4>
                {position4symbol == "plus" ? (
                  <MPIMG
                    src={plus}
                    onClick={() => setPosition4symbol("minus")}
                  />
                ) : (
                  <MPIMG
                    src={minus}
                    onClick={() => setPosition4symbol("plus")}
                  />
                )}
              </HStack2>
            ))}
            {position5.map((position5) => (
              <HStack2>
                <GrayChoices5 position5symbol={position5symbol}>
                  {position5.StatType}
                </GrayChoices5>
                {position5symbol == "plus" ? (
                  <MPIMG
                    src={plus}
                    onClick={() => setPosition5symbol("minus")}
                  />
                ) : (
                  <MPIMG
                    src={minus}
                    onClick={() => setPosition5symbol("plus")}
                  />
                )}
              </HStack2>
            ))}
            {position6.map((position6) => (
              <HStack2>
                <GrayChoices6 position6symbol={position6symbol}>
                  {position6.StatType}
                </GrayChoices6>
                {position6symbol == "plus" ? (
                  <MPIMG
                    src={plus}
                    onClick={() => setPosition6symbol("minus")}
                  />
                ) : (
                  <MPIMG
                    src={minus}
                    onClick={() => setPosition6symbol("plus")}
                  />
                )}
              </HStack2>
            ))}
          </VStack1>
        )}
      </VStack>
    </SelectCard>
  );
}

const GrayChoices1 = styled.div`
  font-size: 13px;
  font-family: ${(props) =>
    props.position1symbol == "minus"
      ? "ProximaNovaSemibold"
      : "ProximaNovaRegular"};
  color: #9a99a9;
`;

const GrayChoices2 = styled.div`
  font-size: 13px;
  font-family: ${(props) =>
    props.position2symbol == "minus"
      ? "ProximaNovaSemibold"
      : "ProximaNovaRegular"};
  color: #9a99a9;
`;

const GrayChoices3 = styled.div`
  font-size: 13px;
  font-family: ${(props) =>
    props.position3symbol == "minus"
      ? "ProximaNovaSemibold"
      : "ProximaNovaRegular"};
  color: #9a99a9;
`;

const GrayChoices4 = styled.div`
  font-size: 13px;
  font-family: ${(props) =>
    props.position4symbol == "minus"
      ? "ProximaNovaSemibold"
      : "ProximaNovaRegular"};
  color: #9a99a9;
`;

const GrayChoices5 = styled.div`
  font-size: 13px;
  font-family: ${(props) =>
    props.position5symbol == "minus"
      ? "ProximaNovaSemibold"
      : "ProximaNovaRegular"};
  color: #9a99a9;
`;

const GrayChoices6 = styled.div`
  font-size: 13px;
  font-family: ${(props) =>
    props.position6symbol == "minus"
      ? "ProximaNovaSemibold"
      : "ProximaNovaRegular"};
  color: #9a99a9;
`;

const LineWrapper = styled.div`
  padding-top: 9px;
  padding-bottom: 4px;
`;

const VStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-bottom: ${(props) => (props.toggleActive ? "0px" : "0px")};
`;

const VStack1 = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: ${(props) => (props.toggleActive ? "0px" : "0px")};
`;

const MPIMG = styled.img`
  width: 7.5%;
  height: 7.5%;
  cursor: pointer;
`;

const SelectCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: ${(props) => (props.toggleActive ? "280" : "182")}px;
  background: #ffffff;
  /* Low */
  box-shadow: 2px 5px 20px #f1f1f1;
  border-radius: 10px;
`;

const GrayText2 = styled.div`
  width: 190px;
  height: 19px;
  font-family: "ProximaNovaSemibold";
  font-size: 16px;
  color: #666678;
`;

const HStack = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

const HStack22 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  padding-top: 8px;
`;

const HStack2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  padding-top: 15.5px;
`;

// Here

const BlueCircle = styled.div`
  border-radius: 20px;
  width: 30px;
  height: 30px;
  background: #e4f2ff;
  cursor: pointer;
`;

const InsideWrapperTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-top: 10.5px;
`;

const Line = styled.div`
  width: 240px;
  height: 2px;
  background: #e4f2ff;
`;

const Line1 = styled.div`
  width: 240px;
  height: 2px;
  background: #e4f2ff;
`;

const GrayChoices = styled.div`
  font-size: 13px;
  font-family: "ProximaNovaSemibold";
  color: #9a99a9;
`;

const BlueChoices = styled.div`
  font-size: 13px;
  font-family: "ProximaNovaSemibold";
  color: #24a3ff;
`;

const IMG2 = styled.img`
  width: 18px;
  height: 9px;
  transition-property: transform;
  transition-duration: 0.1s;
  transform: ${(props) =>
    props.toggleActive ? "rotate(180deg)" : "rotate(0deg)"};
`;
