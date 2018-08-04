import { StyleSheet, Dimensions } from 'react-native';
import { colors, metrics, fonts, general } from '../../styles';

export const screenWidth = Dimensions.get("window").width;
export const maxHeight = screenWidth - (screenWidth / 1.5) + 2;
export const minHeight = 70;
export const radius = screenWidth / 2;

const styles = StyleSheet.create({

    rootContainer:
    {
        ...general.container,
        padding: 0,
        zIndex: 1,
        position: 'absolute',
        opacity: 1,
        width: screenWidth,
        height: maxHeight,
        marginBottom: 3,
    },
    container: 
    {
        position: 'absolute',
        minHeight: screenWidth,
        width: screenWidth,
        alignItems: 'center',
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
    },
    menuContainer:
    {
        flex: 1,
        elevation: 3,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        opacity: 1,
    },
    title:
    {
        padding: metrics.padding,
        color: colors.secondary,
        fontFamily: fonts.family,
        fontSize: fonts.title,
        fontStyle: 'italic',
        elevation: 4,
    },
    plusContainer:
    {
        alignSelf: 'flex-end',
    }

});

export default styles;
export { colors, fonts };