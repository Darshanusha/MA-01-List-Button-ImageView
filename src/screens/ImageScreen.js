import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ImageDetails from "./components/ImageDetails";

const ImageScreen = () => {
  const images = [
    {
      title: "Mountain",
      imageSrc: require("../../assets/mountain.jpg"),
    },
    {
      title: "House",
      imageSrc: require("../../assets/house.jpg"),
    },
    { title: "Water", imageSrc: require("../../assets/water.jpg") },
    { title: "Fire", imageSrc: require("../../assets/fire.jpg") },
  ];
  return (
    <View>
      <FlatList
        keyExtractor={(images) => images.title}
        data={images}
        renderItem={(element) => {
          return (
            <ImageDetails
              title={element.item.title}
              imageSrc={element.item.imageSrc}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
