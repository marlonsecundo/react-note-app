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


    onSelectTime = () => {

    }

    onPress = async () => {
        try {
            const { action, hour, minute } = await TimePickerAndroid.open({
                hour: 20,
                minute: 0,
                is24Hour: true,
            });
            if (action !== TimePickerAndroid.dismissedAction) {
                this.setState({ hour, minute, isSet: true });
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
                    { this.state.isSet 
                    ? <Text style={styles.textAlarm}>{hour}:{minute}</Text> 
                    : <Text></Text> }
                    <Icon name="bell" color={colors.secondary} size={metrics.iconSmall}></Icon>
                </TouchableOpacity>
            </View>
        );
    }

}

export default AlarmButton;
