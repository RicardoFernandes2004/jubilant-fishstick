import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Ola mundo!<h1 style={styles.alo}>alguma coisa ai</h1></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1effc3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alo: {
    fontSize: 76,
    fontWeight: 'bold',
    color: '#ff0000',
  },
});
