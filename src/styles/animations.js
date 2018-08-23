import { Easing } from 'react-native';

export default {
    easeInOut: Easing.bezier(0.645, 0.045, 0.355, 1.000),
    easeOut: Easing.bezier(0.215, 0.610, 0.355, 1.000),
    easeIn: Easing.bezier(0.550, 0.055, 0.675, 0.190),
}