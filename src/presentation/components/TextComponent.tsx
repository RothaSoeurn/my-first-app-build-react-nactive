import { Text, StyleSheet } from "react-native";

interface TextComponentProps {
    name: string;
}
const TextComponent: React.FC<TextComponentProps> = ({ name }) => {
    return (
        <Text style={styles.text}>Hello {name}</Text>
    );
}

const styles = StyleSheet.create({
    contaner: {},
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 10,
    },
});

export default TextComponent;