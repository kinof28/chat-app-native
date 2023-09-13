import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { EvilIcons } from "@expo/vector-icons";
import { Shadow } from "react-native-shadow-2";
import { auth } from "../config/firebase.config";
import { useEffect } from "react";
export default function index() {
  const [fontsLoaded, fontError] = useFonts({
    "original-Surfer": require("../assets/fonts/OriginalSurfer-Regular.ttf"),
  });
  console.log(auth.currentUser);
  useEffect(() => {
    console.log("effect: ", auth.currentUser);
  }, []);
  return (
    <View className="flex-1">
      <View className="min-h-[60%]  -mb-24 w-full z-30 ">
        <Shadow
          startColor="rgb(30, 80, 255)"
          distance={25}
          className="w-full pb-14 bg-white"
        >
          <View
            className="justify-center mt-20 items-center "
            style={{ borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}
          >
            <Text
              // style={{
              //   fontFamily: "original-Surfer",
              // }}
              className="text-4xl uppercase font-bold"
            >
              Messengee
            </Text>
            <Text className="text-center text-sm mx-5 text-neutral-600 mt-5">
              Messengee is a messaging app using firebase as Backend, you can
              subscribe using email and password or join using google OAuth and
              start messaging other losers like your self and me ...
            </Text>
            <View className="mt-10">
              <Shadow startColor="#CCC" distance={15} offset={[10, 10]}>
                <LinearGradient
                  className="justify-center items-center w-48 h-48"
                  style={{
                    borderRadius: 200,
                  }}
                  colors={[
                    "rgb(0, 255, 255)",
                    "rgb(20, 200, 255)",
                    "rgb(30, 80, 255)",
                  ]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <EvilIcons name="envelope" size={120} color="white" />
                </LinearGradient>
              </Shadow>
            </View>
          </View>
        </Shadow>
      </View>

      <LinearGradient
        className="justify-center items-center flex-1 z-0 "
        colors={["rgb(0, 255, 255)", "rgb(20, 200, 255)", "rgb(30, 80, 255)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View className="items-center justify-evenly flex-1 mt-20">
          <Link
            href={{
              pathname: "/auth",
              params: { login: false },
            }}
            asChild
          >
            <TouchableOpacity>
              <Shadow distance={15} startColor="rgba(30, 80, 255,0.5)">
                <LinearGradient
                  className="w-56 items-center p-2"
                  style={{
                    borderRadius: 50,
                  }}
                  colors={["rgb(0, 255, 255)", "rgb(30, 80, 255)"]}
                >
                  <Text className="text-3xl font-bold text-white">
                    Start Now
                  </Text>
                </LinearGradient>
              </Shadow>
            </TouchableOpacity>
          </Link>
          <Link
            href={{
              pathname: "/auth",
              params: { login: true },
            }}
          >
            <View>
              <Text className="text-white font-semibold text-lg p-1">
                Already have an account? Login
              </Text>
              <View className="border-b-2 border-white mt-2 w-full"></View>
            </View>
          </Link>
        </View>
      </LinearGradient>
    </View>
  );
}
