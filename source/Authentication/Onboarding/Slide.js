import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
const { width, height } = Dimensions.get("window");
export default function Slide({ label, right }) {
    const transform = [
        {translateY: (0.6*height - 100)/2},
        {translateX: (-width)/2 + 50},
        {rotate: "90deg"}
    ]
  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, {transform}]}>
        <Text style={styles.title}>{label}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
  },
  title: {
    fontSize: 65,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  titleContainer: {
    height: 100,
    justifyContent: "center",
  },
});
