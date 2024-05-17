import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/Navigation';
import { RecetasProvider } from './src/RecetasContext';

export default function App() {
  return (
    <RecetasProvider>
      <Navigation />
    </RecetasProvider>
  );
}

