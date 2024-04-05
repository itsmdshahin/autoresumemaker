import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const VideoDownloader = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [convertPressed, setConvertPressed] = useState(false);

  const handleConvert = () => {
    // Assuming the API or website you're using will handle the conversion and provide a result
    // Set convertPressed to true to show the WebView
    setConvertPressed(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>YouTube To Mp3 Converter — free</Text>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Video URL:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setVideoUrl}
          value={videoUrl}
          placeholder="Enter video URL"
        />
        <View style={styles.dropdown}>
          <Text style={styles.dropdownText}>MP3</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={handleConvert}>
          <Text style={styles.buttonText}>Convert</Text>
        </TouchableOpacity>
      </View>
      {convertPressed && (
        <WebView
          style={styles.webview}
          source={{ uri: `https://api.vevioz.com/apis/button/mp3?url=${encodeURIComponent(videoUrl)}` }}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
    //   flex: 1,
    //   paddingtop: 20, // Add padding around the screen edges
    //   backgroundColor: '#fff',
    //   justifyContent: 'flex-start', // Align content to the top
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 16,
      color: '#333', // Set a text color for better readability
      alignSelf: 'center', // Center title horizontally
    },
    inputGroup: {
      marginBottom: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 12,
      fontSize: 18, // Increase font size for better readability
      color: '#333', // Set input text color
      marginBottom: 10,
      width: '100%', // Use 100% of the container width
    },
    dropdown: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      paddingVertical: 12,
      paddingHorizontal: 10,
      fontSize: 18, // Match font size with the input
      color: '#333', // Set dropdown text color
      marginBottom: 10,
    },
    dropdownText: {
      fontSize: 16,
    },
    button: {
      backgroundColor: '#4CAF50', // Green color to match the button in the image
      paddingVertical: 15,
      paddingHorizontal: 10,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 2, // Add shadow for Android (optional)
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    webview: {
      marginTop: 10,
      height: 200, // Set a fixed height or use flex values
      width: '100%', // WebView should take up 100% of the container width
      backgroundColor: '#f9f9f9',
    },
  });
  

export default VideoDownloader;
