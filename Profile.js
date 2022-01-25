import AppLoading from 'expo-app-loading';
import { Platform, StyleSheet, Text, View, StatusBar, Image, ImageBackground, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import { Icons } from './assets/Themes';
import { Profiles } from './assets/Themes';
import { TouchableWithoutFeedback } from 'react-native-web';

export default function Profile() {
    return (
        <View style={styles.profile}>
            <ImageBackground source={Profiles.mtl.image}
                style={styles.profilePic}
                imageStyle={{ borderRadius: 10 }}>
                <Text style={styles.name}>
                    {Profiles.mtl.name}
                </Text>
                <Text style={styles.smallText}>
                    {Profiles.mtl.caption}
                </Text>
            </ImageBackground>

            <View style={styles.hotTakeContainer}>
                <Text style={styles.hotTake}>
                    My hottest take
                </Text>
                <View style={styles.audio}>
                    <Image source={Icons.player.light} style={styles.player} />
                    <Image source={Icons.audioWave.light} style={styles.audioWave} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    profile: {
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: '10%',
    },
    profilePic: {
        width: '100%',
        maxWidth: 500,
        maxHeight: 550,
        aspectRatio: 1 / 1.1,
        shadowColor: Themes.light.shadows.shadowColor,
        shadowOpacity: Themes.light.shadows.shadowOpacity,
        shadowRadius: Themes.light.shadows.shadowRadius,
        shadowOffset: Themes.light.shadows.shadowOffset,
        justifyContent: 'space-between',
    },
    name: {
        fontFamily: 'Sydney',
        fontSize: 32,
        color: Themes.light.textSecondary,
        margin: 10,
    },
    smallText: {
        fontFamily: 'Sydney',
        fontSize: 18,
        color: Themes.light.textSecondary,
        margin: 10,
    },
    hotTakeContainer: {
        alignItems: 'center',
        aspectRatio: 9 / 4,
        width: '100%',
        maxWidth: 500,
        maxHeight: 222,
        justifyContent: 'center',
        margin: 20,
        borderRadius: 30,
        backgroundColor: Themes.light.bgSecondary,
        shadowColor: Themes.light.shadows.shadowColor,
        shadowOpacity: Themes.light.shadows.shadowOpacity,
        shadowRadius: Themes.light.shadows.shadowRadius,
        shadowOffset: Themes.light.shadows.shadowOffset,
    },
    audio: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    player: {
        width: '17%',
        aspectRatio: 1 / 1,
        margin: 5,
    },
    audioWave: {
        width: '70%',
        aspectRatio: 5.5 / 1,
        margin: 5,
    },
    hotTake: {
        fontFamily: 'Sydney',
        fontSize: 28,
        color: Themes.light.text,
        width: '90%',
        margin: 5,
    },
});