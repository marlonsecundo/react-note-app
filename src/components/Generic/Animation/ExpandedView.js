import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';

import PropTypes from 'prop-types'; 

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
            <Animated.View pointerEvents="box-none" style={[this.props.style, {
                maxHeight: this.state.height,
                flex: 1,
            }]}>
              
                {this.props.children}
            </Animated.View>
        );
    }
}

ExpandedView.propTypes = {
    isExpanded : PropTypes.bool.isRequired,
    maxHeight : PropTypes.number.isRequired,
    minHeight: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
}

export default ExpandedView;