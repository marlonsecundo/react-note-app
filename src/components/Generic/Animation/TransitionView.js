import React, { Component } from 'react';
import { Animated } from 'react-native';
import animations from '../../../styles/animations';

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
            easing: animations.easeOut,
        }).start(() => { });

    }

    startReverse = () => {

        this.state.anim.setValue(1);

        Animated.timing(this.state.anim, {
            toValue: 2,
            duration: this.props.duration,
            easing: animations.easeIn,
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
