import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';
import { StyleSheet, View, TouchableWithoutFeedback, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import { RippleView } from './Animation';
import { colors, fonts } from '../../styles';

class ButtonIcon extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            isPressIn: false,
            isPressOut: false,
        }
    }


    render() {
        return (
            <TouchableWithoutFeedback onPress={() => { this.onPress() }}
                onPressIn={() => { this.setState({ isPressIn: true, isPressOut: false }) }}
                onPressOut={() => { this.setState({ isPressIn: false, isPressOut: true }) }}>
                <View>
                    <RippleView isPressIn={this.state.isPressIn} isPressOut={this.state.isPressOut} color={colors.secondary} >
                        <Icon name={this.props.icon} color={colors.secondary} size={fonts.icon}></Icon>
                    </RippleView>
                </View>

            </TouchableWithoutFeedback>
        )
    }

    onPress() {
        this.props.onPress();
    }
}

const styles = StyleSheet.create({

});

ButtonIcon.propTypes = {
    icon: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};

export default ButtonIcon;