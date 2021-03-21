import React from "react";
import { View, Text, Button } from "react-native";

const IntencityController = (props) => {
  return (
    <View>
      <Text> {props.title} </Text>
      <Button
        style={{ width: 200, height: 50 }}
        title="Increase Intencity"
        color={props.title}
        onPress={() => props.increase()}
      />
      <Button
        style={{ width: 200, height: 50 }}
        title="Decrease Intencity"
        color={props.title}
        onPress={() => props.decrese()}
      />
    </View>
  );
};

export default IntencityController;
