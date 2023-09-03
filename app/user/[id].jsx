import { View, Text } from "react-native";
import React from "react";
import { Link, useLocalSearchParams } from "expo-router";

export default function User() {
  const { id } = useLocalSearchParams();
  return (
    <View className="bg-slate-900 justify-center items-center flex-1">
      <Text className="text-white text-3xl">User: {id}</Text>
      <View className="bg-zinc-300 p-5 ">
        <Link href="/">Go Back</Link>
      </View>
    </View>
  );
}
