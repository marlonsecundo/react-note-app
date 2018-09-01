import { StyleSheet } from 'react-native';
import { colors, fonts, general, metrics } from '../../styles';
const styles = StyleSheet.create({
    rootContainer:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.backgroundModal,
    },
    container: {
        backgroundColor: colors.third,
        width: 300,
        borderRadius: 10,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        elevation: 1,
    },
    btContainer: {
        flexDirection: 'row',
    },
    button: {
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    btText: {
        padding: metrics.padding,
        fontSize: fonts.subtitle,
        fontFamily: fonts.family,
        color: colors.high,
        paddingVertical: 10,
    },
    text:{
        padding: metrics.padding,
        fontSize: fonts.subtitle,
        fontFamily: fonts.family,
        color: colors.secondary,
    }
});

export default styles;
export { colors, fonts, metrics };