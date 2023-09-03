import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function About() {
  return (
    <View className="bg-slate-900 justify-center items-center flex-1">
      <Text className="text-white text-3xl">About</Text>

      <Link href="/">
        <View className="bg-zinc-300 p-5 mb-5">
          <Text>Go Back</Text>
        </View>
      </Link>
    </View>
  );
}
