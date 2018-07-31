import { StyleSheet, Dimensions } from 'react-native';
import { colors, metrics, fonts, general } from '../../styles';

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({

    rootContainer:
    {
        ...general.container,
        padding: 0,
        zIndex: 1,
        position: 'absolute',
        width: screenWidth,
        opacity: 1,
    },
    circleContainer:
    {
        position: 'absolute',
        flex: 1,
        backgroundColor: colors.primary,
        elevation: 3,
        minHeight: screenWidth,
        width: screenWidth,
        transform: [{ scaleX: 1.5 }, { translateY: - screenWidth / 1.5 }],
        borderRadius: screenWidth / 2,
    },
    menuContainer:
    {
        flexDirection: 'column',
        elevation: 3,
    },
    topMenuContainer:
    {
        padding: metrics.padding,
        paddingBottom: 5,
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