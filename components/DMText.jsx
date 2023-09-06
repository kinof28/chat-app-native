import { Text, useColorScheme } from "react-native";
import React from "react";

export default function DMText(props) {
  let colorScheme = useColorScheme();
  return (
    <Text className={colorScheme === "dark" ? "text-white" : "text-black"}>
      {props.children}
    </Text>
  );
}
