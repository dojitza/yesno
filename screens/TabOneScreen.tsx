import * as React from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import YesNoInput from "../components/YesNoInput";

export default function TabOneScreen() {
  const [username, setUsername] = React.useState("");
  const maxlen = 100;
  const onUsernameChanged = (username: string) => {
    if (username.length > maxlen) return username.substring(0, maxlen);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.usernameInput} onTextChanged={onUsernameChanged}>
        {username}
      </Text>
      <YesNoInput outputText={username} setOutputText={setUsername} />
    </View>
  );
}

const styles = StyleSheet.create({
  usernameInput: {
    fontSize: 20,
    fontWeight: "bold",
    height: 100,
    textAlign: "center",
    marginTop: 30,
    margin: 20
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%"
  }
});
