import React, { Component } from 'react';
import { View, Text, TextInput, Animated, Platform, Easing } from 'react-native';
import { ButtonIconColor } from '../Generic';
import { TransitionView } from '../Generic/Animation';
import AlarmButton from '../AlarmButton';

import * as notesActions from '../../redux/notes/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles, { colors, metrics } from './styles';

export class NewNoteView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            anim: new Animated.Value(0),
            text: "",
        }
    }

    componentDidUpdate() {
        this.props.isExpanded ? this.onExpanded() : this.onShrink();
    }

    render() {

        return (
            <TransitionView style={[styles.rootContainer, this.props.style]} {...this.getTransitionProps()} >
                <Animated.View style={[styles.btContainer, this.getBtAnimStyle()]}>
                    <ButtonIconColor onPress={this.onBtConfirmPress} size={metrics.iconMiddle} icon="check" startColor={colors.secondary} endColor={colors.high}></ButtonIconColor>
                </Animated.View>
                <View style={styles.container}>
                    <Text style={styles.title}>Nova Nota</Text>
                    <TextInput onChangeText={this.onChangeText} multiline={true} caretHidden={false} placeholderTextColor={"#FFFFFF50"} underlineColorAndroid={"#FFFFFF00"} placeholder={"Isto é algo que terei que me lembrar mais tarde..."} style={styles.input}></TextInput>
                </View>
                <AlarmButton style={styles.btAlarm}></AlarmButton>
            </TransitionView>
        );
    }

    onBtConfirmPress = () => this.props.newNote(this.state.text);

    onChangeText = (text) => this.setState({ text });

    onExpanded = () => {

        Animated.timing(this.state.anim, {
            toValue: 1,
            duration: 400,
            easing: Easing.bezier(0.215, 0.610, 0.355, 1.000),
            useNativeDriver: Platform.OS === "android"
        }).start();
    }

    onShrink = () => {

        Animated.timing(this.state.anim, {
            toValue: 2,
            duration: 400,
            easing: Easing.bezier(0.215, 0.610, 0.355, 1.000),
            useNativeDriver: Platform.OS === "android",
        }).start();
    }

    getTransitionProps = () => ({
        startPos: { x: 0, y: - metrics.newNoteHeight - 100 },
        endPos: { x: 0, y: -50 },
        duration: 400,
        start: this.props.start
    });

    getBtAnimStyle = () => ({
        transform: [{
            translateY: this.state.anim.interpolate({
                inputRange: [0, 1, 2],
                outputRange: [-50, 0, 40]
            })
        }]
    });
}

const mapStateToProps = (state) => ({
    isExpanded: state.layout.isExpanded,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(notesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NewNoteView);