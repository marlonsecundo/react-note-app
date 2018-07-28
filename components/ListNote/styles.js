import { StyleSheet } from 'react-native';
import { colors, fonts, general } from '../../styles';
const styles = StyleSheet.create({

    rootContainer:
    {
        ...general.container,
        padding: 0,
        flexGrow: 4,
    },

});

export default styles;
export { colors, fonts };