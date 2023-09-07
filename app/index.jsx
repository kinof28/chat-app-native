import { View, Text, TouchableOpacity } from "react-native";
import React, { useCallback } from "react";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";
// SplashScreen.preventAutoHideAsync();

export default function index() {
  const [fontsLoaded, fontError] = useFonts({
    "original-Surfer": require("../assets/fonts/OriginalSurfer-Regular.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      // await SplashScreen.hideAsync();
      console.log("fonts Loaded: ", fontsLoaded);
      if (fontError) console.error(fontError);
    }
  }, [fontsLoaded, fontError]);
  return (
    <View className="flex-1" onLayout={onLayoutRootView}>
      <View className="h-[60%] justify-center items-center">
        <Text
          style={{
            fontFamily: "original-Surfer",
          }}
          className="text-4xl uppercase"
        >
          Messengee
        </Text>
        <Text className="text-center text-sm mx-5 text-neutral-600 mt-5">
          Messengee is a messaging app using firebase as Backend, you can
          subscribe using email and password or join using google OAuth and
          start messaging other losers like your self and me ...
        </Text>
      </View>

      <LinearGradient
        className=" justify-center items-center  flex-1"
        colors={["rgb(0, 255, 255)", "rgb(30, 80, 255)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View>
          <Link
            href={{
              pathname: "/auth",
              params: { login: false },
            }}
          >
            <TouchableOpacity>
              <Text>Start Now</Text>
            </TouchableOpacity>
          </Link>
          <Link
            href={{
              pathname: "/auth",
              params: { login: true },
            }}
          >
            <Text>Already have an account? Login</Text>
          </Link>
        </View>
      </LinearGradient>
    </View>
  );
}
