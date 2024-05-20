import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import { projectsRoutes } from "../../lib/project-routes";
import { Link } from "expo-router";

const { width: screenWidth } = Dimensions.get("window");

export default function HomePage() {
  const renderItem = ({ item }) => (
    <Link href={"/"} style={styles.projectItem}>
      <View style={styles.projectContent}>
        <View style={styles.textContainer}>
          <Text style={styles.projectTitle}>{item.title}</Text>
          <Text style={styles.projectDescription}>{item.description}</Text>
        </View>
        <View style={styles.iconContainer}>
          <FontAwesome name="chevron-right" size={16} color="#666666" />
        </View>
      </View>
    </Link>
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
    width: "100%",
    padding: 10,
    paddingHorizontal: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  projectContent: {
    width: Platform.OS === "web" ? "100%" : screenWidth - 56,
    // width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textContainer: {
    flex: 1,
  },
  iconContainer: {
    paddingHorizontal: 10,
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
