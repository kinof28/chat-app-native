import {
  View,
  Text,
  useColorScheme,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import React, { useState } from "react";
import { Link, useLocalSearchParams } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Shadow } from "react-native-shadow-2";
import { auth } from "../../config/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
// import Constants from "expo-constants";

export default function Auth() {
  const { login } = useLocalSearchParams();
  const [loginState, setLoginState] = useState(login === "true");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onLogin = () => {
    console.log("login: ", email, " -- ", password);
  };

  const onSubscribe = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log("user credentials: ", userCredentials);
      })
      .catch((error) => {
        console.error(error);
      });
    // console.log(Constants);
  };
  const toggleLogin = () => {
    setLoginState(!loginState);
  };
  return (
    <LinearGradient
      className="justify-end items-center flex-1 relative"
      colors={["rgb(0, 255, 255)", "rgb(20, 200, 255)", "rgb(30, 80, 255)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0.3 }}
    >
      <Shadow
        startColor="rgb(30, 80, 255)"
        distance={25}
        className="min-w-full bg-white"
      >
        <View
          className="justify-center items-center p-8 gap-5"
          style={{
            borderTopLeftRadius: 60,
            borderTopRightRadius: 60,
          }}
        >
          <Text className="text-4xl my-16 font-bold">
            {loginState ? "Login" : "Subscribe"}{" "}
          </Text>
          <TextInput
            placeholder="Email Address"
            autoCapitalize={"none"}
            className="p-3 border-[1px] w-full border-neutral-200"
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            placeholder="Password"
            autoCapitalize={"none"}
            secureTextEntry={true}
            className="p-3 border-[1px] w-full border-neutral-200"
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={loginState ? onLogin : onSubscribe}>
            <Shadow distance={10} offset={[5, 2]}>
              <LinearGradient
                className="w-56 items-center p-2"
                style={{
                  borderRadius: 50,
                }}
                colors={["rgb(0, 255, 255)", "rgb(30, 80, 255)"]}
              >
                <Text className="text-3xl font-bold text-white">
                  {loginState ? "Login" : "Register"}
                </Text>
              </LinearGradient>
            </Shadow>
          </TouchableOpacity>

          <TouchableOpacity onPress={toggleLogin}>
            <View>
              <Text className="text-neutral-600">
                {loginState
                  ? "Don't have an account? Subscribe"
                  : "Already have an account? Login"}
              </Text>
              <View className="border-t-2 border-neutral-400"></View>
            </View>
          </TouchableOpacity>
        </View>
      </Shadow>
      <Link
        href="/"
        className="absolute top-20 left-0 p-5 bg-green-700 rounded-full"
        asChild
      >
        <TouchableOpacity>
          <Text>Go Back</Text>
        </TouchableOpacity>
      </Link>
    </LinearGradient>
  );
}
