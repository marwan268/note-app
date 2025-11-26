import { Pressable, Text } from "react-native";

const AppButton = ({ title, onPress, color, pressedColor, marginLeft, marginRight, padding, flex }) => {
    return (
        <Pressable
        onPress={onPress}
        color={color}
        marginLeft={marginLeft}
        marginRight={marginRight}
        pressedColor={pressedColor}
        padding={padding}
        flex={flex}
        style={({pressed}) => [
            {
                backgroundColor: pressed ? pressedColor : color,
                paddingVertical:10,
                paddingHorizontal: 20,
                borderRadius: 10,
                alignItems: "center",
                marginVertical: 20,
                marginHorizontal: 5,
                flex: flex
            }
        ]}
        >
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
                {title}
            </Text>
        </Pressable>
    )
}

export default AppButton;