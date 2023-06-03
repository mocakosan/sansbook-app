import React from 'react';
import WebView from 'react-native-webview';
import {SafeAreaView, StyleSheet} from 'react-native';

function app() {
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{uri: 'https://sansbook.co.kr/'}} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
});
export default app;
