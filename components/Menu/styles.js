import { StyleSheet, Dimensions } from 'react-native';
import { colors, metrics, fonts, general } from '../../styles';

const screenWidth = Dimensions.get("window").width;
const height =  screenWidth - (screenWidth / 1.5);

const styles = StyleSheet.create({

    rootContainer:
    {
        ...general.container,
        padding: 0,
        zIndex: 1,
        position: 'absolute',
        width: screenWidth,
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
        borderRadius: screenWidth / 2,
    },
    menuContainer:
    {
        elevation: 3,
        minHeight: 65,
        height: height,
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