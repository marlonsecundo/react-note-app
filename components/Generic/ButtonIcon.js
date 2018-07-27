import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';
import { StyleSheet, View, TouchableWithoutFeedback, TouchableNativeFeedback } from 'react-native';
import { RippleView } from './Animation';
import { colors, fonts } from '../../styles';

class ButtonIcon extends React.PureComponent {

    render() {
        return (
            <View style={styles.container}>
                <RippleView  color={colors.secondary} >
                <Icon name={this.props.icon} color={colors.secondary} size={fonts.icon}></Icon>
                </RippleView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
    },

});

ButtonIcon.propTypes = {
    icon: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};

export default ButtonIcon;