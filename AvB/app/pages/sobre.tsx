import { Image, StyleSheet, Text, View } from 'react-native';

export default function Page2() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/images/tiger.jpg')} />
      <Text style={styles.title}>AvB</Text>
      <View style={styles.separator}/>
      <Text style={styles.paragrafo}>Tigre</Text>
      <Text style={styles.paragrafo}>que é</Text>
      <Text style={styles.paragrafo}>representando na cultura</Text>
      <Text style={styles.paragrafo}>Chinesa</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },

  image:{
    width: 200,
    height: 200,
  },

  paragrafo:{
    fontSize: 20,
    fontWeight: 'bold',
  }

});
