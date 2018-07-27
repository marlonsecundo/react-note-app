import React, { PureComponent } from 'react';
import { View, Text, Animated, Easing, TouchableWithoutFeedback, Platform } from 'react-native';
import PropTypes from 'prop-types';
class RippleView extends React.PureComponent {

    initialOpacity = 0.12;
    initialScale = 0.01;

    constructor(props) {
        super(props);

        this.state = {
            scale: new Animated.Value(this.initialScale),
            opacity: new Animated.Value(this.initialOpacity),
            height: 0,
            width: 0,
            radius: 0,
        };


    }
    onPressedIn() {
        Animated.timing(this.state.scale, {
            toValue: 1.1,
            duration: 225,
            easing: Easing.bezier(0.0, 0.0, 0.2, 1),
            useNativeDriver: Platform.OS === 'android',
        }).start();
    }
    onPressedOut() {
        Animated.timing(this.state.opacity, {
            toValue: 0,
            useNativeDriver: Platform.OS === 'android',
        }).start(() => {
            this.state.scale.setValue(0.01);
            this.state.opacity.setValue(this.initialOpacity);
        });
    }

    render() {

        return (
            <TouchableWithoutFeedback style={{flex:1}} onLayout={(event) => { this.onLayout(event) }} onPressIn={() => { this.onPressedIn() }} onPressOut={() => { this.onPressedOut() }}>
                <View
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Animated.View
                        style={{
                            position: 'absolute',
                            height: this.state.radius * .9,
                            width: this.state.radius * .9,
                            transform: [{ scale: this.state.scale }],
                            opacity: this.state.opacity,
                            borderRadius: this.state.radius / 2,
                            backgroundColor: this.props.color || 'black',
                        }}
                    />
                    {this.props.children}
                </View>
            </TouchableWithoutFeedback>
        );
    }

    onLayout(event) {
        let width = event.nativeEvent.layout.width;
        let height = event.nativeEvent.layout.height;
        let radius = width < height ? width : height;
        this.setState({ width: width, height: height, radius: radius })
    }
}

RippleView.propTypes = {
    color: PropTypes.string.isRequired,
};

RippleView.defaultProps = {
    color: "white",
}

export default RippleView;
