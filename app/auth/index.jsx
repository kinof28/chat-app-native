import { View, Text, useColorScheme } from "react-native";
import React from "react";
import Form from "../../components/Form";
import DMText from "../../components/DMText";

export default function Auth() {
  let colorScheme = useColorScheme();
  return (
    <View
      className={`${
        colorScheme === "dark" ? "bg-slate-800" : "bg-slate-200"
      } flex-1 justify-center items-center`}
    >
      <DMText>Auth</DMText>
      <Form />
    </View>
  );
}
