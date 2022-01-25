import AppLoading from 'expo-app-loading';
import { Platform, StyleSheet, Text, View, StatusBar, Image, ImageBackground, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import { Icons } from './assets/Themes'; 
import { Profiles } from './assets/Themes'; 
import { TouchableWithoutFeedback } from 'react-native-web';

import NavigationTop from './NavigationTop';
import Profile from './Profile';
import NavigationBottom from './NavigationBottom';

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  StatusBar.setBarStyle(Themes.light.statusBar);

  return (
    <View style={styles.container}>
      <NavigationTop/>
      <Profile/>
      <NavigationBottom/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.light.bg,
    alignItems: 'center',
    paddingTop: 100,
  },
});
