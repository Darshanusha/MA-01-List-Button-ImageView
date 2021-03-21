import React, { useReducer } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return { ...state, text: action.payload };
    default:
      return { ...state };
  }
};

const PrintName = () => {
  const [state, dispatch] = useReducer(reducer, { text: "" });
  return (
    <View>
      <TextInput
        style={styles.textInput}
        value={state.text}
        onChangeText={(newVal) => dispatch({ type: "CHANGE", payload: newVal })}
        autoCapitalize={false}
        autoCorrect={false}
      />
      <Text>{state.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default PrintName;
