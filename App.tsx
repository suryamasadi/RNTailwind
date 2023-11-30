import React from 'react';
import {
  Text,
  useColorScheme,
  View,
  SafeAreaView
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import utilities from './tailwind.json';
// import { useTailwind, TailwindProvider } from 'tailwind-rn';
import tw from 'twrnc'

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={tw`h-full`}>
    <View style={tw`pt-12 items-center`}>
      <View style={tw`bg-blue-200 px-3 py-1 rounded-full`}>
        <Text style={tw`text-blue-800 font-semibold`}>
          Hello Tailwind
        </Text>
      </View>
    </View>
  </SafeAreaView>
  );
}

export default App;
