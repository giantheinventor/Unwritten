import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
  Platform,
  View,
} from "react-native";
import { Box } from "@/components/ui/box";
import { Pressable } from "@/components/ui/pressable";
import { useRouter } from "expo-router";
import { Text } from "@/components/ui/text";
import { useFonts } from "expo-font";
import ProjectInterface from "@/data-interface/project-interface";

//import { API_URL, USER_ID } from "@env";
const API_URL = "http://localhost:8000/";
const USER_ID = "1";
export default function ProjectList() {
  const reader = new FileReader();
  const [projects, setProjects] = useState<ProjectInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);

        // Projekte abrufen
        const projectIDs = await fetchAllAssociatedProjectIDs();
        const projectInfos = await fetchProjectInfo(projectIDs);

        const promises = projectInfos.map(async (project: ProjectInterface) => {
          project.convertUriToImage();
          return project;
        });
        const projectObjects = await Promise.all(promises);

        setProjects(projectObjects);
      } catch (error) {
        console.error("Fehler beim Laden der Projekte:", error);
      } finally {
        setLoading(false);
        setRefresh(false);
      }
    };

    loadProjects();
  }, [refresh]);

  const fetchAllAssociatedProjectIDs = async () => {
    try {
      const response = await fetch(`${API_URL}userAccess/${USER_ID}`, {
        method: "GET",
      });
      const projectIDs = await response.json();
      return projectIDs.user_access;
    } catch (error) {
      console.error("Fehler:", error);
      return null;
    }
  };

  const fetchProjectInfo = async (projectIDs: Array<number>) => {
    try {
      const promises = projectIDs.map(async (projectID: number) => {
        const response = await fetch(`${API_URL}projects/${projectID}`);
        if (!response.ok) {
          throw new Error(`Fehler bei Anfrage für ID ${projectID}`);
        }
        const data = await response.json();

        return new ProjectInterface(
          data.project.id,
          data.project.title,
          data.project.coverImage
        ); // Kombiniere die Ergebnisse
      });

      // Warte, bis alle Anfragen abgeschlossen sind
      const results = await Promise.all(promises);

      // Ergebnisse anzeigen

      return results;
    } catch (error) {
      console.error("Fehler:", error);
      return [];
    }
  };

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
    imageWrapper: {
      width: boxSize,
      height: boxSize,
      borderRadius: 8,
    },
  });

  const handlePress = async () => {
    router.push("./projectView/projectDetails");
    //const objects = await fetchProjectCoverImage(6);
  };

  return (
    <FlatList
      data={projects}
      renderItem={({ item }) => (
        <Box className="flex-1 items-center justify-center p-4 ">
          <Pressable onPress={handlePress} style={styles.box}>
            <View style={styles.imageWrapper}>{item.coverImage}</View>
            <Text style={styles.projectTitle}>{item.title}</Text>
          </Pressable>
        </Box>
      )}
      keyExtractor={(item) => item.title}
      numColumns={numColumns}
      contentContainerStyle={styles.listContainer}
      ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
    />
  );
}
