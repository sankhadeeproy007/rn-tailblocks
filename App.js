import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function App() {
  return (
    <View
      style={tw.style(
        'bg-blue-50',
        'flex',
        'flex-1',
        'justify-center',
        'items-center',
      )}
    >
      <Text style={tw.style('text-lg', 'text-blue-900')}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
