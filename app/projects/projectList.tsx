import { useState } from "react";
import {
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
  Platform,
} from "react-native";
import { Box } from "@/components/ui/box";
import { Pressable } from "@/components/ui/pressable";
import { useRouter } from "expo-router";
import { Text } from "@/components/ui/text";
import { useFonts } from "expo-font";
/*
const data2 = [
  {
    id: 1,
    title: "First Item",
    color: "#e74c3c",
    image: require("../../assets/images/react-logo@2x.png"),
  },
  {
    id: 2,
    title: "Second Item",
    color: "#3498db",
    image: require("assets/images/react-logo@2x.png"),
  },
  {
    id: 3,
    title: "Third Item",
    color: "#f39c12",
    image: require("@/assets/images/react-logo@2x.png"),
  },
  {
    id: 4,
    title: "Fourth Item",
    color: "#8e44ad",
    image: require("@/assets/images/react-logo@2x.png"),
  },
  {
    id: 5,
    title: "Fifth Item",
    color: "#2ecc71",
    image: require("@/assets/images/react-logo@2x.png"),
  },
  {
    id: 6,
    title: "Sixth Item",
    color: "#e67e22",
    image: require("@/assets/images/react-logo@2x.png"),
  },
  {
    id: 7,
    title: "Seventh Item",
    color: "#1abc9c",
    image: require("@/assets/images/react-logo@2x.png"),
  },
  {
    id: 8,
    title: "Eighth Item",
    color: "#d35400",
    image: require("@/assets/images/react-logo@2x.png"),
  },
  {
    id: 9,
    title: "Ninth Item",
    color: "#c0392b",
    image: require("@/assets/images/react-logo@2x.png"),
  },
  {
    id: 10,
    title: "Tenth Item",
    color: "#2980b9",
    image: require("@/assets/images/react-logo@2x.png"),
  },
  {
    id: 11,
    title: "Eleventh Item",
    color: "#27ae60",
    image: require("@/assets/images/react-logo@2x.png"),
  },
  {
    id: 12,
    title: "Twelfth Item",
    color: "#8e44ad",
    image: require("@/assets/images/react-logo@2x.png"),
  },
  {
    id: 13,
    title: "Thirteenth Item",
    color: "#f1c40f",
    image: require("@/assets/images/react-logo@2x.png"),
  },
  {
    id: 14,
    title: "Fourteenth Item",
    color: "#e74c3c",
    image: require("@/assets/images/react-logo@2x.png"),
  },
  {
    id: 15,
    title: "Fifteenth Item",
    color: "#3498db",
    image: require("@/assets/images/react-logo@2x.png"),
  },
  {
    id: 16,
    title: "Sixteenth Item",
    color: "#f39c12",
    image: require("@/assets/images/react-logo@2x.png"),
  },
  {
    id: 17,
    title: "Seventeenth Item",
    color: "#9b59b6",
    image: require("@/assets/images/react-logo@2x.png"),
  },
  {
    id: 18,
    title: "Eighteenth Item",
    color: "#2ecc71",
    image: require("@/assets/images/react-logo@2x.png"),
  },
  {
    id: 19,
    title: "Nineteenth Item",
    color: "#e67e22",
    image: require("@/assets/images/react-logo@2x.png"),
  },
  {
    id: 20,
    title: "Twentieth Item",
    color: "#1abc9c",
    image: require("@/assets/images/react-logo@2x.png"),
  },
  {
    id: 21,
    title: "Twenty-First Item",
    color: "#d35400",
    image: require("@/assets/images/react-logo@2x.png"),
  },
  {
    id: 22,
    title: "Twenty-Second Item",
    color: "#c0392b",
    image: require("@/assets/images/react-logo@2x.png"),
  },
  {
    id: 23,
    title: "Twenty-Third Item",
    color: "#2980b9",
    image: require("@/assets/images/react-logo@2x.png"),
  },
  {
    id: 24,
    title: "Twenty-Fourth Item",
    color: "#27ae60",
    image: require("@/assets/images/react-logo@2x.png"),
  },
  {
    id: 25,
    title: "Twenty-Fifth Item",
    color: "#8e44ad",
    image: require("@/assets/images/react-logo@2x.png"),
  },
  {
    id: 26,
    title: "Twenty-Sixth Item",
    color: "#f1c40f",
    image: require("@/assets/images/react-logo@2x.png"),
  },
  {
    id: 27,
    title: "Twenty-Seventh Item",
    color: "#e74c3c",
    image: require("@/assets/images/react-logo@2x.png"),
  },
  {
    id: 28,
    title: "Twenty-Eighth Item",
    color: "#3498db",
    image: require("@/assets/images/react-logo@2x.png"),
  },
  {
    id: 29,
    title: "Twenty-Ninth Item",
    color: "#f39c12",
    image: require("@/assets/images/react-logo@2x.png"),
  },
  {
    id: 30,
    title: "Thirtieth Item",
    color: "#9b59b6",
    image: require("@/assets/images/react-logo@2x.png"),
  },
  {
    id: 31,
    title: "Thirty-First Item",
    color: "#2ecc71",
    image: require("@/assets/images/react-logo@2x.png"),
  },
  {
    id: 32,
    title: "Thirty-Second Item",
    color: "#e67e22",
    image: require("@/assets/images/react-logo@2x.png"),
  },
  {
    id: 33,
    title: "Thirty-Third Item",
    color: "#1abc9c",
    image: require("@/assets/images/react-logo@2x.png"),
  },
  {
    id: 34,
    title: "Thirty-Fourth Item",
    color: "#d35400",
    image: require("@/assets/images/react-logo@2x.png"),
  },
  {
    id: 35,
    title: "Thirty-Fifth Item",
    color: "#c0392b",
    image: require("@/assets/images/react-logo@2x.png"),
  },
  {
    id: 36,
    title: "Thirty-Sixth Item",
    color: "#2980b9",
    image: require("@/assets/images/react-logo@2x.png"),
  },
  {
    id: 37,
    title: "Thirty-Seventh Item",
    color: "#27ae60",
    image: require("@/assets/images/react-logo@2x.png"),
  },
  {
    id: 38,
    title: "Thirty-Eighth Item",
    color: "#8e44ad",
    image: require("@/assets/images/react-logo@2x.png"),
  },
  {
    id: 39,
    title: "Thirty-Ninth Item",
    color: "#f1c40f",
    image: require("@/assets/images/react-logo@2x.png"),
  },
  {
    id: 40,
    title: "Fortieth Item",
    color: "#e74c3c",
    image: require("@/assets/images/react-logo@2x.png"),
  },
];*/

