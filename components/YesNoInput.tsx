import * as React from "react";
import { StyleSheet, Button, View, TouchableOpacity, Text } from "react-native";

export default function YesNoInput({
  outputText,
  setOutputText
}: {
  outputText: string;
  setOutputText: (text: string) => void;
}) {
  return (
    <View style={styles.inputContainer}>
      <TouchableOpacity
        style={styles.yesButtonContainer}
        onPress={() => {
          setOutputText(outputText.concat("yes"));
        }}
      >
        <Text style={styles.buttonText}>Yes</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.noButtonContainer}
        onPress={() => {
          setOutputText(outputText.concat("no"));
        }}
      >
        <Text style={styles.buttonText}>No</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  yesButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4a4",
    flex: 1,
    height: "100%"
  },
  noButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f11",
    flex: 1,
    height: "100%"
  },
  buttonText: {
    fontSize: 30
  }
});
