import { StyleSheet } from 'react-native';
import { colors, fonts, general, metrics } from '../../styles';
const styles = StyleSheet.create({

    rootContainer:
    {
        ...general.container,
        flexGrow: 4,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    container:
    {
        
    }

});

export default styles;
export { colors, fonts };