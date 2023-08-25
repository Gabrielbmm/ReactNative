import { Link } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert,
  ScrollView,
} from "react-native";

export default function Cadastro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birth, setBirth] = useState("");
  const [cpf, setCpf] = useState("");

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/images/tiger.jpg")}
        />
        <Text style={styles.title}>AvB</Text>
        <View style={styles.separator} />
        <TextInput
          style={styles.ctexto}
          placeholder="Nome"
          placeholderTextColor="#000"
          textAlign="center"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.ctexto}
          placeholder="Email"
          placeholderTextColor="#000"
          textAlign="center"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.ctexto}
          placeholder="Data de Nascimento"
          placeholderTextColor="#000"
          textAlign="center"
          value={birth}
          onChangeText={setBirth}
        />
        <TextInput
          style={styles.ctexto}
          placeholder="CPF"
          placeholderTextColor="#000"
          textAlign="center"
          value={cpf}
          onChangeText={setCpf}
        />
        <Button
          title="Salvar"
          color="#841584"
          onPress={() => Alert.alert("Salvar")}
        />

        <Button
          title="Voltar"
          color="#841584"
          onPress={() => Alert.alert("Voltar")}
        />

        <Link href="/pages/home">Home</Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },

  image: {
    width: 200,
    height: 200,
  },

  ctexto: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    padding: 10,
  },
});
