  import { StyleSheet, Text, View, Image} from "react-native";
  import { router } from "expo-router";
  import AppButton from "../components/AppButton.jsx";
  import PostItImage from '@/assets/images/sticky-notes.png'
  
  export const options = {
    title: "Home",
  };
  const HomeScreen = () => {
    return (
      <View
        style={styles.container}>
        <Image source={PostItImage} style={styles.image} />
        <Text style={styles.title}>Welcome Marwan</Text>
        <Text style={styles.subtitle}>Take notes whenever you want</Text>
        <AppButton 
          title="Get Started" 
          color={"#044eb4ff"}
          pressedColor={"#0060e6ff"}
          onPress={() => router.push("/notes")}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    btn: {  
      marginTop: 20
    },
    image: {
      width: 100,
      height: 100,
      marginBottom: 10,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#333'
    },
    subtitle: {
      fontSize: 16,
      textAlign: 'center',
      marginBottom: 10,
      color: "#666"

    }
  })
  export default HomeScreen;