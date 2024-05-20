import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Platform, StyleSheet, Text, View, FlatList } from "react-native";
import { projectsRoutes } from "../../lib/project-routes";

export default function HomePage() {
  const renderItem = ({ item }) => (
    <View style={styles.projectItem}>
      <View>
        <Text style={styles.projectTitle}>{item.title}</Text>
        <Text style={styles.projectDescription}>{item.description}</Text>
      </View>
      <FontAwesome
        style={{ marginRight: 20 }}
        name="chevron-right"
        size={16}
        color="#666666"
      />
    </View>
  );

  return (
    <View
      style={[
        styles.container,
        (Platform.OS === "android" || Platform.OS === "ios") && {
          paddingTop: 80,
        },
      ]}
    >
      <View style={styles.main}>
        <Text style={styles.title}>KitchenSink</Text>
        <Text style={styles.subtitle}>
          For all the projects of Engineer Codewala.
        </Text>
        <FlatList
          data={projectsRoutes}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatListContainer}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingBottom: 0,
  },
  main: {
    flex: 1,
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    color: "#38434D",
    marginBottom: 20,
  },
  flatListContainer: {
    paddingBottom: 0,
  },
  projectItem: {
    padding: 10,
    paddingHorizontal: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  projectDescription: {
    fontSize: 12,
    fontWeight: "thin",
    color: "#666666",
  },
});
