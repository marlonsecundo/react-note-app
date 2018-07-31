import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { ButtonIcon } from '../Generic';
import styles, { colors, fonts } from './styles';
export class Menu extends Component {

    render() {
        return (
            <View style={styles.rootContainer} onLayout={(event) => { this.props.onLayout(event.nativeEvent.layout) }}>
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




}

//<Text style={styles.title}>ATTACH NOTES</Text>


export default Menu;