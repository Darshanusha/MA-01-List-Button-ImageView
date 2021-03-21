import React, { useState } from "react";
import { View, Text } from "react-native";
import IntencityController from "./IntencityControl";

const Intencity = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  console.log(red, blue, green);

  const changeColour = (colour, change) => {
    switch (colour) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
    }
  };

  return (
    <View>
      <IntencityController
        title="red"
        increase={() => changeColour("red", +10)}
        decrese={() => changeColour("red", -10)}
      />
      <IntencityController
        title="green"
        increase={() => changeColour("green", +10)}
        decrese={() => changeColour("green", -10)}
      />
      <IntencityController
        title="blue"
        increase={() => changeColour("blue", +10)}
        decrese={() => changeColour("blue", -10)}
      />

      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      ></View>
    </View>
  );
};

export default Intencity;
