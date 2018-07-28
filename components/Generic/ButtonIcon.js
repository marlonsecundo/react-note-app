import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';
import { StyleSheet, View, TouchableWithoutFeedback, TouchableNativeFeedback } from 'react-native';
import { RippleView } from './Animation';
import { colors, fonts } from '../../styles';

class ButtonIcon extends React.PureComponent {

    render() {
        return (
            <RippleView color={colors.secondary} >
                <Icon name={this.props.icon} color={colors.secondary} size={fonts.icon}></Icon>
            </RippleView>
        )
    }
}

const styles = StyleSheet.create({
    container:
    {
        backgroundColor: 'green',
    },

});

ButtonIcon.propTypes = {
    icon: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};

export default ButtonIcon;