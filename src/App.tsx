/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Page, StyleSheet, Text } from 'react-figma';

const styles = StyleSheet.create({
    page: {
        flexDirection: "row"
    },
    frameNonFirst: {
        marginLeft: 100
    }
});

const App = () => {
  return (
    <>
      <Page isCurrent name="Styleguide" style={styles.page}>
          <Text>Test</Text>
      </Page>
    </>
  );
};

export default App;
