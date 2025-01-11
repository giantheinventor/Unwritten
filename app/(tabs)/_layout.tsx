import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="generator"
        options={{ title: "Generator", headerShown: false }}
      />
      <Tabs.Screen
        name="index"
        options={{ title: "Projects", headerShown: false }}
      />
    </Tabs>
  );
}
