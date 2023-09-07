import { View, Text, useColorScheme } from "react-native";
import React from "react";
import Form from "../../components/Form";
import DMText from "../../components/DMText";
import { Link, useLocalSearchParams } from "expo-router";

export default function Auth() {
  let colorScheme = useColorScheme();
  const { login } = useLocalSearchParams();
  console.log("login: ", login);
  return (
    <View
      className={`${
        colorScheme === "dark" ? "bg-slate-800" : "bg-slate-200"
      } flex-1 justify-center items-center`}
    >
      <DMText>Auth</DMText>
      <Form />
      <Link href="/" className="text-white text-3xl">
        <Text>Go Back</Text>
      </Link>
    </View>
  );
}
