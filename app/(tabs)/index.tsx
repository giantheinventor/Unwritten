import { Text, View, StyleSheet, Platform } from "react-native";
import ProjectList from "../projects/projectList";
import { Fab, FabIcon, FabLabel } from "@/components/ui/fab";
import { Ionicons } from "@expo/vector-icons";
import { Box } from "@/components/ui/box";
import { useFonts } from "expo-font";

export default function app() {
  const fabPressHandle = () => {
    console.log("FAB pressed");
  };

  return (
    <View style={styles.container}>
      <View style={styles.appTitleView}>
        <Text style={styles.appTitleText}>Unwritten</Text>
      </View>
      <ProjectList />
      <Fab style={styles.fab} isHovered={false} onPress={fabPressHandle}>
        <Ionicons name="add" size={50} color="white" />
      </Fab>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  appTitleView: {
    backgroundColor: "white",
    padding: 16,
    alignItems: "flex-start",
    height: 80,
  },
  appTitleText: {
    fontSize: 40,
    fontWeight: "bold",
    marginLeft: Platform.OS === "web" ? 20 : 10,
  },
  fab: {
    position: "absolute", // Absolut positioniert
    bottom: 16, // Abstand vom unteren Rand
    right: 16, // Abstand vom rechten Rand
    backgroundColor: "black", // Beispiel: Hintergrundfarbe
    borderRadius: 30, // Rundet die Ecken
    width: 60, // Größe des FAB
    height: 60, // Größe des FAB
    justifyContent: "center", // Zentriert vertikal
    alignItems: "center",
  },
  fabContent: {
    flexDirection: "row", // Ordnet Icon und Text nebeneinander
    alignItems: "center", // Zentriert vertikal
    justifyContent: "center", // Zentriert horizontal
  },
  fabLabel: {
    marginLeft: 8, // Abstand zwischen Icon und Text
    color: "white", // Textfarbe
    fontSize: 16, // Schriftgröße
  },
});
