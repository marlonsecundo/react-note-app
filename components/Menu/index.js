import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { ButtonIcon } from '../Generic';
import styles, { colors, fonts } from './styles';
export class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            width: 0,
            height: 0,
            borderRadius: 0,
            scaleY: 1,
        }
    }

    render() {
        return (
            <View onLayout={(event) => { this.onLayout(event) }} style={styles.rootContainer}>
                <View style={[styles.circleContainer, this.radiusStyle()]} />
                <View style={styles.menuContainer}>
                    <View style={styles.topMenuContainer}>
                        <ButtonIcon icon="more-horizontal" color={colors.secondary}></ButtonIcon>
                        <Text style={styles.title}>ATTACH NOTES</Text>
                        <ButtonIcon icon="trash-2" color={colors.secondary}></ButtonIcon>
                    </View>
                    <View style={styles.btPlusContainer}>
                        <ButtonIcon icon="plus" color={colors.secondary}></ButtonIcon>
                    </View>

                </View>
            </View>
        )
    }

    onLayout(event) {
        let width = event.nativeEvent.layout.width;
        let borderRadius = width / 2;
        this.setState({ width: width, borderRadius: borderRadius })
    }

    radiusStyle = () => {
        return {
            minHeight: this.state.width,
            width: this.state.width,
            transform: [{ scaleX: 1.5 }, { translateY: - this.state.width / 1.5 }],
            borderRadius: this.state.borderRadius
        }
    }




}

export default Menu;