export default function ProjectList() {
  const projects = [];
  const data = [
    {
      id: 1,
      title: "First Item",
      color: "#e74c3c",
      image: require("@/assets/images/test1.jpg"),
    },
    {
      id: 2,
      title: "second Item",
      color: "#e74c3c",
      image: require("@/assets/images/test1.jpg"),
    },
  ];

  const numColumns = 2;
  const screenWidth = Dimensions.get("window").width;
  const boxSize = 150;
  const boxStyle = { width: boxSize, height: boxSize };
  const router = useRouter();
  const [loaded] = useFonts({
    mono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const styles = StyleSheet.create({
    listContainer: {
      marginLeft: 100, // Abstand zum linken Rand
      marginRight: 100, // Abstand zum rechten Rand
      marginTop: 130, // Abstand zum oberen Rand
      justifyContent: "center", // Zentriert die Liste vertikal
      alignItems: "center",
    },
    box: {
      margin: Platform.OS === "web" ? 30 : 15, // Abstand zwischen Boxen margin:30 für web margin:15 für mobile
      marginBottom: 5, // Abstand zwischen den Boxen
      borderRadius: 8, // Rundet die Ecken der Boxen
      width: boxSize,
      height: boxSize - 20,
      justifyContent: "center",
      alignItems: "center",
    },
    projectTitle: {
      fontSize: 20,
      fontWeight: "bold",
      alignItems: "center",
      fontFamily: "mono",
    },
    image: {
      width: boxSize,
      height: boxSize,
      borderRadius: 8,
    },
  });

  const handlePress = () => {
    router.push("./projects/projectDetails");
    console.log("Pressed");
  };

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <Box className="flex-1 items-center justify-center p-4 ">
          <Pressable onPress={handlePress} style={styles.box}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.projectTitle}>{item.title}</Text>
          </Pressable>
        </Box>
      )}
      keyExtractor={(item) => item.title}
      numColumns={numColumns}
      contentContainerStyle={styles.listContainer}
    />
  );
}
