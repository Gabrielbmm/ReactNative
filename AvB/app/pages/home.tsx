import { Link } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function home() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>AvB</Text>
        <Image
          style={styles.image}
          source={require("../../assets/images/tiger.jpg")}
        />
        <Image
          style={styles.image}
          source={require("../../assets/images/tiger.jpg")}
        />
        <Image
          style={styles.image}
          source={require("../../assets/images/tiger.jpg")}
        />
        <Image
          style={styles.image}
          source={require("../../assets/images/tiger.jpg")}
        />
        <Image
          style={styles.image}
          source={require("../../assets/images/tiger.jpg")}
        />
        <Image
          style={styles.image}
          source={require("../../assets/images/tiger.jpg")}
        />
        <Image
          style={styles.image}
          source={require("../../assets/images/tiger.jpg")}
        />
        <Image
          style={styles.image}
          source={require("../../assets/images/tiger.jpg")}
        />
        <Image
          style={styles.image}
          source={require("../../assets/images/tiger.jpg")}
        />
        <Image
          style={styles.image}
          source={require("../../assets/images/tiger.jpg")}
        />
        <View style={styles.separator} />
        <Link href="/pages/cadastro">Voltar para Index</Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 3,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },

  image: {
    width: 130,
    height: 160,
  },
});
