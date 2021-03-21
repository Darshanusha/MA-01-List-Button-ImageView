import React, { useReducer } from "react";
import { View, Text } from "react-native";
import IntencityController from "./IntencityControl";

const reducer = (state, action) => {
  switch (action.colour) {
    case "red":
      if (state.red + action.change > 255 || state.red + action.change < 0) {
        return { ...state };
      }
      return { ...state, red: state.red + action.change };
    case "green":
      if (
        state.green + action.change > 255 ||
        state.green + action.change < 0
      ) {
        return { ...state };
      }
      return { ...state, green: state.green + action.change };
    case "blue":
      if (state.blue + action.change > 255 || state.blue + action.change < 0) {
        return { ...state };
      }
      return { ...state, blue: state.blue + action.change };
  }
};

const IntencityWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  return (
    <View>
      <IntencityController
        title="red"
        increase={() => dispatch({ colour: "red", change: +10 })}
        decrese={() => dispatch({ colour: "red", change: -10 })}
      />
      <IntencityController
        title="green"
        increase={() => dispatch({ colour: "green", change: +10 })}
        decrese={() => dispatch({ colour: "green", change: -10 })}
      />
      <IntencityController
        title="blue"
        increase={() => dispatch({ colour: "blue", change: +10 })}
        decrese={() => dispatch({ colour: "blue", change: -10 })}
      />

      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: `rgb(${state.red},${state.green},${state.blue})`,
        }}
      ></View>
    </View>
  );
};

export default IntencityWithReducer;
