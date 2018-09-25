import { StyleSheet } from 'react-native';
import { general, colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: colors.background,
        flexDirection: 'column',
        flex: 1,
    },
    titleContainer: {
        backgroundColor: colors.primary,
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    title: {
        padding: 10,
        fontFamily: fonts.family,
        fontSize: fonts.big,
        color: colors.secondary,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
    },
    name: {
        fontFamily: fonts.family,
        fontSize: fonts.title,
        color: colors.secondary,
        marginLeft: 30,
    },
    text:
    {
        fontFamily: fonts.family,
        fontSize: fonts.text,
        color: colors.secondary,
    },
    rateContainer:
    {
        margin: metrics.padding,
    },
    rate: {
        fontFamily: fonts.family,
        fontSize: fonts.subtitle,
        color: colors.secondary,
        margin: 5,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        flex: 1,
        justifyContent: 'center',
    },
    btContainer:
    {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button:
    {
        padding: 10,
        backgroundColor: colors.primary,
        flex: 1,
    },
});

export default styles;
export { colors, fonts, metrics };