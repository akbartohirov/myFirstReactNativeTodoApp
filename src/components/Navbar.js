import React from "react";
import { Text, View, StyleSheet } from "react-native";

export const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.navbarTitle}>My first to app</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flex: 0.1,
    backgroundColor: "teal",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  navbarTitle: {
    color: "#fff",
    fontSize: 32,
  },
});
