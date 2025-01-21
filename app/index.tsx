import { View, Text } from "react-native";
import { useRouter } from "expo-router";
import { Button } from "@/components/ui/button";

export default function login() {
  const onPressHandle = () => {
    router.push("./projectList");
  };

  const router = useRouter();

  return (
    <View>
      <Button onPress={onPressHandle}>
        <Text>Log In</Text>
      </Button>
    </View>
  );
}
