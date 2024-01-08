import React from 'react';
import { StyleSheet, Platform, StatusBar, SafeAreaView } from 'react-native';

interface SafeAreaViewProps extends React.PropsWithChildren<{}> {}

const SafeAreaComponent: React.FC<SafeAreaViewProps> = (props) => (
  <SafeAreaView style={styles.AndroidSafeArea} {...props}>
    {props.children}
  </SafeAreaView>
);

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default SafeAreaComponent;
