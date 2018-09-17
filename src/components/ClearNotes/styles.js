import { StyleSheet } from 'react-native';
import { colors, fonts, general, metrics } from '../../styles';
const styles = StyleSheet.create({
    rootContainer:
    {
        position: 'absolute',
        zIndex: 1,
        opacity: 1,
        elevation: 15,
        backgroundColor: colors.primary,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: metrics.footerHeight,
        width: metrics.screen.width,
        top: metrics.screen.height - metrics.footerHeight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container:
    {
        padding: 10,       
    },
    text:
    {
        color: colors.secondary,
        fontSize: fonts.footer,
        textAlign: 'center',
        fontFamily: fonts.family,
    }
});

export default styles;
export { colors, fonts, metrics };