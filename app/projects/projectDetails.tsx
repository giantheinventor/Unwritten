import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native";
import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function ProjectList() {
  const router = useRouter();
  const projects = [
    { id: 1, title: "First Item", color: "black" },
    { id: 2, title: "First Item", color: "black" },
    { id: 3, title: "First Item", color: "black" },
    { id: 4, title: "First Item", color: "black" },
    { id: 5, title: "First Item", color: "black" },
    { id: 6, title: "First Item", color: "black" },
    { id: 7, title: "First Item", color: "black" },
    { id: 8, title: "First Item", color: "black" },
  ];

  const buttonPressHandle = () => {
    console.log("Button Pressed");
  };

  const returnButtonHandler = () => {
    router.push("/");
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Button
          onPress={returnButtonHandler}
          style={{ justifyContent: "center", alignContent: "center" }}
        >
          <Ionicons name="chevron-back" size={24} color="black" />
        </Button>
        <Text style={styles.title}>Project</Text>
      </View>
      <View style={styles.list}>
        <FlatList
          data={projects}
          renderItem={({ item }) => (
            <Box style={styles.box}>
              <Text style={styles.text}>{item.title}</Text>
            </Box>
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true} // Aktiviert die horizontale Anzeige
          showsHorizontalScrollIndicator={false} // Versteckt den Scrollbalken
        />
      </View>
      <View style={styles.separator} />
      <Button style={styles.button} onPress={buttonPressHandle}>
        <Ionicons name="add" size={20} color="dark grey" />
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    height: 100,
  },
  button: {
    width: 100,
    height: 30,
    opacity: 1,
    borderRadius: 8,
    backgroundColor: "gray",
    marginLeft: 30,
    alignSelf: "flex-start",
    alignContent: "center",
    justifyContent: "center",
  },
  titleContainer: {
    marginLeft: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    margin: 16,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  box: {
    backgroundColor: "#4caf50",
    marginLeft: 25,
    margin: 5,
    marginBottom: 10,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    height: 50,
    width: 100,
  },

  separator: {
    marginVertical: 30,
    height: 2,
    width: "80%",
    backgroundColor: "black",
    alignSelf: "center",
  },
});
