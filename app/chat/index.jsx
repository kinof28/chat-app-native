import { View, Text, FlatList, Pressable, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import { auth, db } from "../../config/firebase.config";
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import { signOut } from "firebase/auth";
import { SimpleLineIcons } from "@expo/vector-icons";

export default function Chat(props) {
  const user = auth.currentUser;
  const router = useRouter();
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("time"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const temporaryMessagesList = [];
      querySnapshot.forEach((doc) => {
        temporaryMessagesList.push(doc.data());
      });
      setMessages(temporaryMessagesList);
      return () => {
        unsubscribe();
      };
    });
  }, []);

  const send = async () => {
    if (newMessage.trim().length < 1) return;
    setNewMessage("");
    try {
      const docRef = await addDoc(collection(db, "messages"), {
        text: newMessage,
        time: serverTimestamp(),
        sender: user.email,
      });
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
      className="justify-end items-center flex-1 pt-14"
      colors={["rgb(0, 255, 255)", "rgb(30, 80, 255)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View className="flex-row justify-center items-center w-full relative p-3">
        <Pressable
          className="p-3 bg-blue-600 rounded-full absolute left-5"
          onPress={onSignOut}
        >
          <SimpleLineIcons name="logout" size={26} color="white" />
        </Pressable>
        <Text className="text-4xl text-white font-bold">Chat Page</Text>
      </View>
      <FlatList
        className="w-full px-5 mb-5 "
        data={messages}
        renderItem={({ item }) => (
          <View
            className={` rounded-xl ${
              item.sender === user.email
                ? "bg-white self-end rounded-br-none"
                : "bg-cyan-200 self-start rounded-tl-none"
            } mb-1 max-w-[90%] p-2 `}
          >
            <Text className="">{item.text}</Text>
          </View>
        )}
        keyExtractor={(item) => item.time}
        inverted
        contentContainerStyle={{ flexDirection: "column-reverse" }}
      />
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
