import { StyleSheet } from 'react-native';
import { general, colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: colors.background,
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
    },
    titleContainer: {
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
    },
    title: {
        padding: 10,
        fontFamily: fonts.family,
        fontSize: fonts.title,
        color: colors.secondary,
    },
    dev: {
        fontSize: fonts.title,
        color: colors.secondary,
        fontFamily: fonts.family,
        margin: metrics.padding,
        alignSelf: 'flex-start',
        marginBottom: 30,

    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        alignSelf: 'center',
    },
    name: {
        fontFamily: fonts.family,
        fontSize: fonts.title,
        color: colors.secondary,
        margin: metrics.padding,
        marginBottom: 30,

    },
    rate: {
        fontFamily: fonts.family,
        fontSize: fonts.subtitle,
        color: colors.secondary,
        margin: 5,

    }
});

export default styles;