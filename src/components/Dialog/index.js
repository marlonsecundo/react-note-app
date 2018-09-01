import React, { Component } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import styles from './styles';

class Dialog extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal transparent={true} animationType="fade" visible={this.props.visible} onRequestClose={this.props.onCancel} >
                <View style={styles.rootContainer}>

                    <View style={styles.container}>
                        <Text style={styles.text}>{this.props.text}</Text>

                        <View style={styles.btContainer}>
                            <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
                                <Text style={styles.btText}>Confirmar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={this.props.onCancel}>
                                <Text style={styles.btText}>Cancelar</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>
            </Modal>
        );
    }
}

export default Dialog;
