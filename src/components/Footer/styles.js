import { StyleSheet } from 'react-native';
import { colors, fonts, general, metrics } from '../../styles';
const styles = StyleSheet.create({
    rootContainer:
    {
        position: 'absolute',
        zIndex: 1,
        opacity: 1,
        elevation: 7,
        backgroundColor: colors.primary,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: metrics.footerHeight,
        width: metrics.screen.width,
        top: metrics.screen.height - metrics.footerHeight,
    },
    container:
    {
        padding: 10,       
    },
    text:
    {
        color: colors.secondary,
        fontSize: fonts.text,
        textAlign: 'center'
    }
});

export default styles;
export { colors, fonts, metrics };