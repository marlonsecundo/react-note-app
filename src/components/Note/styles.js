import { StyleSheet } from 'react-native';
import { colors, fonts, general, metrics } from '../../styles';
const styles = StyleSheet.create({
    container:
    {
        ...general.container,
        flex: 0,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingBottom: 10,
        borderRadius: 5,
        margin: 5,
        elevation: 0.3,
        backgroundColor: colors.primary,
    },
    text:
    {
        color: colors.secondary,
        fontFamily: fonts.family,
        fontSize: fonts.text,
        alignSelf: 'flex-start',
        marginBottom: 10,
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
        fontFamily: fonts.family,
        fontSize: fonts.text,
    },



});

export default styles;
export { colors, fonts, metrics };