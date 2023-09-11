import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function Chat(props) {
  const params = useLocalSearchParams();
  const user = JSON.parse(params.user);

  return (
    <LinearGradient
      className="justify-center items-center flex-1 relative"
      colors={["rgb(0, 255, 255)", "rgb(30, 80, 255)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Text className="text-4xl text-white font-bold">Chat Page</Text>
    </LinearGradient>
  );
}
