import { StyleSheet } from 'react-native';
import { colors, fonts, general, metrics } from '../../styles';
const styles = StyleSheet.create({

    rootContainer:
    {
        flex: 1,
        marginRight: 10,
        minWidth: 150,
    },
    container:
    {
        ...general.container,
        borderRadius: 5,
        flexDirection: 'column',
        flex: 0,
        paddingBottom: 10,
        backgroundColor: colors.primary,
        elevation: 1,

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
    },
    textAlarm:
    {
        color: colors.secondary,
        marginRight: 5,
    }



});

export default styles;
export { colors, fonts };