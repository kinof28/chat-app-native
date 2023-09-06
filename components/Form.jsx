import { View, Text, KeyboardAvoidingView, TextInput } from "react-native";
import React from "react";

export default function Form(props) {
  //   const value = props.value;
  return (
    <KeyboardAvoidingView classname=" bg-green-800 border-red-700 border-4 p-2">
      <TextInput
        classname="text-white placeholder:text-white"
        placeholder="Email Address"
        placeholderTextColor={"white"}
      />
    </KeyboardAvoidingView>
  );
}
