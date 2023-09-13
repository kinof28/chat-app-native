import { View, Text, FlatList, Pressable, TextInput } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import { auth, db } from "../../config/firebase.config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { signOut } from "firebase/auth";

export default function Chat(props) {
  const params = useLocalSearchParams();
  const user = auth.currentUser;
  const router = useRouter();
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const send = async () => {
    setNewMessage("");
    try {
      const docRef = await addDoc(collection(db, "messages"), {
        text: newMessage,
        time: serverTimestamp(),
        sender: user.displayName !== null ? user.displayName : user.email,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error(error);
    }
  };
  const onSignOut = () => {
    signOut(auth);
    router.replace("/");
  };
  return (
    <LinearGradient
      className="justify-end items-center flex-1"
      colors={["rgb(0, 255, 255)", "rgb(30, 80, 255)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Pressable className=" p-3 bg-red-600 rounded-3xl" onPress={onSignOut}>
        <Text>Sign out</Text>
      </Pressable>
      <Text className="text-4xl text-white font-bold">Chat Page</Text>
      {/* <FlatList /> */}
      <View className="flex-row w-full">
        <TextInput
          placeholder="Message"
          className="p-3 border-[1px] flex-1 m-2 border-neutral-200 rounded-xl text-white"
          placeholderTextColor={"#bbb"}
          value={newMessage}
          onChangeText={(text) => setNewMessage(text)}
        />
        <Pressable className="p-2 mr-2 justify-center" onPress={send}>
          <FontAwesome name="send" size={32} color="#00F" />
        </Pressable>
      </View>
    </LinearGradient>
  );
}
