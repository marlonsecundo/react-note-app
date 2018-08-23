import React, { Component } from 'react';
import { View, Text, Animated, Easing } from 'react-native';

class TransitionView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            anim: new Animated.Value(0),
        };
    }

    componentDidUpdate = (prevProps) => {

        if (this.props.run !== prevProps.run) {
            if (this.props.run)
                this.startNormal()
            else
                this.startReverse();
        }
    }

    startNormal = () => {

        this.state.anim.setValue(0);

        Animated.timing(this.state.anim, {
            toValue: 1,
            duration: this.props.duration,
            easing: Easing.bezier(0.215, 0.610, 0.355, 1.000),
        }).start(() => { });

    }

    startReverse = () => {

        this.state.anim.setValue(1);

        Animated.timing(this.state.anim, {
            toValue: 2,
            duration: this.props.duration,
            easing: Easing.bezier(0.550, 0.055, 0.675, 0.190),
        }).start(() => { });
    }


    render() {

        let y = this.state.anim.interpolate({
            inputRange: [0, .9, 1, 1.1, 2],
            outputRange: [
                this.props.startPos.y,
                this.props.endPos.y + 10,
                this.props.endPos.y,
                this.props.endPos.y + 10,
                this.props.startPos.y]
        });

        return (<Animated.View style={[this.props.style, {
            transform: [{ translateY: y }]
        }]}>
            {this.props.children}
        </Animated.View>
        );

    }
}

export default TransitionView;
