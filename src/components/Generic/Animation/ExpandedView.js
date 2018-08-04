import React, { Component } from 'react';
import { View, Animated, Easing } from 'react-native';

class ExpandedView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isExpanded: this.props.isExpanded,
            duration: this.props.duration,
            maxHeight: this.props.maxHeight,
            minHeight: this.props.minHeight,
            height: this.props.isExpanded ?
                new Animated.Value(this.props.maxHeight) : new Animated.Value(this.props.minHeight)
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.isExpanded !== prevProps.isExpanded) {
            this.props.isExpanded ?  this.startExpansion() : this.startShrinkage();
        }
    }

    startExpansion() {
        Animated.timing(this.state.height, {
            toValue: this.state.maxHeight,
            easing: Easing.bezier(.42, 0, .58, 1),
            duration: this.state.duration,
        }).start();
    }

    startShrinkage() {
        Animated.timing(this.state.height, {
            toValue: this.state.minHeight,
            easing: Easing.bezier(.42, 0, .58, 1),
            duration: this.state.duration,
        }).start();
    }

    render() {
        return (
            <Animated.View style={[this.props.style, {
                height: this.state.height,
            }]}>
                {this.props.children}
            </Animated.View>
        );
    }
}

export default ExpandedView;