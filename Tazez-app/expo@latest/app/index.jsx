import React, { useState } from "react";
import { StyleSheet, Text, TextInput, Button, View, Alert } from "react-native";
import { database } from "./firebase";
import { ref, push } from "firebase/database";

export default function App() {
  const [order, setOrder] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async () => {
    if (!order || !phone) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    try {
      await push(ref(database, "orders"), {
        order,
        phone,
        timestamp: new Date().toISOString(),
      });
      Alert.alert("Success", "Your order has been placed!");
      setOrder("");
      setPhone("");
    } catch (error) {
      Alert.alert("Error", "Failed to send order: " + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Place Your Order</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Order"
        value={order}
        onChangeText={setOrder}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />
      <Button title="Submit Order" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    borderRadius: 5,
  },
});
