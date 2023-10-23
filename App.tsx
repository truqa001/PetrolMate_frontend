import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ref, onValue, getDatabase, child, get } from "firebase/database";
import { useEffect, useState } from "react";
import { dbRef } from "./firebaseConfig";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Reference to the database location you want to read from
    get(child(dbRef, `/City/Adelaide/E10`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log("aaaaa", snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });

    // Don't forget to remove the listener when the component unmounts
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
