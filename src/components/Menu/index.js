import React, { Component } from 'react';
import { View, Animated } from 'react-native';
import { ButtonIcon } from '../Generic';
import { NewNoteView, Dialog } from "../index";
import { ExpandedView } from '../Generic/Animation';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as layoutActions from '../../redux/actions/layout.actions';
import * as notesActions from '../../redux/actions/notes.actions';

import styles, { colors, radius, metrics } from './styles';
import animations from '../../styles/animations';
export class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            radius: new Animated.Value(radius),
            duration: 400,
            titleOpacity: new Animated.Value(1),
            dialogVisible: false,
        }
    }

    componentDidUpdate() {
        this.props.isExpanded ? this.startExpandedMode() : this.startShrinkMode();
    }

    btPlusPress = () => {
        this.props.setVisibleNewNoteView(!this.props.isNewNoteVisible);
    }

    btTrashPress = () => {
        this.setState({ dialogVisible: true });
    }

    onCancelDialog = () => {
        this.setState({ dialogVisible: false });
    }

    onConfirmDialog = () => {
        this.setState({ dialogVisible: false });
        this.props.clearNotes();
    }

    render() {

        return (
            <View style={styles.rootContainer} pointerEvents="box-none">
                <ExpandedView isExpanded={this.props.isExpanded} duration={this.state.duration} maxHeight={metrics.roundHeight} minHeight={70} style={styles.menuContainer}>
                    {this.renderRoundedBackground()}
                    {this.renderMenuButtons()}
                </ExpandedView>
                <NewNoteView style={styles.newNoteView}></NewNoteView>
                {this.renderDialog()}
            </View>
        )
    }

    renderDialog = () => (
        <Dialog visible={this.state.dialogVisible} onPress={this.onConfirmDialog} onCancel={this.onCancelDialog} text="Apagar todas as notas?"></Dialog>
    )

    renderRoundedBackground = () => (
        <View pointerEvents="none" style={styles.roundContainer}>
            <Animated.Text style={[styles.title, this.getOpacityStyle()]}>ATTACH NOTES</Animated.Text>
            <Animated.View style={[styles.circleContainer, this.getRadiusStyle()]} />
        </View>
    )

    renderMenuButtons = () => (
        <View pointerEvents="box-none" style={styles.buttonsContainer}>
            <ButtonIcon onPress={this.props.openMenu} size={metrics.iconBig} icon="more-horizontal" color={colors.secondary}></ButtonIcon>
            <View style={styles.plusContainer}>
                <ButtonIcon size={metrics.iconBig} onPress={this.btPlusPress} icon="plus" color={colors.secondary}></ButtonIcon>
            </View>
            <ButtonIcon size={metrics.iconBig} onPress={this.btTrashPress} icon="trash-2" color={colors.secondary}></ButtonIcon>
        </View>
    )

    getRadiusStyle = () => ({
        borderRadius: this.state.radius,
    });

    getOpacityStyle = () => ({
        opacity: this.state.titleOpacity,
    });

    startShrinkMode = () => {
        Animated.parallel([
            Animated.timing(this.state.radius, {
                toValue: 0,
                duration: this.state.duration / 2.0,
                easing: animations.easeOut,
            }),
            Animated.timing(this.state.titleOpacity, {
                toValue: 0,
                duration: this.state.duration,
                easing: animations.easeOut,
            })
        ]).start();
    }

    startExpandedMode = () => {

        Animated.parallel([
            Animated.timing(this.state.radius, {
                toValue: radius,
                duration: this.state.duration * 1.1,
                easing: animations.easeOut,
            }),
            Animated.timing(this.state.titleOpacity, {
                toValue: 1,
                duration: this.state.duration,
                easing: animations.easeIn,
            })
        ]).start();

    }

}

const mapStateToProps = (state) => ({
    isExpanded: state.layout.isExpanded,
    isNewNoteVisible: state.layout.newNoteViewVisible
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ ...layoutActions, ...notesActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Menu);