import { StyleSheet } from 'react-native';
import { colors, fonts, general, metrics } from '../../styles';
const styles = StyleSheet.create({

    rootContainer:
    {
        ...general.container,
        flexGrow: 4,
        paddingTop: 0,
    },
    noteContainer:
    {
        flexDirection: 'row',
        flexWrap: 'wrap',
    }

});

export default styles;
export { colors, fonts, metrics };