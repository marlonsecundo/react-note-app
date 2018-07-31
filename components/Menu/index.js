import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { ButtonIcon } from '../Generic';
import styles, { colors, fonts } from './styles';
export class Menu extends Component {

    render() {
        return (
            <View style={styles.rootContainer} onLayout={(event) => {this.props.onLayout(event.nativeEvent.layout)}}>
                <View style={styles.circleContainer} />
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




}

export default Menu;