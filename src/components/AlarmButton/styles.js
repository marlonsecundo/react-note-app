import { StyleSheet } from 'react-native';
import { colors, fonts, general, metrics } from '../../styles';
const styles = StyleSheet.create({
    rootContainer:
    {
        alignSelf: 'flex-end',
    },
    container:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'nowrap',
        padding: 8,
    },
    textAlarm:
    {
        color: colors.secondary,
        marginRight: 5,
        fontFamily: fonts.family,
        fontSize: fonts.text,
        paddingTop: 4,
        
    },

});

export default styles;
export { colors, fonts, metrics };