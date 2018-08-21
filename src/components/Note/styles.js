import { StyleSheet } from 'react-native';
import { colors, fonts, general, metrics } from '../../styles';
const styles = StyleSheet.create({
    rootContainer:
    {
        ...general.container,
        flex: 0,
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: metrics.screen.width - metrics.padding * 2 - 10,
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
        marginBottom: 20,
    },
    bottomContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',

    },
    btTrash:{
        padding: 8,
    }



});

export default styles;
export { colors, fonts, metrics };