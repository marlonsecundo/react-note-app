import React, { Component } from 'react';
import { View, Text, Animated, Easing } from 'react-native';

export const direction = {
    normal: 'NORMAL',
    reverse: 'REVERSE',
    none: 'NONE',
}

class TransitionView extends Component {


    constructor(props) {
        super(props);
        this.state = {
            anim: new Animated.Value(0),
            direction: direction.none,

        };
    }

    componentDidUpdate = (prevProps) => {

        if (this.props.start !== prevProps.start) {
            switch (this.props.start) {
                case direction.normal:
                    this.startNormal();
                    this.setState({ direction: direction.normal });
                    break;
                case direction.reverse:
                    this.startReverse();
                    this.setState({ direction: direction.reverse });
                    break;
            }
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

    interpolateTransition = () => {

        let y = 0;

        switch (this.props.start) {

            case direction.normal:

                y = this.state.anim.interpolate({
                    inputRange: [0, .9, 1],
                    outputRange: [this.props.startPos.y, this.props.endPos.y + 10, this.props.endPos.y]
                })

                return y;

            case direction.reverse:

                y = this.state.anim.interpolate({
                    inputRange: [1, 1.1, 2],
                    outputRange: [this.props.endPos.y, this.props.endPos.y + 10, this.props.startPos.y]
                })

                return y;

            default: return y;
        }
    }

    reset = () => {
        this.state.anim.setValue(0);
    }


    render() {

        let y = this.interpolateTransition();

        return (<Animated.View style={[this.props.style, {
            transform: [{ translateY: y }]
        }]}>
            {this.props.children}
        </Animated.View>
        );

    }
}

export default TransitionView;
