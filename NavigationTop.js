import AppLoading from 'expo-app-loading';
import { Platform, StyleSheet, Text, View, StatusBar, Image, ImageBackground, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import { Icons } from './assets/Themes';

export default function NavigationTop() {
    return (
        <SafeAreaView style={styles.navContainer}>
            <Image source={Icons.menu.light} style={styles.navIcon} />
            <Text style={styles.logo}>
                ensom
            </Text>
            <Image source={Icons.sun} style={styles.navIcon} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    navContainer: {
        position: 'absolute',
        alignItems: 'center',
        height: Platform.OS === 'ios' ? '10%' : '15%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    navIcon: {
        width: '9%',
        aspectRatio: 1 / 1,
    },
    logo: {
        fontFamily: 'Sydney-Bold',
        color: Themes.light.text,
        fontSize: 32,
    },
});