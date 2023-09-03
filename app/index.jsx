import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function index() {
  return (
    <View className="bg-slate-900 justify-center items-center flex-1">
      <Text className="text-white text-3xl">Home </Text>
      <View className="bg-zinc-300 p-5 mb-5">
        <Link href="/about">About</Link>
      </View>
      <View className="bg-zinc-300 p-5 mb-5">
        <Link href="/user/5">User</Link>
      </View>
    </View>
  );
}
