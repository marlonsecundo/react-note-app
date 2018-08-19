import { StyleSheet, Dimensions } from 'react-native';
import { colors, fonts, general, metrics } from '../../styles';

const styles = StyleSheet.create({
    rootContainer:
    {
        ...general.container,
        backgroundColor: colors.backgroundModal,
    },
    container:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerContainer:
    {

    },
    picker:
    {
        height : 50,
        width: 300,
    }
    
});

export default styles;
export { colors, fonts, metrics };