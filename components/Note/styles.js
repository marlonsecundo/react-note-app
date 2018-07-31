import { StyleSheet } from 'react-native';
import { colors, fonts, general, metrics } from '../../styles';
const styles = StyleSheet.create({
    container:
    {
        ...general.container,
        borderRadius: 5,
        flexDirection: 'column',
        paddingBottom: 10,
        backgroundColor: colors.primary,
        elevation: 0.3,
        flex: 0,
        margin: 5,
    },
    text:
    {
        color: colors.secondary,
        fontFamily: fonts.family,
        fontSize: fonts.text,
        alignSelf: 'flex-start',
    },
    btContainer:
    {
        padding: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        flexWrap: 'nowrap'
    },
    textAlarm:
    {
        color: colors.secondary,
        marginRight: 5,
    },



});

export default styles;
export { colors, fonts, metrics };