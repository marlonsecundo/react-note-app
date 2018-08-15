import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../styles';
const styles = StyleSheet.create({
    rootContainer:
    {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.third,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        maxHeight: metrics.newNoteHeight,
    },
    btContainer:
    {
        marginTop: 10,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        marginBottom: 5,
    },
    container:
    {
        paddingHorizontal: 10,
        flex: 1,
    },
    title:
    {
        fontFamily: fonts.family,
        fontSize: fonts.subtitle,
        color: colors.high,
        alignSelf: 'flex-start',
    },
    input:
    {
        flex: 1,
        textAlignVertical: "top",
    }
});

export default styles;
export { colors, fonts, metrics };