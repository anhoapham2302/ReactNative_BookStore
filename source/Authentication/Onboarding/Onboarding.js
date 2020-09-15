import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Slide from "./Slide";
import {
  interpolateColor,
  onScrollEvent,
  useValue,
} from "react-native-redash/lib/module/v1";
import Animated from "react-native-reanimated";
const { width, height } = Dimensions.get("window");

export default function Onboarding() {
  const x = useValue(0);
  const onScroll = onScrollEvent({ x });
  const backgroundColor = interpolateColor(x, {
    inputRange: [0, width, width * 2, width * 3],
    outputRange: ["#BFEAF5", "#BEECC4", "#FFE4D9", "#FFDDDD"],
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, {backgroundColor}]}>
        <Animated.ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onScroll={onScroll}
        >
          <Slide label="Uy tín" />
          <Slide label="Chất lượng" />
          <Slide label="Tiết kiệm" />
          <Slide label="Nhanh chóng" />
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View style={{ ...StyleSheet.absoluteFill, backgroundColor}} />
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            borderTopLeftRadius: 80,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: 0.65 * height,
    borderBottomRightRadius: 80,
  },
  footer: {
    flex: 1,
  },
});
