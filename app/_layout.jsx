import { Stack } from "expo-router";
import { AuthProvider } from "@/contexts/AuthContext";

const RootLayout = () => {
  return (
    <AuthProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#0089b3ff",
          },
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
          },
          contentStyle: {
            paddingHorizontal: 10,
            paddingTop: 10,
            backgroundColor: "#ffffffff",
          },
        }}
      >
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="notes" options={{ title: "Notes" }} />
      </Stack>
    </AuthProvider>
  );
};

export default RootLayout;
