import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RotaSistema from './src/components/Routes';

export default function App() {
  return (
      <SafeAreaProvider>
          <RotaSistema></RotaSistema>
      </SafeAreaProvider>
  );
}