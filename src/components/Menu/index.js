import React, { Component } from 'react';
import { View, Text, Button, Animated } from 'react-native';
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
        this.props.setIsExpanded(true);

        this.state = {
            radius: new Animated.Value(radius),
            isExpanded: this.props.isExpanded,
            duration: 500,
            titleOpacity: new Animated.Value(1),
        }
    }

    componentDidUpdate(prevProps) {
        if (this.state.isExpanded !== this.props.isExpanded) {

            this.setState({ isExpanded: this.props.isExpanded });
            this.props.isExpanded ? this.startExpandedMode() : this.startShrinkMode();
        }
    }

    render() {

        return (
            <ExpandedView maxHeight={maxHeight} minHeight={minHeight} isExpanded={this.state.isExpanded} duration={this.state.duration} style={[styles.rootContainer]}>

                <View style={styles.container}>
                    <Animated.Text style={[styles.title, this.getOpacityStyle()]}>ATTACH NOTES</Animated.Text>
                    <Animated.View style={[styles.circleContainer, this.getRadiusStyle()]} />

                </View>

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
        Animated.parallel([
            Animated.timing(this.state.radius, {
                toValue: 0,
                duration: this.state.duration / 2.0,
            }),
            Animated.timing(this.state.titleOpacity, {
                toValue: 0,
                duration: this.state.duration,
            })
        ]).start();
    }

    startExpandedMode = () => {

        Animated.parallel([
            Animated.timing(this.state.radius, {
                toValue: radius,
                duration: this.state.duration * 1.1,
            }),
            Animated.timing(this.state.titleOpacity,{
                toValue: 1,
                duration: this.state.duration
            })
        ]).start();

    }

    getRadiusStyle = () => ({
        borderRadius: this.state.radius,
    });

    getOpacityStyle = () => ({
        opacity: this.state.titleOpacity,
    });

}

const mapStateToProps = (state) => ({
    isExpanded: state.layout.isExpanded,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Menu);