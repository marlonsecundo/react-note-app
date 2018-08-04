import React, { Component } from 'react';
import { View, Button, Animated } from 'react-native';
import { ButtonIcon } from '../Generic';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import styles, { colors, maxHeight, minHeight, radius } from './styles';
import * as actions from '../../redux/actions/layout';
import { ExpandedView } from '../Generic/Animation';

export class Menu extends Component {

    constructor(props) {
        super(props);

        this.props.setHeaderHeight(maxHeight);

        this.state = {
            radius: new Animated.Value(radius),
        }
    }

    render() {

        return (
            <ExpandedView maxHeight={maxHeight} minHeight={minHeight} isExpanded={this.props.isExpanded} duration={1000} style={[styles.rootContainer]}>

                <Animated.View style={[styles.circleContainer, this.getRadiusStyle()]} />

                <View style={styles.menuContainer}>
                    <ButtonIcon onPress={() => { }} icon="more-horizontal" color={colors.secondary}></ButtonIcon>
                    <View style={[styles.plusContainer]}>
                        <ButtonIcon onPress={() => { }} icon="plus" color={colors.secondary}></ButtonIcon>
                    </View>
                    <ButtonIcon onPress={() => { }} icon="trash-2" color={colors.secondary}></ButtonIcon>
                </View>

            </ExpandedView>
        )
    }

    startShrinkMode = () => {

    }

    startExpandedMode = () => {

    }

    getRadiusStyle = () => ({
        borderRadius: this.state.radius,
    });

}

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(null, mapDispatchToProps)(Menu);