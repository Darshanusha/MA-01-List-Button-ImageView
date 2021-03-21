import React, { useState } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

const ColoursScreen = () => {
  const randomColour = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `rgb(${red},${green},${blue})`;
  };

  const [colour, setColour] = useState([]);
  console.log(colour);

  return (
    <View>
      <Button
        title="Add Colour"
        onPress={() => setColour([...colour, randomColour()])}
      />

      <FlatList
        keyExtractor={element.index}
        data={colour}
        renderItem={(element) => {
          console.log("Element: " + element.index);
          return (
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: element.item,
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default ColoursScreen;
