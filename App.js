import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import VideoDownloader from './src/pages/VideoDownloader';

export default function App() {
  return (
    <View style={styles.container}>
      <VideoDownloader />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',  
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight, 
  },
});
