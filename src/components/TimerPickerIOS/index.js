import React, { Component } from 'react';
import { View, Modal, Text, TouchableOpacity, Picker } from 'react-native';
import styles from './styles';

class TimerPickerIOS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }

    componentDidMount = () => {
        this.props.onMount(this.showTimerPicker);
    }

    onPick = () => {
        this.props.onPick();
    }

    showTimerPicker = () => {
        this.setState({ visible: true });
    }

    render() {
        return (
            <Modal transparent={true} visible={this.state.visible} onRequestClose={() => {}}>
                <View style={styles.rootContainer}>
                    <View style={styles.container}>
                        <View style={styles.centerContainer}>
                        </View>
                    </View>

                    <TouchableOpacity onPress={() => { this.setState({ visible: false }); }}>
                        <Text>BOTÃO</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        );
    }
}

export default TimerPickerIOS;
