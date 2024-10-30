import { Text, StyleSheet, View } from "react-native";

interface MultiStylesProps {
    name: string;
}
const MultiStyles: React.FC<MultiStylesProps> = ({ name }) => {
    return (
        <View style={[mulitiStyle.contaner, mulitiStyle.padding]}>
            <Text style={[mulitiStyle.text, mulitiStyle.fontWidth]}>Hello {name} </Text>
        </View>
    );
}

const mulitiStyle = StyleSheet.create({
    contaner: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "green",
        marginHorizontal: 20,
        marginVertical: 30
    },
    padding: {
        padding: 20
    },
    text: {
        color: "red",
        textAlign: "center",
    },
    fontWidth: {
        fontWeight: "bold"
    }
});

export default MultiStyles;