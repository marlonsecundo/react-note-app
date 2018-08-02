import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Menu, NoteList, Footer } from '../../components';
import styles from './styles';

export default class Home extends Component {


    constructor(props) {
        super(props);

        this.state = {
            style: {
                opacity: 0,
            },
            heightSpace:
            {
                header: 0,
                footer: 0,
            }
        }
    }

    render() {
        return (
            <View style={[styles.rootContainer, this.state.style]} onLayout={(event) => { this.onLayout() }}>
                <Menu onLayout={(event) => { this.menuOnLayout(event) }}></Menu>
                <NoteList heightSpace={this.state.heightSpace}></NoteList>
                <Footer onLayout={(event) => { this.footerOnLayout(event) }}></Footer>
            </View>
        );
    }


    menuOnLayout = (event) => {
        this.setState({
            heightSpace:{
                header: event.height,
                footer: this.state.heightSpace.footer,
            }
        })
    }

    footerOnLayout = (event) => {
        this.setState({
            heightSpace:{
                header: this.state.heightSpace.header,
                footer: event.height,
            }
        })
    }

    onLayout = () => {
        this.setState({ style: { opacity: 1 } })
    }
}