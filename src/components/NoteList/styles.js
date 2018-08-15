import { StyleSheet, Dimensions } from 'react-native';
import { colors, fonts, general, metrics } from '../../styles';


const styles = StyleSheet.create({

    rootContainer:
    {
        ...general.container,
        flexGrow: 4,
        padding: 0,
    },
    noteContainer:
    {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: metrics.padding,
        paddingVertical: 0,
    },
    topContainer:
    {
        height: metrics.roundHeight,
        width: metrics.screen.width,
    },
    bottomContainer: 
    {
        height: metrics.footerHeight,
        width: metrics.screen.width,
    },
});

export default styles;
export { colors, fonts, metrics };