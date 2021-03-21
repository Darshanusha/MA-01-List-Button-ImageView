import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Hello There</Text>
      <Button
        onPress={() => props.navigation.navigate("components")}
        title="Click me to go to Components Screen"
      />
      <TouchableOpacity onPress={() => props.navigation.navigate("ListScreen")}>
        <Text>Click to open ListScreen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("ImageScreen")}
      >
        <Text>Click to open Image View</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => props.navigation.navigate("CounterScreen")}
      >
        <Text>Counter Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => props.navigation.navigate("ColoursScreen")}
      >
        <Text>Colours Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => props.navigation.navigate("IntencityWithReducer")}
      >
        <Text>Intencity Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
