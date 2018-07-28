import { StyleSheet } from 'react-native';
import { colors, metrics, fonts, general } from '../../styles';
const styles = StyleSheet.create({

    rootContainer:
    {
        ...general.container,
        padding: 0,
        paddingBottom: metrics.padding,
    },
    circleContainer:
    {
        position: 'absolute',
        flex: 1,
        backgroundColor: colors.primary,
        elevation: 1,
    },
    menuContainer:
    {
        flexDirection: 'column',
        elevation: 3,
    },
    topMenuContainer:
    {
        padding: metrics.padding,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title:
    {
        color: colors.secondary,
        fontFamily: fonts.family,
        fontSize: fonts.title,
        fontStyle: 'italic',
    },
    btPlusContainer:
    {
        marginBottom: 10,
    }




});

export default styles;
export { colors, fonts };