import React, { Component } from 'react';
import { Modal, View, Text } from 'react-native';
import styles from './styles';

import * as layoutActions from '../../redux/actions/layout.actions';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class ToastMessage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount = () => {

    }

    render() {

        return (
            <Modal transparent={true} visible={this.props.visible} animationType="fade" onRequestClose={this.onClose} onShow={this.onShow}>
                <View style={styles.rootContainer}>
                    <View style={styles.container}>
                        <Text style={styles.text}>{this.props.text}</Text>
                    </View>
                </View>
            </Modal>
        );
    }

    onClose = () => {
        this.props.collapseAlert();
    }

    onShow = () => {
        setTimeout(() => { this.props.collapseAlert() }, 1500);
    }

}

const mapStateToProps = (state) => ({
    visible: state.layout.alert.visible,
    text: state.layout.alert.text,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(layoutActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ToastMessage);