import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1" },
    { name: "Friend #2" },
    { name: "Friend #3" },
    { name: "Friend #4" },
    { name: "Friend #5" },
    { name: "Friend #6" },
    { name: "Friend #7" },
    { name: "Friend #8" },
    { name: "Friend #9" },
    { name: "Friend #10" },
    { name: "Friend #11" },
  ];
  return (
    <FlatList
      //horizontal
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={(elment) => {
        return <Text style={styles.textStyle}> {elment.item.name}</Text>;
      }}
      scrollEnabled={true}
      //contentContainerStyle={{ flexGrow: 1 }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
