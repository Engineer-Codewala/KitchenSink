import { StyleSheet, Text, View } from "react-native";

export default function SettingsPage() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Settings</Text>
        {/* <Text style={styles.subtitle}> */}
        {/*   For all the projects of Engineer Codewala. */}
        {/* </Text> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    padding: 24,
    paddingTop: 80,
  },
  main: {
    flex: 1,
    justifyContent: "flex-start",
    maxWidth: 960,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    color: "#38434D",
  },
});
