import React, { Component } from 'react';
import { View, Text, TextInput, Animated } from 'react-native';
import { ButtonIcon } from '../Generic';

import { TransitionView } from '../Generic/Animation';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../redux/actions/layout';

import styles, { colors } from './styles';

export class NewNoteView extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }


    render() {

        return (
            <TransitionView style={styles.rootContainer} {...this.getTransitionProps()} >
                <View>
                    <Text>Nova Nota</Text>
                    <TextInput></TextInput>
                    <View>
                        <ButtonIcon onPress={() => { }} icon="plus" color={colors.high}></ButtonIcon>
                        <ButtonIcon onPress={() => { }} icon="plus" color={colors.high}></ButtonIcon>
                    </View>
                </View>
            </TransitionView>
        );
    }

    getTransitionProps = () => ({
        startPos: { x: 0, y: -this.props.height - 175  },
        endPos : { x: 0, y: - this.props.height * 0.4},
        duration: 400,
        start: this.props.start
    });
}

const mapStateToProps = (state) => ({
    height: state.layout.headerHeight,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NewNoteView);
