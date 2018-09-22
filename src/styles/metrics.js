import { Dimensions, Platform } from 'react-native';

screen = Dimensions.get("window");
screen.height -= Platform.OS === "android" ? 25 : 0;

export default {

    padding: 15,
    iconBig: 26,
    iconMiddle: 20,
    iconSmall: 15,
    newNoteHeight: 220,
    headerHeight: 345,
    minHeaderHeight: 70,
    footerHeight: 40,
    roundHeight : screen.width - (screen.width / 1.5) + 2,
    screen:  screen,

}