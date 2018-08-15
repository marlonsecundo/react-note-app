import { StyleSheet } from 'react-native';
import { colors, fonts, general, metrics } from '../../styles';
const styles = StyleSheet.create({
    rootContainer:
    {
        padding: metrics.padding,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        flexWrap: 'nowrap'
    },
    textAlarm:
    {
        color: colors.secondary,
        marginRight: 5,
    },

});

export default styles;
export { colors, fonts, metrics };