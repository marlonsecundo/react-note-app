import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TimePickerAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles, { colors, metrics } from './styles';
class AlarmButton extends Component {
    constructor(props) {
        super(props);
        let time = !!this.props.time ? this.props.time : { hour: 0, minute: 0 };

        this.state = {
            hour: time.hour,
            minute: time.minute,
            isSet: !!this.props.isSet ? this.props.isSet : false,
            disabled: !!this.props.disabled ? this.props.disabled : false,
        };
    }

    componentDidUpdate = () => {

    }

    setAlarm = (hour, minute) => {
        let now = new Date(Date.now());
        let date = new Date();

        now.setSeconds(0);

        date.setHours(hour);
        date.setMinutes(minute);

        if (!!this.props.onChangeTime && date.getTime() > now.getTime()) {
            this.props.onChangeTime({ hour, minute });
            this.setState({ hour, minute, isSet: true });
        }

    }

    cancelAlarm = () => {
        if (this.state.isSet) {
            this.setState({ hour: 0, minute: 0, isSet: false });
            this.props.onChangeTime(null);
        }
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



        return (
            <View>
                <TouchableOpacity disabled={this.state.disabled} onPress={this.onPress} style={[styles.rootContainer, this.props.style]}>
                    {this.state.isSet ? this.renderAlarmIsSet() : this.renderAlarmNotSet()}
                </TouchableOpacity>
            </View>
        );
    }

    renderAlarmIsSet = () => {

        let { hour, minute } = this.state;

        if (this.state.isSet && this.state.minute < 10)
            minute = minute + "0";

        return (
            <View style={styles.container}>
                <Text style={styles.textAlarm}>{hour}:{minute}</Text>
                <Icon name="bell" color={colors.secondary} size={metrics.iconSmall}></Icon>
            </View>
        );
    }

    renderAlarmNotSet = () => (
        <View style={styles.container}>
            <Icon name="bell-off" color={colors.secondary} size={metrics.iconSmall}></Icon>
        </View>
    )

}

export default AlarmButton;
