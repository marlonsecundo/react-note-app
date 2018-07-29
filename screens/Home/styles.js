import { StyleSheet } from 'react-native';
import { general, colors, metrics, fonts } from '../../styles';
const styles = StyleSheet.create({
    rootContainer:
    {
        ...general.container,
        backgroundColor: colors.background,
        padding: 0,
    },
    footer:
    {
        padding: 10,
        backgroundColor: colors.primary,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    text:
    {
        color: colors.secondary,
        fontSize: fonts.text,
        textAlign: 'center'
    }

});

export default styles;