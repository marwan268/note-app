import { Pressable, Text } from "react-native";

const AppButton = ({ title, onPress, color, pressedColor, styles, flex }) => {
    return (
        <Pressable
        onPress={onPress}
        style={({pressed}) => [
            {
                backgroundColor: pressed ? pressedColor : color,
                paddingVertical:10,
                paddingHorizontal: 20,
                borderRadius: 10,
                alignItems: "center",
                marginTop: 20,
                flex: flex
            },
            styles
        ]}
        >
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
                {title}
            </Text>
        </Pressable>
    )
}

export default AppButton;