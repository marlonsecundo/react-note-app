import React, { Component } from 'react';
import { View, Animated } from 'react-native';
import { ButtonIcon } from '../Generic';
import { NewNoteView } from "../index";
import { ExpandedView } from '../Generic/Animation';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as layoutActions from '../../redux/layout/actions';

import styles, { colors, radius, metrics } from './styles';

export class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            radius: new Animated.Value(radius),
            duration: 500,
            titleOpacity: new Animated.Value(1),

        }
    }

    componentDidUpdate() {
        this.props.isExpanded ? this.startExpandedMode() : this.startShrinkMode();
    }

    btPlusPress = () => {
        this.props.setVisibleNewNoteView(!this.props.isNewNoteVisible);
    }

    render() {

        return (
            <View style={styles.rootContainer} pointerEvents="box-none">
                <ExpandedView isExpanded={this.props.isExpanded} duration={500} maxHeight={metrics.roundHeight} minHeight={70} style={styles.menuContainer}>
                    <View pointerEvents="none" style={styles.roundContainer}>
                        <Animated.Text style={[styles.title, this.getOpacityStyle()]}>ATTACH NOTES</Animated.Text>
                        <Animated.View style={[styles.circleContainer, this.getRadiusStyle()]} />
                    </View>

                    <View pointerEvents="box-none" style={styles.buttonsContainer}>
                        <ButtonIcon onPress={() => { }} size={metrics.iconBig} icon="more-horizontal" color={colors.secondary}></ButtonIcon>
                        <View style={styles.plusContainer}>
                            <ButtonIcon size={metrics.iconBig} onPress={this.btPlusPress} icon="plus" color={colors.secondary}></ButtonIcon>
                        </View>
                        <ButtonIcon size={metrics.iconBig} onPress={() => { }} icon="trash-2" color={colors.secondary}></ButtonIcon>
                    </View>
                </ExpandedView>
                <NewNoteView style={styles.newNoteView}></NewNoteView>
            </View>
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
    isNewNoteVisible: state.layout.newNoteViewVisible
});

const mapDispatchToProps = (dispatch) => bindActionCreators(layoutActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Menu);