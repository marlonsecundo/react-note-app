import React, { Component } from 'react';
import { View } from 'react-native';
import { ButtonIcon } from '../Generic';
import styles, { colors, screenWidth, height, radius } from './styles';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/animation';

export class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {};

        this.props.updateHeaderLayout({ left: 0, top: 0, width: screenWidth, height: height });
    }


    render() {
        return (
            <View style={[styles.rootContainer, this.getLayout()]}>
                <View style={styles.circleContainer} />
                <View style={styles.menuContainer}>
                    <ButtonIcon icon="more-horizontal" color={colors.secondary}></ButtonIcon>
                    <View style={styles.plusContainer}>
                        <ButtonIcon icon="plus" color={colors.secondary}></ButtonIcon>
                    </View> 
                    <ButtonIcon icon="trash-2" color={colors.secondary}></ButtonIcon>
                </View>
            </View>
        )
    }

    getLayout() {
        return this.props.headerLayout;
    }
}


const mapStateToProps = (state) => ({
    headerLayout: state.animation.headerLayout,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Menu);