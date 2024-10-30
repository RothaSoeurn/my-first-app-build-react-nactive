import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, FlatList, KeyboardAvoidingView, SectionList, StyleSheet, Text, TextInput, View, VirtualizedList } from "react-native";
import { RootStackParamList } from "../../app/types";
import { SafeAreaView } from "react-native-safe-area-context";

type HomeScreenNavigationProps = NativeStackNavigationProp<RootStackParamList, "Home">;
type Props = {
    navigation: HomeScreenNavigationProps;
}

// const data = [
//     { id: 1, text: 'Item 1' },
//     { id: 2, text: 'Item 2' },
//     { id: 3, text: 'Item 3' },
// ];
const sections = [
    { title: 'Section 1', data: ['Item 1', 'Item 2', 'Item 3'] },
    { title: 'Section 2', data: ['Item 4', 'Item 5', 'Item 6'] },
];

const data = [
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
];



export default function HomeScreen({ navigation }: Props) {
    const getItemCount = data => data.length;
    const getItem = (data, index) => data[index];

    const renderItem = ({ item }) => <Text>{item.text}</Text>;
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>

                <VirtualizedList
                    data={data}
                    renderItem={({ item }) => <Text>{item.text}</Text>}
                    keyExtractor={({ item }) => item.id.toString()}
                    getItemCount={data.length}
                    getItem={(data, index) => data[index]}
                >

                </VirtualizedList>

                {/* <SectionList sections={sections}
                    renderItem={({ item }) => <Text>{item}</Text>}
                    renderSectionHeader={({ section: { title } }) => <Text>{title}</Text>}
                >

                </SectionList> */}

                {/* <FlatList data={data} renderItem={
                    ({ item }) => (
                        <Text onPress={() => {
                            // navigation.navigate("Details", { itemId: item.id });
                        }}>{item.text}</Text>
                    )
                } keyExtractor={item => item.id.toString()}>

                </FlatList> */}
                {/* <Button title="Details" onPress={() => {
                    navigation.navigate("Details");

                }}></Button>


                <KeyboardAvoidingView
                    style={styles.container}
                    behavior="padding" // Additional padding when the keyboard is open.
                >
                    <TextInput
                        placeholder="Type something here"
                        keyboardType="numbers-and-punctuation"
                        style={styles.textInput}
                    />
                </KeyboardAvoidingView> */}

            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: "center"
    },
    textInput: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 10
    }
});