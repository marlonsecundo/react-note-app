import { StyleSheet, Dimensions } from 'react-native';
import { colors, metrics, fonts, general } from '../../styles';

export const screenWidth = Dimensions.get("window").width;
export const height =  screenWidth - (screenWidth / 1.5) + 2;
export const radius = screenWidth / 2;

const styles = StyleSheet.create({

    rootContainer:
    {
        ...general.container,
        padding: 0,
        zIndex: 1,
        position: 'absolute',
        opacity: 1,
        paddingBottom: 3,
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
        borderRadius: radius,
    },
    menuContainer:
    {
        flex: 1,
        elevation: 3,
        minHeight: 65,
        padding: metrics.padding,
        paddingBottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        opacity: 1,
    },
    title:
    {
        color: colors.secondary,
        fontFamily: fonts.family,
        fontSize: fonts.title,
        fontStyle: 'italic',
    },
    plusContainer:
    {
        alignSelf: 'flex-end',
        marginBottom: 5,
    }

});

export default styles;
export { colors, fonts };