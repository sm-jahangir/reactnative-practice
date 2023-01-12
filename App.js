import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import Footer from "./components/Footer";
import ListViewComponent from "./components/ListViewComponent";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app! Jahangir</Text>
        <StatusBar style="auto" />
        <Text>Some text</Text>
        <View>
          <Text>Some more text</Text>
        <Image source={require("./assets/jahangir.jpg")} style={{ width: 200, height: 200, marginBottom: 20 }} />
        </View>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
          }}
          defaultValue="You can type in me Here"
        />
        <Text>Hello, I am your cat!</Text>
      </View>
      {/* <ListViewComponent /> */}
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
