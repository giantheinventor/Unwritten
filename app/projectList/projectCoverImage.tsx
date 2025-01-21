import React, { useEffect, useState } from "react";
import { Image, ActivityIndicator, View, StyleSheet, Text } from "react-native";
import { LinearGradient } from "react-native-svg";
import { Box } from "@/components/ui/box";

type ProjectIDs = {
  projectID: number; // Typ für projectId
};

const API_URL = "http://localhost:8000/";

const CoverImage: React.FC<ProjectIDs> = ({ projectID }) => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(`${API_URL}projects/image/${projectID}`);
        if (!response.ok) {
          throw new Error("Fehler beim Abrufen des Bildes");
        }

        const blob = await response.blob();
        const uri = URL.createObjectURL(blob);
        setImageUri(uri); // URI in den State speichern
      } catch (error) {
        console.error("Fehler beim Laden des Bildes:", error);
      } finally {
        setLoading(false); // Ladezustand aktualisieren
      }
    };

    fetchImage();
  }, [projectID]);

  const gradientBox = () => {
    return <Box style={styles.box}></Box>;
  };

  if (loading || !imageUri) {
    return (
      <Box
        className="bg-blue-500 bg-opacity-50 w-full h-full flex justify-center items-center rounded-md"
        style={styles.box}
      ></Box>
    );
  }

  return <Image source={{ uri: imageUri }} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "contain",
  },
  box: {
    flex: 1,
  },
});

export default CoverImage;
