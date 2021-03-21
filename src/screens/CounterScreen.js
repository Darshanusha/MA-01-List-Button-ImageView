import React, { useReducer } from "react";
import { View, Text, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + action.payload };
    case "DECREMENT":
      return { ...state, counter: state.counter - action.payload };
    default:
      return { ...state };
  }
};

const CounterScreen = () => {
  //const count = 0;
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  return (
    <View>
      <Text>Current count : {state.counter}</Text>
      <Button
        title="Increase Counter"
        onPress={() => dispatch({ type: "INCREMENT", payload: 1 })}
      />
      <Button
        title="Descrease Counter"
        onPress={() => dispatch({ type: "DECREMENT", payload: 1 })}
      />
    </View>
  );
};

export default CounterScreen;
