import { View, Text, Image } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

export default function index() {
  return (
    <View className="flex-1">
      <Stack.Screen
        options={{
          title: "Home",
        }}
      />
      <View className="bg-slate-900 justify-evenly items-center flex-1">
        <Text className="text-white text-3xl">Home </Text>
        <Link href="/about">
          <View className="bg-zinc-300 p-5 mb-5">
            <Text>About</Text>
          </View>
        </Link>

        <Link href="/user/5">
          <View className="bg-zinc-300 p-5 mb-5">
            <Text>User</Text>
          </View>
        </Link>
      </View>
    </View>
  );
}
