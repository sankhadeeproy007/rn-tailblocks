import React from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Ionicons } from '@expo/vector-icons';

export default function Buttons() {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} style={styles.button}>
        <Text style={styles.buttonText}>Click here</Text>
      </TouchableOpacity>
      <TouchableOpacity disabled style={styles.disabledButton}>
        <Text style={styles.disabledButtonText}>Disabled</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} style={styles.iconButton}>
        <Ionicons name="ios-cart" size={24} color={tw.color('white')} />
        <Text style={styles.iconButtonText}>Shopping Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity disabled style={styles.loadingButton}>
        <Text style={styles.loadingButtonText}>Loading</Text>
        <ActivityIndicator color={tw.color('white')} />
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  container: tw.style(
    'bg-blue-50',
    'flex',
    'flex-1',
    'justify-center',
    'items-center',
  ),
  // Primary button
  button: tw.style(
    'px-5',
    'py-2',
    'rounded-lg',
    'bg-blue-800',
    'shadow-md',
    'mt-4',
  ),
  buttonText: tw.style(
    'text-white',
    'text-lg',
    'font-semibold',
    'tracking-wide',
  ),
  // Disabled button
  disabledButton: tw.style('px-5', 'py-2', 'rounded-lg', 'bg-gray-300', 'mt-4'),
  disabledButtonText: tw.style(
    'text-gray-500',
    'text-lg',
    'font-semibold',
    'tracking-wide',
  ),
  // Icon button
  iconButton: tw.style(
    'flex',
    'flex-row',
    'px-5',
    'py-2',
    'rounded-lg',
    'bg-green-700',
    'shadow-md',
    'mt-4',
  ),
  iconButtonText: tw.style(
    'text-white',
    'text-lg',
    'font-semibold',
    'tracking-wide',
    'ml-3',
  ),
  // Loading button
  loadingButton: tw.style(
    'flex',
    'flex-row',
    'px-5',
    'py-2',
    'rounded-lg',
    'bg-pink-600',
    'mt-4',
  ),
  loadingButtonText: tw.style(
    'text-white',
    'text-lg',
    'font-semibold',
    'tracking-wide',
    'mr-3',
  ),
};
