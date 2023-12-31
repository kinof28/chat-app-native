import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Shadow } from "react-native-shadow-2";
import { auth } from "../../config/firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Chat from "../chat";

export default function Auth() {
  const { login } = useLocalSearchParams();
  const [loginState, setLoginState] = useState(login === "true");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const onLogin = () => {
    setIsLoading(true);
    setError("");
    signInWithEmailAndPassword(auth, email, password)
      .catch((error) => {
        setError(error.code);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onSubscribe = () => {
    setIsLoading(true);
    setError("");
    createUserWithEmailAndPassword(auth, email, password)
      .catch((error) => {
        setError(error.code);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const toggleLogin = () => {
    setLoginState(!loginState);
  };
  return auth.currentUser === null ? (
    <LinearGradient
      className="justify-end items-center flex-1"
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
          <Text className="text-4xl pb-2 font-bold">
            {loginState ? "Login" : "Subscribe"}
          </Text>
          <Text className="text-red-400 text-xs font-bold pb-8">{error}</Text>
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
          <TouchableOpacity
            onPress={loginState ? onLogin : onSubscribe}
            disabled={isLoading}
          >
            <Shadow distance={10} offset={[5, 2]}>
              <LinearGradient
                className="w-56 items-center p-2"
                style={{
                  borderRadius: 50,
                }}
                colors={
                  isLoading
                    ? ["#fff", "#000"]
                    : [
                        "rgb(0, 255, 255)",
                        "rgb(20, 200, 255)",
                        "rgb(30, 80, 255)",
                      ]
                }
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
    </LinearGradient>
  ) : (
    <Chat />
  );
}
