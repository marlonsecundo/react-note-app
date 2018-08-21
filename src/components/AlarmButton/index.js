import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TimePickerAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles, { colors, metrics } from './styles';
class AlarmButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hour: null,
            minute: null,
            isSet: false,
        };
    }

    setAlarm = (hour, minute) => {
        this.setState({ hour, minute, isSet: true });
    }

    cancelAlarm = () => {
        this.setState({ hour: null, minute: null, isSet: false });
    }


    onPress = async () => {
        try {
            const { action, hour, minute } = await TimePickerAndroid.open({
                hour: 20,
                minute: 0,
                is24Hour: true,
            });
            if (action !== TimePickerAndroid.dismissedAction) {
                this.setAlarm(hour, minute);
            }
            else {
                this.cancelAlarm();
            }

        }
        catch ({ code, message }) {

        }
    }

    render() {


        let { hour, minute } = this.state;

        if (this.state.isSet && this.state.minute < 10)
            minute = minute + "0";

        return (
            <View>
                <TouchableOpacity onPress={this.onPress} style={[styles.rootContainer, this.props.style]}>
                    {this.state.isSet
                        ? <View style={styles.container}>
                            <Text style={styles.textAlarm}>{hour}:{minute}</Text>
                            <Icon name="bell" color={colors.secondary} size={metrics.iconSmall}></Icon>
                        </View>
                        : <View style={styles.container}>
                            <Icon name="bell-off" color={colors.secondary} size={metrics.iconSmall}></Icon>
                        </View>}


                </TouchableOpacity>
            </View>
        );
    }

}

export default AlarmButton;
