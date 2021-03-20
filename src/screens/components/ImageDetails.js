import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetails = (props) => {
  return (
    <View>
      <Image source={props.imageSrc} />
      {<Text>{props.title}</Text>}
      {console.log(props.imageSrc)}
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetails;
