import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const CounterScreen = () => {
  //const count = 0;
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Text>Current count : {counter}</Text>
      <Button
        title="Increase Counter"
        onPress={() => setCounter(counter + 1)}
      />
      <Button
        title="Descrease Counter"
        onPress={() => setCounter(counter - 1)}
      />
    </View>
  );
};

export default CounterScreen;
