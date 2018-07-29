import { StyleSheet, Dimensions } from 'react-native';
import { colors, fonts, general, metrics } from '../../styles';
const styles = StyleSheet.create({

    rootContainer:
    {
        flex: 1,
        minWidth: Dimensions.get('window').width - metrics.padding * 2,
        alignItems: 'flex-start',
    },
    container:
    {
        ...general.container,
        borderRadius: 5,
        flexDirection: 'column',
        paddingBottom: 10,
        backgroundColor: colors.primary,
        elevation: 1,
        flex: 0,
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
export { colors, fonts };