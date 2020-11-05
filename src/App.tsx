/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import { Page, StyleSheet } from "react-figma";
import styled from "@emotion/native";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
  },
  frameNonFirst: {
    marginLeft: 100,
  },
});

const App = () => {
  const Test = styled.Text({
    color: "green",
  });
  return (
    <>
      <Page isCurrent name="Styleguide" style={styles.page}>
        <Test>Test</Test>
      </Page>
    </>
  );
};

export default App;
