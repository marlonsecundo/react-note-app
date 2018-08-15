import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles, { colors, metrics} from './styles';
class AlarmButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <TouchableOpacity style={[styles.rootContainer, this.props.style]}>
                <Text style={styles.textAlarm}>10:50</Text>
                <Icon name="bell" color={colors.secondary} size={metrics.iconSmall}></Icon>
            </TouchableOpacity>

        );
    }
}

export default AlarmButton;
