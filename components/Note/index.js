import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles, { fonts, colors } from './styles';

export class Note extends Component {


    constructor(props) {
        super(props);

        this.state = {
            width: 0,
            height: 0,
        };
    }

    componentDidMount = () => {

    }

    render() {
        return (
            <View style={styles.rootContainer}>
                <View onLayout={(event) => { this.onLayout(event) }} style={styles.container}>
                    <Text style={styles.text}>{this.props.children}</Text>
                    <TouchableOpacity style={styles.btContainer}>
                        <Text style={styles.textAlarm}>10:50</Text>
                        <Icon name="bell" color={colors.secondary} size={fonts.bell}></Icon>
                    </TouchableOpacity>

                </View>
            </View>


        )
    }

    onLayout(event) {
        let width = event.nativeEvent.layout.width;
        let height = event.nativeEvent.layout.height;

        this.props.onMount(
            {
                id: this.props.id,
                width: width,
                height: height 
            });
    }
}

export default Note;