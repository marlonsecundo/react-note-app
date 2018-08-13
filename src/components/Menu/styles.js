import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from '../../styles';
export const radius = metrics.screen.width / 2;

const styles = StyleSheet.create({

    rootContainer:
    {
        position: 'absolute',
        width: metrics.screen.width,
        height: metrics.headerHeight,
        zIndex: 1,
    },
    roundContainer:
    {
        position: 'absolute',
        width: metrics.screen.width,
        alignItems: 'center',
        flexDirection: 'column',
    },
    circleContainer:
    {
        position: 'absolute',
        flex: 1,
        backgroundColor: colors.primary,
        elevation: 3,
        minHeight: metrics.screen.width,
        width: metrics.screen.width,
        transform: [{ scaleX: 1.5 }, { translateY: - metrics.screen.width / 1.5 }],
    },
    menuContainer:
    {
        flex: 1,
        opacity: 1,
    },
    buttonsContainer:
    {
        zIndex: 2,
        padding: 10,
        elevation: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
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
export { colors, fonts, metrics };