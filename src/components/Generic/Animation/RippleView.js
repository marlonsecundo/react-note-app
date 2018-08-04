import React from 'react';
import { View, Animated, Easing, TouchableWithoutFeedback, Platform } from 'react-native';
import PropTypes from 'prop-types';
class RippleView extends React.Component {

    initialOpacity = 0.12;
    initialScale = 0.01;

    constructor(props) {
        super(props);

        this.state = {
            scale: new Animated.Value(this.initialScale),
            opacity: new Animated.Value(this.initialOpacity),
            size: 0,
        };
    }

    componentDidUpdate(prevProps) {

        if (this.props.isPressIn) {
            this.onPressedIn();
        }

        if (this.props.isPressOut) {
            this.onPressedOut();
        }

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
                <View onLayout={(event) => { this.onLayout(event) }}>
                    <View style={{ padding: 10, flexGrow: 0, justifyContent: 'center', alignItems: 'center' }}>
                        <Animated.View
                            style={{
                                position: 'absolute',
                                height: this.state.size * .9,
                                width: this.state.size * .9,
                                transform: [{ scale: this.state.scale }],
                                opacity: this.state.opacity,
                                borderRadius: this.state.size / 2,
                                backgroundColor: this.props.color || 'black',
                            }}
                        />
                        {this.props.children}
                    </View>
                </View>

        );
    }

    onLayout(event) {
        let width = event.nativeEvent.layout.width;
        let height = event.nativeEvent.layout.height;
        let size = width < height ? width : height;
        this.setState({ size: 46 })
    }
}

RippleView.propTypes = {
    color: PropTypes.string.isRequired,
};

RippleView.defaultProps = {
    color: "white",
}

export default RippleView;
