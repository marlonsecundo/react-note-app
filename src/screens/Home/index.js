import React, { Component } from 'react';
import { View } from 'react-native';
import { Menu, NoteList, ClearNotes } from '../../components';

import styles from './styles';

export default class Home extends Component {


    constructor(props) {
        super(props);

        this.state = {
            style: {
                opacity: 0,
            },
        }
    }

    render() {
        return (
            <View style={[styles.rootContainer, this.state.style]} onLayout={(event) => { this.onLayout() }}>
                <Menu></Menu>
                <NoteList></NoteList>
                <ClearNotes></ClearNotes>
            </View>
        );
    }

    onLayout = () => {
        this.setState({ style: { opacity: 1 } })
    }
}