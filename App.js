/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, Text} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Popover, Button} from '@ui-kitten/components';

export const PopoverSimpleUsageShowcase = () => {
  const [visible, setVisible] = React.useState(false);

  const renderToggleButton = () => (
    <Button onPress={() => setVisible(true)}>TOGGLE POPOVER</Button>
  );

  return (
    <Popover
      visible={visible}
      anchor={renderToggleButton}
      onBackdropPress={() => setVisible(false)}>
      <ScrollView contentContainerStyle={popoverStyles.content}>
        {[...new Array(100)].map((item, index) => (
          <Text key={index}>{`${index}. Welcome to UI Kitten 😻`}</Text>
        ))}
      </ScrollView>
    </Popover>
  );
};

const popoverStyles = StyleSheet.create({
  content: {
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
  avatar: {
    marginHorizontal: 4,
  },
});

const App = () => {
  return (
    <>
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaView>
          <PopoverSimpleUsageShowcase />
        </SafeAreaView>
      </ApplicationProvider>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
