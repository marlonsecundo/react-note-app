import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Animated, Easing } from 'react-native';
import AlarmButton from '../AlarmButton';
import TransitionView, { direction } from '../Generic/Animation/TransitionView';
import Icon from 'react-native-vector-icons/Feather';
import styles, { colors, metrics } from './styles';

export class Note extends Component {


    constructor(props) {
        super(props);
        this.state = {
            anim: new Animated.Value(0),
            transition: direction.none
        }
    }

    componentDidMount = () => {
        this.showNote();
        this.setState({ transition: direction.normal });
    }

    componentWillUnmount = () => {
        this.hideNote();
    }

    render() {


        return (

            <TransitionView style={[styles.rootContainer, this.getAnimStyle()]} {...this.getTransitionProps()} start={this.state.transition}>
                <Text style={styles.text}>{this.props.children}</Text>
                <View style={styles.bottomContainer}>
                    <TouchableOpacity style={styles.btTrash}>
                        <Icon name="trash-2" color={colors.secondary} size={metrics.iconSmall}></Icon>
                    </TouchableOpacity>
                    <AlarmButton></AlarmButton>
                </View>
            </TransitionView>
        )
    }

    getTransitionProps = () => ({
        startPos: { x: 0, y: -50 },
        endPos: { x: 0, y: 0 },
        duration: 1000,
    });

    showNote = () => {
        Animated.timing(this.state.anim, {
            toValue: 1,
            easing: Easing.bezier(0.215, 0.610, 0.355, 1.000),
            duration: 1500,
        }).start();
    }

    hideNote = () => {
        Animated.timing(this.state.anim, {
            toValue: 2,
            easing: Easing.bezier(0.550, 0.055, 0.675, 0.190),
            duration: 500,
        }).start();
    }

    getAnimStyle = () => ({
        opacity: this.state.anim.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [0, 1, 0]
        }),
    })

}

export default Note;