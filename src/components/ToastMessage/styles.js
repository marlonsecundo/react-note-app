import { StyleSheet } from 'react-native';
import { colors, fonts, general, metrics } from '../../styles';


const styles = StyleSheet.create({

    rootContainer:
    {
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1,
    },
    container:
    {
        margin: metrics.padding,
        padding: metrics.padding,
        backgroundColor: colors.third,
        flex: 0,
        borderRadius: 100,
        elevation: 5
    },
    text: {
        fontSize: fonts.text,
        color: colors.high,
        paddingHorizontal: 5,
        fontFamily: fonts.family,
    }
});

export default styles;
export { colors, fonts, metrics };