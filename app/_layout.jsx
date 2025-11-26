  import { Stack } from "expo-router";

  const RootLayout = () => {
    return <Stack 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0089b3ff'
        },
        headerTitleAlign: 'center',
        headerTintColor: "white",
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "bold"
        },
        contentStyle: {
          paddingHorizontal: 10,
          paddingTop: 10,
          backgroundColor: '#ffffffff',
        }
      }}
    >
      <Stack.Screen 
        name="index" 
        options={{ title: "Home" }} 
      />
      <Stack.Screen 
        name="notes" 
        options={{ title: "Notes" }} 
      />
    </Stack>
  };

  export default RootLayout;