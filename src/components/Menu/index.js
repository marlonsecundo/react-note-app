import React, { Component } from 'react';
import { View, Animated } from 'react-native';
import { ButtonIcon } from '../Generic';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import styles, { colors, maxHeight, minHeight, radius, newNoteHeight } from './styles';
import * as actions from '../../redux/actions/layout';
import { ExpandedView, RippleView } from '../Generic/Animation';
import { NewNoteView } from "../index";

import { direction } from '../Generic/Animation/TransitionView';


export class Menu extends Component {

    constructor(props) {
        super(props);

        this.props.setHeaderHeight(maxHeight);
        this.props.setIsExpanded(true);

        this.state = {
            radius: new Animated.Value(radius),
            isExpanded: true,
            duration: 500,
            titleOpacity: new Animated.Value(1),
            start: 'none'

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
            <ExpandedView removeClippedSubviews={true} maxHeight={maxHeight + newNoteHeight} minHeight={minHeight} isExpanded={this.state.isExpanded} duration={this.state.duration} style={[styles.rootContainer]}>
                <View style={styles.container}>
                    <Animated.Text style={[styles.title, this.getOpacityStyle()]}>ATTACH NOTES</Animated.Text>
                    <Animated.View style={[styles.circleContainer, this.getRadiusStyle()]} />
                </View>

                <View  style={styles.menuContainer}>
                    <View style={styles.buttonsContainer}>
                        <ButtonIcon onPress={() => { this.setState({ start: direction.reverse })}} icon="more-horizontal" color={colors.secondary}></ButtonIcon>
                        <View style={[styles.plusContainer]}>
                            <ButtonIcon onPress={() => { this.setState({ start: direction.normal }) }} icon="plus" color={colors.secondary}></ButtonIcon>
                        </View>
                        <ButtonIcon onPress={() => { }} icon="trash-2" color={colors.secondary}></ButtonIcon>
                    </View>
                    <NewNoteView start={this.state.start}></NewNoteView>
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
            Animated.timing(this.state.titleOpacity, {
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