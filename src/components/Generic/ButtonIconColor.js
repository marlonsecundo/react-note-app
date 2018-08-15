import React, { Component } from 'react';
import { View, Text, Animated, Easing, TouchableWithoutFeedback, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);
class ButtonIconColor extends Component {


  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(0),
      startColor: this.props.startColor,
      endColor: this.props.endColor
    };
  }

  onPress = () => {

    this.state.animation.setValue(0);

    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 500,
      easing: Easing.bezier(0.215, 0.610, 0.355, 1.000),
    }).start(() => {
      this.props.onPress();
    });
  }

  render() {

    let color = this.state.animation.interpolate({
      inputRange: [0, 0.90, 1],
      outputRange: [this.state.startColor, this.state.endColor, this.state.startColor]
    });

    let scale = this.state.animation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 1.3, 1]
    });


    return (

      <TouchableWithoutFeedback onPress={() => { this.onPress(); }}>
        <View style={[this.props.style, { flexGrow: 0, padding: 10, justifyContent: 'center', alignItems: 'center' }]}>
          <AnimatedIcon size={this.props.size} name={this.props.icon} style={{
            color: color,
            transform: [{ scaleX: scale }, { scaleY: scale }]
          }}>
          </AnimatedIcon>
        </View>
      </TouchableWithoutFeedback>

    );
  }
}

export default ButtonIconColor;
