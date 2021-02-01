import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RotaPrincipal from './Components/Rotas';


export default function App() {
  return (
    <SafeAreaProvider>
      <RotaPrincipal></RotaPrincipal>
    </SafeAreaProvider>
  )
  };