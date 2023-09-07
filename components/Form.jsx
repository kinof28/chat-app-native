import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableHighlight,
} from "react-native";

export default function Form(props) {
  return (
    <KeyboardAvoidingView className="p-4 border-2">
      <TextInput
        className="text-white p-4 border-2"
        placeholder="Email Address"
        placeholderTextColor={"white"}
      />
      <TextInput
        className="text-white p-2 border-red-600 border-2"
        placeholder="Password"
        placeholderTextColor={"white"}
        textContentType="password"
        secureTextEntry={true}
      />
      <TouchableHighlight>
        <Text className="">Login</Text>
      </TouchableHighlight>
    </KeyboardAvoidingView>
  );
}
