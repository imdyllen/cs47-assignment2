import AppLoading from 'expo-app-loading';
import { Platform, StyleSheet, Text, View, StatusBar, Image, ImageBackground, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import { Icons } from './assets/Themes';

export default function NavigationBottom() {
    return (
        <SafeAreaView style={styles.actionBar}>
            <View style={styles.actionButton}>
                <Image source={Icons.discover.light} style={styles.bottomIcon} />
                <Text style={styles.smallText}>
                    Discover
                </Text>
            </View>

            <View style={styles.actionButton}>
                <Image source={Icons.heart.light} style={styles.bottomIcon} />
                <Text style={styles.smallText}>
                    Matches
                </Text>
            </View>

            <View style={styles.actionButton}>
                <Image source={Icons.messages.light} style={styles.bottomIcon} />
                <Text style={styles.smallText}>
                    DMs
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    actionBar: {
        backgroundColor: Themes.light.navigation,
        position: 'absolute',
        alignItems: 'center',
        height: 130,
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },
    actionButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: '5%',
    },
    bottomIcon: {
        width: 40,
        height: 40,
    },
    smallText: {
        fontFamily: 'Sydney',
        fontSize: 18,
        color: Themes.light.textSecondary,
        margin: 10,
    },
});