import React, { useEffect, useState } from "react";
import { Image, View, ActivityIndicator, StyleSheet } from "react-native";
import * as FileSystem from "expo-file-system";

type CachedImageProps = {
  streamingUrl: string;
  cacheKey: string;
  imageStyle?: object;
};

const CachedImage: React.FC<CachedImageProps> = ({
  streamingUrl,
  cacheKey,
  imageStyle,
}) => {
  const [localUri, setLocalUri] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAndCacheImage = async () => {
      const tempFileUri = `${FileSystem.cacheDirectory}${cacheKey}_temp.jpg`; // Temporärer Speicherort
      const cacheFileUri = `${FileSystem.documentDirectory}${cacheKey}.jpg`; // Persistenter Cache-Speicherort

      try {
        // 1. Prüfen, ob das Bild im Cache liegt
        const fileInfo = await FileSystem.getInfoAsync(cacheFileUri);
        if (fileInfo.exists) {
          console.log("Image loaded from cache:", cacheFileUri);
          setLocalUri(cacheFileUri);
          setLoading(false);
          return;
        }

        // 2. Bild von der Streaming-URL herunterladen (temporär speichern)
        const downloadResumable = FileSystem.createDownloadResumable(
          streamingUrl,
          tempFileUri
        );
        const result = await downloadResumable.downloadAsync();

        if (!result || !result.uri) {
          console.error("Streaming download failed or returned no URI");
          setLoading(false);
          return;
        }

        // 3. Temporäre Datei in den persistenten Cache kopieren
        await FileSystem.moveAsync({
          from: tempFileUri,
          to: cacheFileUri,
        });

        console.log("Image cached successfully at:", cacheFileUri);

        // 4. Temporäre Datei löschen (bereits kopiert)
        await FileSystem.deleteAsync(tempFileUri, { idempotent: true });

        // 5. URI setzen
        setLocalUri(cacheFileUri);
      } catch (error) {
        console.error("Error handling streaming image:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAndCacheImage();
  }, [streamingUrl, cacheKey]);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!localUri) {
    return null; // Kein Bild verfügbar
  }

  return <Image source={{ uri: localUri }} style={imageStyle} />;
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CachedImage;
