import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Animated } from 'react-native';
import AlarmButton from '../AlarmButton';
import Icon from 'react-native-vector-icons/Feather';
import styles, { colors, metrics } from './styles';

import * as notesActions from '../../redux/notes/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import animations from '../../styles/animations';

export class Note extends Component {


    constructor(props) {
        super(props);
        this.state = {
            anim: new Animated.Value(0),
            isVisible: false,
        }
    }

    componentDidMount = () => {
        this.showNote();
        this.setState({ isVisible: true })
    }


    onBtDeletePress = () => {
        Animated.timing(this.state.anim, {
            toValue: 2,
            easing: animations.easeOut,
            duration: 500,
        }).start(() => {
            this.props.deleteNote(this.props.note);
        });
    }

    render() {


        return (

            <TransitionView style={[styles.rootContainer, this.getAnimStyle()]} {...this.getTransitionProps()} start={this.state.transition}>
                <Text style={styles.text}>{this.props.note.text}</Text>
                <View style={styles.bottomContainer}>
                    <TouchableOpacity style={styles.btTrash} onPress={this.onBtDeletePress}>
                        <Icon name="trash-2" color={colors.secondary} size={metrics.iconSmall}></Icon>
                    </TouchableOpacity>
                    <AlarmButton></AlarmButton>
                </View>
            </TransitionView>
        )
    }

    getTransitionProps = () => {
        return {
            startPos: { x: 0, y: -50 },
            endPos: { x: 0, y: 0 },
            duration: 500,
            run: this.state.isVisible
        }
    }

    showNote = () => {
        Animated.timing(this.state.anim, {
            toValue: 1,
            easing: animations.easeOut,
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

const mapDispatchToProps = (dispatch) => bindActionCreators(notesActions, dispatch);

export default connect(null, mapDispatchToProps)(Note);